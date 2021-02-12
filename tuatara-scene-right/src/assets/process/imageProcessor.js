const http = require('https'); // or 'https' for https:// URLs
const fs = require('fs');
const coinListTemp = require("./coinListTemp.json");
const CoinGecko = require('coingecko-api');
const delay = ms => new Promise(res => setTimeout(res, ms));


for (let i = 0; i < coinListTemp.length; i++) {
    const CoinGeckoClient = new CoinGecko();
    let PriceLogger = async () => {
        try {
            let dataCoin = await CoinGeckoClient.coins.fetch(coinListTemp[i].currency, {})

            if (dataCoin.code === 200) {
                console.log(dataCoin.data.image.large)
                await delay(1000);
                const file = fs.createWriteStream(`${coinListTemp[i].currency}.png`);
                const request = http.get(dataCoin.data.image.large, function (response) {
                    response.pipe(file);
                });

            }
        }
        catch (e) {
            console.error(e); // 30
        }
    }
    PriceLogger()
}

