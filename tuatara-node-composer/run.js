const CoinGecko = require('coingecko-api')
const fetch = require('node-fetch')
global.fetch = fetch
global.Headers = fetch.Headers
var request = require('request')
const child_process = require("child_process")
var fs = require('fs')

module.exports = function Run() {
    //? Begin segment process
    //* Write to tuatara-right
    fs.writeFile('D:/Projects/TuraTara/Repo/streamBot/tuatara-scene-right/src/segment0.json', '{ "segment": "pause" }', function (err) {
        if (err) throw err;
        console.log('Paused TuaTara Right');
    });

    fs.writeFile('D:/Projects/TuraTara/Repo/streamBot/tuatara-scene-left/src/segment0.jsonn', '{ "segment": "marketWatch" }', function (err) {
        if (err) throw err;
        console.log('Data TuaTara Left');
    });

    //? Get Current Market Prices
    //? Call CoinGecko API Client
    let PriceLogger = async () => {
        const CoinGeckoClient = new CoinGecko();

        try {
            let dataEth = await CoinGeckoClient.coins.fetch('ethereum', {});
            return dataEth;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
    PriceLogger().then(result => {
        processRes('marketWatch', result)
    }).catch(err => {
        console.log(`err ${err}`);
    });


    //? Get Current Gas Prices
    //? Fetch Etherscan API
    const options = {
        'method': 'POST',
        'url': 'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=IEZ8JK8HXMTT47X9KTWUMM7GJSMMD99TWB',
        'headers': {
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        processRes('gas', JSON.parse(response.body));
    });

    let script = ['Hello world, this is what is happening in Dee Fii...']

    let dataSend = {
        price_change_24h: '',
        market_data: '',
        lastBlock: '',
        safeGasPrice: '',
        proposeGasPrice: '',
        fastGasPrice: '',
    }

    function processRes(resType, dat) {
        //?? Process market prices
        if (resType === 'marketWatch') {
            let marketData = dat.data.market_data
            // console.log(marketData);
            // reads: A loss of 12% | A gain of 12%
            let todaysPercentage = marketData.price_change_24h <= 0 ? 'a loss of ' + ((marketData.price_change_24h.toFixed(2)) * -1) : 'a gain of ' + (marketData.price_change_24h)
            console.log(marketData.price_change_24h);

            dataSend.price_change_24h = marketData.price_change_24h
            dataSend.market_data = marketData

            // console.log(marketData);
            script.push(`One Ethereum is worth ${marketData.current_price.usd} u s d , ${todaysPercentage}% in the last 24 hours, ${marketData.price_change_percentage_7d_in_currency.usd.toFixed(2)} over the last week and a gain of %150 ${marketData.price_change_percentage_30d_in_currency.usd.toFixed(2)} over the last 30days`)
        }

        //?? Process gas prices
        if (resType === 'gas') {
            let lastBlock = dat.result.LastBlock
            let safeGasPrice = dat.result.SafeGasPrice
            let proposeGasPrice = dat.result.ProposeGasPrice
            let fastGasPrice = dat.result.FastGasPrice

            dataSend.lastBlock = lastBlock
            dataSend.safeGasPrice = safeGasPrice
            dataSend.proposeGasPrice = proposeGasPrice
            dataSend.fastGasPrice = fastGasPrice

            console.log(`LastBlock ${lastBlock}`)
            console.log(`SafeGasPrice ${safeGasPrice}`)
            console.log(`ProposeGasPrice ${proposeGasPrice}`)
            console.log(`FastGasPrice ${fastGasPrice}`)

            let gasScript = `Now for the gas Prices; Safe is ${safeGasPrice} Gwei, Propose is ${proposeGasPrice} Gwei, and Fast is ${fastGasPrice}. The Latest block is number ${lastBlock}. `

            // console.log(script.toString())

            function scriptString(scriptIn, datSend) {
                console.log(datSend);
                let scriptToString = (scriptIn.join(''))
                console.log(datSend)

                dataSend.gas = 'datSend'

                fs.writeFile('text.txt', scriptToString, function (err) {
                    if (err) throw err;
                    console.log('Saved!');
                });

                if (datSend) {
                    fs.writeFile('D:/Projects/TuraTara/Repo/streamBot/tuatara-scene-left/src/dataLinkRaw.json', JSON.stringify(datSend), function (err) {
                        if (err) throw err;
                        console.log('Saved!');
                    });
                }
                else {
                    console.log('Wait - noData')
                }


                child_process.spawn('D:/Projects/TuraTara/Repo/streamBot/tuatara-node-composer/textToSpeech.sh', [], { shell: process.platform == 'win32' })
            }
            scriptString(script, dataSend)
        }
    }
}
