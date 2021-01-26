//? Helper Function Updates Scene Right Segment Right with a currency
const CoinGecko = require('coingecko-api')
const fetch = require('node-fetch')
global.fetch = fetch
global.Headers = fetch.Headers
var fs = require('fs')

module.exports = function GraphCollection(currency, symbol) {
    fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-right/src/segment1.json', `{ "currency": "${currency}","symbol": "${symbol}"}`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}