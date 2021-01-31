const fetch = require('node-fetch')
const moment = require('moment')
const CoinGecko = require('coingecko-api')
global.fetch = fetch
global.Headers = fetch.Headers
var myHeaders = new Headers();
var fs = require('fs');
const CoinList = require('./coinList.json')
var async = require("async");
const child_process = require("child_process")
const PostProcess = require('../postProcess')
// function AaveScript() {


module.exports = function AaveScript() {

    let flashLoanDat = {}
    let rateDat = {
        script: '',
        scriptDat: [],
        symbol: [],
        id: [],
        stableBorrowRate: [],
        variableBorrowRate: [],
        liquidityRate: []
    }

    let lendingData = []

    let coinData = []
    let rateData = []

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    //? reads coinList.json and returns an object with its key pair 

    function makeCoinDataObj(coinList) {
        //? parse coinList
        for (let i = 0; i < coinList.length; i++) {
            console.log(coinList[i].symbol);
            coinData.push({ symbol: coinList[i].symbol, borrow: [0], deposit: [0], vsEth: 0 })
        }

    }
    makeCoinDataObj(CoinList)

    function aaveGraphQuery() {
        let today = new Date();
        let day = today.getDate();

        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "audio/wav");
        myHeaders.append("Authorization", "Basic YXBpa2V5OmR4RVltWkN3ZW1NZ1lZTkZZNjIza05rYzh6QjRDTVQ1dFVtb1ZjYk1SUzJC");
        myHeaders.append("Cookie", "__cfduid=d8a76ebf66f02b73e4ed2d3a0c052d1901609124830");

        let graphql = JSON.stringify({
            query: `{ 
            flashLoans(first: 1000 orderBy:timestamp orderDirection:desc) {
                timestamp
                id
                target
                totalFee
                protocolFee
                amount
                reserve {
                            id
                            symbol
                            price {
                                priceInEth
                              }
                        }
                    pool {
                        id
                        lendingPool
                    }
            }
            borrows(first: 1000 orderBy:timestamp orderDirection:desc) {
                timestamp
                id
                amount
                borrowRate
                user {
                        id
                }          
                reserve {
                    id
                    symbol
                    price {
                        priceInEth
                      }
                }
            }
            deposits(first: 1000 orderBy:timestamp orderDirection:desc) {
                timestamp
                id
                amount
                user {
                        id
                }          
                reserve {
                    id
                    symbol
                    price {
                        priceInEth
                      }
                }
            }
            reserves(first:22){
                symbol
                id
                name
                variableBorrowRate
                stableBorrowRate
                liquidityRate
                price {
                        priceInEth
                      }
                }
            }`
        })

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: graphql,
            redirect: 'follow'
        };

        fetch("https://api.thegraph.com/subgraphs/name/aave/protocol", requestOptions)
            .then(response => response.text())
            .then(result => parseAvveQuery(JSON.parse(result), day))
            .catch(error => console.log('error', error));
    }


    function parseAvveQuery(r, d) {
        let flash = r.data.flashLoans
        let borrow = r.data.borrows
        let deposit = r.data.deposits
        let reserve = r.data.reserves

        //? parse FlashLoans
        for (let i = 0; i < flash.length; i++) {
            let t = flash[i].timestamp
            let dayString = moment.unix(t).format("DD");
            let amount = parseInt(flash[i].amount)

            if (d == dayString) {
                // console.log(`Flash: ${amount.toFixed()} ${flash[i].reserve.symbol}`)
            }
        }

        // ? parse Rates
        for (let i = 0; i < reserve.length; i++) {
            // console.log(reserve[i].symbol)
            // console.log(reserve[i].id)
            rateDat.symbol.push(reserve[i].symbol)
            rateDat.id.push(reserve[i].id)
            rateDat.stableBorrowRate.push(reserve[i].stableBorrowRate)
            rateDat.variableBorrowRate.push(reserve[i].variableBorrowRate)
            rateDat.liquidityRate.push(reserve[i].liquidityRate)
            rateDat.scriptDat.push(`The Annual Variable Borrow Rate for ${reserve[i].symbol} is ${(reserve[i].variableBorrowRate * 100).toFixed(2)}% The Annual Stable Borrow Rate for`)

            rateData.push({
                "vbr": reserve[i].variableBorrowRate, "symbol": reserve[i].symbol, "name": reserve[i].name, "sbr": reserve[i].stableBorrowRat, "liquidityRate": reserve[i].liquidityRate, "vsEth": reserve[i].price
            })
        }

        //? parse Borrows
        for (let i = 0; i < borrow.length; i++) {
            let t = borrow[i].timestamp
            let dayString = moment.unix(t).format("DD");
            let bAmount = parseInt(borrow[i].amount)
            let id = parseInt(borrow[i].id)
            let symbol = borrow[i].reserve.symbol
            let priceInEth = borrow[i].reserve.price
            // coinData.borrow.push(bAmount)
            for (let i = 0; i < CoinList.length; i++) {
                //? check if symbol in list matches the returned element and push it to borrow array 
                if (symbol === CoinList[i].symbol) {
                    const element = coinData[i];
                    element.borrow.push(bAmount)
                    element.vsEth = priceInEth.priceInEth
                }
                // console.log(coinData)
            }
        }

        //? parse Deposits
        for (let i = 0; i < deposit.length; i++) {
            let t = deposit[i].timestamp
            let dayString = moment.unix(t).format("DD");
            let bAmount = parseInt(deposit[i].amount)
            let id = parseInt(deposit[i].id)
            let symbol = deposit[i].reserve.symbol
            let priceInEth = deposit[i].reserve.price

            for (let i = 0; i < CoinList.length; i++) {
                //? check if symbol in list matches the returned element and push it to deposit array 
                if (symbol === CoinList[i].symbol) {
                    const element = coinData[i];
                    element.deposit.push(bAmount)
                    if (element.vsEth <= 0) {
                        element.vsEth = priceInEth.priceInEth
                    }

                }
            }
        }
        // console.log(coinData)

        //? Array sum helper function
        function getTotal(dat, lendType) {
            if (dat && dat[lendType]) {
                let sumF = dat[lendType].reduce(function (a, b) {
                    return a + b;
                }, 0);
                return (sumF)
            }
        }

        //? push coin data to lending dataset
        for (let i = 0; i < coinData.length; i++) {
            const element = coinData[i];
            lendingData.push({ "name": element.name, "symbol": element.symbol, "borrow": getTotal(element, 'borrow'), "deposit": getTotal(element, 'deposit'), "vsEth": element.vsEth })
        }

        //? Save Local Data
        function writeAdata() {
            fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-node-composer/aave/aData.json', JSON.stringify({ lendingData, rateData, flashLoanDat }), function (err) {
                if (err) throw err;
                console.log('Saved-aData');
            });
        }

        //? Save scene left Data
        function writeAdataLeft() {
            fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-left/src/dataLinkAaveRaw.json', JSON.stringify({ lendingData, rateData, flashLoanDat }), function (err) {
                if (err) throw err;
                console.log('Saved-tuatara-scene-left/dataLinkAaveRaw');
            });
        }

        writeAdata();
        writeAdataLeft();
    }
    aaveGraphQuery();
    PostProcess()

    // child_process.spawn('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-node-composer/textToSpeech.sh', [], { shell: process.platform == 'win32' })

}
// AaveScript()