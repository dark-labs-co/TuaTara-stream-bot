//? Helper Function Updates Scene Right Segment Right with a currency
const CoinGecko = require('coingecko-api')
const fetch = require('node-fetch')
global.fetch = fetch
global.Headers = fetch.Headers
var fs = require('fs')

module.exports = function GraphCollection(currency, symbol) {

    // function GraphCollection(timeRange, intervalRange) {

    let PriceLogger = async () => {
        const CoinGeckoClient = new CoinGecko();
        try {
            // let dataEth = await CoinGeckoClient.coins.fetch('ethereum', {});
            let dataCoin = await CoinGeckoClient.coins.fetchMarketChart(symbol, { days: 2 })
            return dataCoin;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }
    PriceLogger().then(result => {
        processRes(result)
    }).catch(err => {
        console.log(`err ${err}`);
    });

    let datPrices = []
    let datVolume = []
    let datMarketCaps = []

    function processRes(res) {
        console.log(res);
        for (let index = 0; index < res.data.prices.length; index++) {
            if (res.data.prices[index] && res.data.market_caps[index][1]) {
                const element = res.data.prices[index][1];
                datPrices.push(JSON.stringify({ "ETH": element }))
            }
        }

        for (let index = 0; index < res.data.total_volumes.length; index++) {
            if (res.data.total_volumes[index] && res.data.market_caps[index][1]) {
                const element = res.data.total_volumes[index][1];
                let indexItm = "ETH" + index

                datVolume.push(JSON.stringify({ "symbol": indexItm, "datas": element }))
            }
        }

        for (let index = 0; index < res.data.market_caps.length; index++) {
            if (res.data.market_caps[index] && res.data.market_caps[index][1]) {
                const element = res.data.market_caps[index][1];
                datMarketCaps.push(JSON.stringify({ "ETH": element }))
            }
        }
        fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-right/src/dataLinkMarketWatch.json', `{ "prices": [${datPrices}], "volume":[${datVolume}], "market_caps":[${datMarketCaps}]}`, function (err) {
            if (err) throw err;
            console.log('Saved-marketWatch-Graph-max');
        });

    }
    fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-left/src/segment1.json', `{ "currency": "${currency}","symbol": "${symbol}"}`, function (err) {
        if (err) throw err;
        console.log('Saved-segment-left-1');
    });

    fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-right/src/segment1.json', `{ "currency": "${currency}","symbol": "${symbol}"}`, function (err) {
        if (err) throw err;
        console.log('Saved-segment-right-1');
    });
}