const CoinGecko = require('coingecko-api');
const CoinList = require('./coinList.json')
var fs = require('fs');

let coinDatAgg = []
let coinDatRaw = []

let coinListParse = []


for (let index = 0; index < CoinList.length; index++) {
    const currency = CoinList[index].currency;
    coinListParse.push(currency)
}


//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();

//3. Make calls
let CoinGeckoCall = async () => {
    let data = await CoinGeckoClient.simple.price({
        ids: coinListParse,
        vs_currencies: ['btc', 'eth', 'usd'],
        include_24hr_vol: 'true'
    })
    parseVols(data)
}

function parseVols(resDat) {

    for (let index = 0; index < CoinList.length; index++) {
        const coinFromList = CoinList[index];
        let datCoin = resDat.data[coinFromList.currency]

        console.log(coinFromList)
        if (datCoin && datCoin.usd_24h_vol) {
            coinDatRaw.push({ "name": coinFromList, "volume": datCoin.usd_24h_vol, "rank": 0 })
        }
    }

    // function numToEnglish(numBig) {
    //     if (numBig >= 1000) {
    //         let opt0 = `BTC at ${String(numBig).charAt(0)}${String(numBig).charAt(1)}k`
    //     }
    // }
}


var sort = function (prop, arr) {
    prop = prop.split('.');
    var len = prop.length;

    arr.sort(function (a, b) {
        var i = 0;
        while (i < len) {
            a = a[prop[i]];
            b = b[prop[i]];
            i++;
        }
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    });
    return arr;
};

//? Call sort reverse to highest first
function processCall(coinDat) {
    let sortedCoins = sort('volume', coinDat).reverse()
    for (let index = 0; index < sortedCoins.length; index++) {
        const coin = sortedCoins[index];
        const coinName = coin.name;
        const coinVolume = coin.volume;
        coinDatAgg.push({ "name": coinName, "volume": coinVolume, "rank": index })
    }
}

function wrieteCoinRank(coinAgg) {
    fs.writeFile("D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-node-composer/coinListRank.json",
        JSON.stringify({ coinAgg }), function (err) {
            if (err) throw err;
            console.log('Saved-coin-Rank-volume');
        });
}


const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

module.exports = CoinGeckoGlobalAgg = async () => {
    //CoinGeckoGlobalAgg = async () => {
    CoinGeckoCall()
    await sleep(5000)
    processCall(coinDatRaw)
    await sleep(5000)
    wrieteCoinRank(coinDatAgg)
    return (coinDatAgg)
}
// CoinGeckoGlobalAgg()