const CoinGecko = require('coingecko-api')
const fetch = require('node-fetch')
global.fetch = fetch
global.Headers = fetch.Headers
var fs = require('fs')

module.exports = function HeaderScroll() {
    fs.writeFile("D:/Projects/TuraTara/Repo/streamBot/tuatara-scroll/src/segment2.json", `{"run":${Math.random()}}`, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}