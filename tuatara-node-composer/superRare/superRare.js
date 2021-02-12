const fetch = require('node-fetch')
const moment = require('moment')
global.fetch = fetch
global.Headers = fetch.Headers
var myHeaders = new Headers();
var fs = require('fs');

function SuperRare() {
    let artworksDat = { recent: [] }
    // module.exports = function AaveScript() {

    let = {}
    let depositDat = {}

    let ETHDat = { borrow: [], deposit: [] }
    let USDTDat = { borrow: [], deposit: [] }
    let USDCDat = { borrow: [], deposit: [] }
    let ENJDat = { borrow: [], deposit: [] }
    let WBTCDat = { borrow: [], deposit: [] }
    let TUSDDat = { borrow: [], deposit: [] }
    let DAIDat = { borrow: [], deposit: [] }
    let sUSDDat = { borrow: [], deposit: [] }
    let BUSDDat = { borrow: [], deposit: [] }

    function superRareQuery() {
        let today = new Date();
        let day = today.getDate();

        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Accept", "audio/wav");
        myHeaders.append("Authorization", "Basic YXBpa2V5OmR4RVltWkN3ZW1NZ1lZTkZZNjIza05rYzh6QjRDTVQ1dFVtb1ZjYk1SUzJC");
        myHeaders.append("Cookie", "__cfduid=d8a76ebf66f02b73e4ed2d3a0c052d1901609124830");

        let graphql = JSON.stringify({
            query: `{
                artworks(first: 100 orderBy:created orderDirection:desc) {
                  descriptorUri
                  tokenId
                  salePrice
                  currentBid{
                      amount
                  }
                  creator {
                    id
                  }
                  owner {
                    id
                  }
                }
              }
              `
        })

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: graphql,
            redirect: 'follow'
        };

        fetch("https://api.thegraph.com/subgraphs/name/protofire/superrare", requestOptions)
            .then(response => response.text())
            .then(result => parseSuperRare(JSON.parse(result)))
            .catch(error => console.log('error', error));
    }

    function parseSuperRare(r) {
        let artworks = r.data.artworks
        //? parse Artworks
        for (let i = 0; i < artworks.length; i++) {
            let uri = artworks[i].descriptorUri
            console.log(uri);
            fetch(uri)
                .then(response => response.text())
                .then(result => parseSuperRareUri(JSON.parse(result)))
                .catch(error => console.log('error', error));
        }
        function parseSuperRareUri(r) {
            artworksDat.recent.push(r);
            console.log(artworksDat.recent.length);
            if (artworksDat.recent.length >= 100) {
                writeF(artworksDat)
            }
        }
    };

    //? Save Local Data
    function writeF(artworksDat) {
        // fs.writeFile('./rareData.json', JSON.stringify({ artworksDat }), function (err) {
        //     if (err) throw err;
        //     console.log('rareDatLocal');
        // });

        fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-left/src/rareData.json', JSON.stringify({ artworksDat }), function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }
    superRareQuery()
}
SuperRare()
    //     // ? parse Rates
    //     for (let j = 0; j < reserve.length; j++) {
    //         console.log(reserve[j].symbol)
    //         console.log(reserve[j].id)
    //         rateDat.symbol.push(reserve[j].symbol)
    //         rateDat.id.push(reserve[j].id)
    //         rateDat.stableBorrowRate.push(reserve[j].stableBorrowRate)
    //         rateDat.variableBorrowRate.push(reserve[j].variableBorrowRate)
    //         rateDat.scriptDat.push(`The Annual Variable Borrow Rate for ${reserve[j].symbol} is ${(reserve[j].variableBorrowRate * 100).toFixed(2)}% The Annual Stable Borrow Rate for`)
    //     }

    //     //? parse Borrows
    //     for (let k = 0; k < borrow.length; k++) {
    //         let t = borrow[k].timestamp
    //         let dayString = moment.unix(t).format("DD");
    //         let bAmount = parseInt(borrow[k].amount)
    //         let id = parseInt(borrow[k].id)
    //         let symbol = borrow[k].reserve.symbol

    //         // if (d == dayString) {
    //         if (symbol === 'ETH') {
    //             // borrowDat.id.push(id)
    //             ETHDat.borrow.push(bAmount)
    //         }
    //         if (symbol === 'USDC') {
    //             // borrowDat.id.push(id)
    //             USDCDat.borrow.push(bAmount)
    //         }
    //         if (symbol === 'ENJ') {
    //             // borrowDat.id.push(id)
    //             ENJDat.borrow.push(bAmount)
    //         }
    //         if (symbol === 'WBTC') {
    //             // borrowDat.id.push(id)
    //             WBTCDat.borrow.push(bAmount)
    //         }
    //         if (symbol === 'TUSD') {
    //             // borrowDat.id.push(id)
    //             TUSDDat.borrow.push(bAmount)
    //         }
    //         if (symbol === 'DAI') {
    //             // borrowDat.id.push(id)
    //             DAIDat.borrow.push(bAmount)
    //         }
    //         if (symbol === 'sUSD') {
    //             // borrowDat.id.push(id)
    //             sUSDDat.borrow.push(bAmount)
    //         }
    //         if (symbol === 'BUSD') {
    //             // borrowDat.id.push(id)
    //             BUSDDat.borrow.push(bAmount)
    //         }
    //         // }
    //     }

    //     //? parse Deposits
    //     for (let j = 0; j < deposit.length; j++) {
    //         let t = deposit[j].timestamp
    //         let dayString = moment.unix(t).format("DD");
    //         let dAmount = parseInt(deposit[j].amount)
    //         let id = parseInt(deposit[j].id)
    //         let symbol = deposit[j].reserve.symbol

    //         // if (d == dayString) {
    //         if (symbol === 'ETH') {
    //             // borrowDat.id.push(id)
    //             ETHDat.deposit.push(dAmount)
    //         }
    //         if (symbol === 'USDC') {
    //             // borrowDat.id.push(id)
    //             USDCDat.deposit.push(dAmount)
    //         }
    //         if (symbol === 'ENJ') {
    //             // borrowDat.id.push(id)
    //             ENJDat.deposit.push(dAmount)
    //         }
    //         if (symbol === 'WBTC') {
    //             // borrowDat.id.push(id)
    //             WBTCDat.deposit.push(dAmount)
    //         }
    //         if (symbol === 'TUSD') {
    //             // borrowDat.id.push(id)
    //             TUSDDat.deposit.push(dAmount)
    //         }
    //         if (symbol === 'DAI') {
    //             // borrowDat.id.push(id)
    //             DAIDat.deposit.push(dAmount)
    //         }
    //         if (symbol === 'sUSD') {
    //             // borrowDat.id.push(id)
    //             sUSDDat.deposit.push(dAmount)
    //         }
    //         if (symbol === 'BUSD') {
    //             // borrowDat.id.push(id)
    //             BUSDDat.deposit.push(dAmount)
    //         }
    //         // }
    //     }
    //     // console.log(borrowDat)

    //     function getTotal(sym, dat) {
    //         let sumB = dat.borrow.reduce(function (a, b) {
    //             return a + b;
    //         }, 0);

    //         let sumD = dat.deposit.reduce(function (a, b) {
    //             return a + b;
    //         }, 0);


    //         if (sym === 'ETH') {
    //             borrowDat.total_amount_borrowed_100samp_ETH = sumB
    //             depositDat.total_amount_deposited_100samp_ETH = sumD
    //         }
    //         if (sym === 'USDC') {
    //             borrowDat.total_amount_borrowed_100samp_USDC = sumB
    //             depositDat.total_amount_deposited_100samp_USDC = sumD
    //         }
    //         if (sym === 'ENJ') {
    //             borrowDat.total_amount_borrowed_100samp_ENJ = sumB
    //             depositDat.total_amount_deposited_100samp_ENJ = sumD
    //         }
    //         if (sym === 'WBTC') {
    //             borrowDat.total_amount_borrowed_100samp_WBTC = sumB
    //             depositDat.total_amount_deposited_100samp_WBTC = sumD
    //         }
    //         if (sym === 'TUSD') {
    //             borrowDat.total_amount_borrowed_100samp_TUSD = sumB
    //             depositDat.total_amount_deposited_100samp_TUSD = sumD
    //         }
    //         if (sym === 'DAI') {
    //             borrowDat.total_amount_borrowed_100samp_DAI = sumB
    //             depositDat.total_amount_deposited_100samp_DAI = sumD
    //         }
    //         if (sym === 'sUSD') {
    //             borrowDat.total_amount_borrowed_100samp_sUSD = sumB
    //             depositDat.total_amount_deposited_100samp_sUSD = sumD
    //         }
    //         if (sym === 'BUSD') {
    //             borrowDat.total_amount_borrowed_100samp_BUSD = sumB
    //             depositDat.total_amount_deposited_100samp_BUSD = sumD
    //         }
    //     }

    //     getTotal('ETH', ETHDat)
    //     getTotal('USDT', USDTDat)
    //     getTotal('USDC', USDCDat)
    //     getTotal('ENJ', ENJDat)
    //     getTotal('WBTC', WBTCDat)
    //     getTotal('TUSD', TUSDDat)
    //     getTotal('DAI', DAIDat)
    //     getTotal('sUSD', sUSDDat)
    //     getTotal('BUSD', BUSDDat)

    //     writeF(borrowDat);

    //     //? Save Local Data
    //     function writeF() {
    //         fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-node-composer/aave/aData.json', JSON.stringify({ borrowDat, depositDat, rateDat, flashLoanDat }), function (err) {
    //             if (err) throw err;
    //             console.log('Saved!');
    //         });
    //     }

    //     //? Save scene left Data
    //     function writeF() {
    //         fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-left/src/dataLinkAaveRaw.json', JSON.stringify({ borrowDat, depositDat, rateDat, flashLoanDat }), function (err) {
    //             if (err) throw err;
    //             console.log('Saved!');
    //         });
    //     }
    // }
