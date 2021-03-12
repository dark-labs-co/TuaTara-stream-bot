//? Returns General Coin Data Sorted from CoinGecko API
//* ath | currency
//* atl | currency
//* market_cap | currency
//* current_price | currency
//* price_high_24 | currency
//* price_low_24 | currency
//* price_marketCap_change_currency_24 | currency
//* percentage_marketCap_change_currency_24 | currency
//? day
//* price_change_24 | currency
//* percentage_change_24 | currency
//? month
//* price_change_30 | currency
//* percentage_change_30 | currency
//? week
//* price_change_7 | currency
//* percentage_change_7 | currency
//? year
//* price_change_1 | currency
//* percentage_change_1 | currency


const CoinGecko = require('coingecko-api')
const fetch = require('node-fetch')
global.fetch = fetch
global.Headers = fetch.Headers
var myHeaders = new Headers();
var fs = require('fs');

//function CoinData() {

module.exports = function CoinData(currecny, symbol,rank) {
    let PriceLogger = async () => {
        const CoinGeckoClient = new CoinGecko();
        try {
            let dataCoin = await CoinGeckoClient.coins.fetch(currecny, {});
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

    let marketStatsDat = []
    let coinStats = { "coin": [], "markets": [], "marketStats": [], "exchanges": [] }
    function processRes(res) {
        let marketData = res.data.market_data;

        //? Parse Coin Stats
        let coinStatDat = {
            "rank":rank,
            "current_price_usd": marketData.current_price.usd,
            "current_price_btc": marketData.current_price.btc,
            "current_price_eth": marketData.current_price.eth,
            "ath_usd": marketData.ath.usd,
            "ath_btc": marketData.ath.btc,
            "ath_eth": marketData.ath.eth,
            "ath_change_percentage_usd": marketData.ath_change_percentage.usd,
            "ath_change_percentage_btc": marketData.ath_change_percentage.btc,
            "ath_change_percentage_eth": marketData.ath_change_percentage.eth,
            "ath_date_usd": marketData.ath_date.usd,
            "ath_date_btc": marketData.ath_date.btc,
            "ath_date_eth": marketData.ath_date.eth,
            "atl_usd": marketData.atl.usd,
            "atl_btc": marketData.atl.btc,
            "atl_eth": marketData.atl.eth,
            "atl_change_percentage_usd": marketData.atl_change_percentage.usd,
            "atl_change_percentage_btc": marketData.atl_change_percentage.btc,
            "atl_change_percentage_eth": marketData.atl_change_percentage.eth,
            "atl_date_usd": marketData.atl_date.usd,
            "atl_date_btc": marketData.atl_date.btc,
            "atl_date_eth": marketData.atl_date.eth,
            "market_cap_usd": marketData.market_cap.usd,
            "market_cap_btc": marketData.market_cap.btc,
            "market_cap_eth": marketData.market_cap.eth,
            "total_volume_usd": marketData.total_volume.usd,
            "total_volume_eth": marketData.total_volume.eth,
            "total_volume_btc": marketData.total_volume.btc,
            "high_24h_usd": marketData.high_24h.usd,
            "high_24h_eth": marketData.high_24h.eth,
            "high_24h_btc": marketData.high_24h.btc,
            "low_24h_usd": marketData.low_24h.usd,
            "low_24h_eth": marketData.low_24h.eth,
            "low_24h_btc": marketData.low_24h.btc,
            "price_change_24h_in_currency_usd": marketData.price_change_24h_in_currency.usd,
            "price_change_24h_in_currency_eth": marketData.price_change_24h_in_currency.eth,
            "price_change_24h_in_currency_btc": marketData.price_change_24h_in_currency.btc,
            "price_change_percentage_1h_in_currency_usd": marketData.price_change_percentage_1h_in_currency.usd,
            "price_change_percentage_1h_in_currency_eth": marketData.price_change_percentage_1h_in_currency.eth,
            "price_change_percentage_1h_in_currency_btc": marketData.price_change_percentage_1h_in_currency.btc,
            "price_change_percentage_24h_in_currency_usd": marketData.price_change_percentage_24h_in_currency.usd,
            "price_change_percentage_24h_in_currency_eth": marketData.price_change_percentage_24h_in_currency.eth,
            "price_change_percentage_24h_in_currency_btc": marketData.price_change_percentage_24h_in_currency.btc,
            "price_change_percentage_7d_in_currency_usd": marketData.price_change_percentage_7d_in_currency.usd,
            "price_change_percentage_7d_in_currency_eth": marketData.price_change_percentage_7d_in_currency.eth,
            "price_change_percentage_7d_in_currency_btc": marketData.price_change_percentage_7d_in_currency.btc,
            "price_change_percentage_14d_in_currency_usd": marketData.price_change_percentage_14d_in_currency.usd,
            "price_change_percentage_14d_in_currency_eth": marketData.price_change_percentage_14d_in_currency.eth,
            "price_change_percentage_14d_in_currency_btc": marketData.price_change_percentage_14d_in_currency.btc,
            "price_change_percentage_30d_in_currency_usd": marketData.price_change_percentage_30d_in_currency.usd,
            "price_change_percentage_30d_in_currency_eth": marketData.price_change_percentage_30d_in_currency.eth,
            "price_change_percentage_30d_in_currency_btc": marketData.price_change_percentage_30d_in_currency.btc,
            "price_change_percentage_60d_in_currency_usd": marketData.price_change_percentage_60d_in_currency.usd,
            "price_change_percentage_60d_in_currency_eth": marketData.price_change_percentage_60d_in_currency.eth,
            "price_change_percentage_60d_in_currency_btc": marketData.price_change_percentage_60d_in_currency.btc,
            "price_change_percentage_200d_in_currency_usd": marketData.price_change_percentage_200d_in_currency.usd,
            "price_change_percentage_200d_in_currency_eth": marketData.price_change_percentage_200d_in_currency.eth,
            "price_change_percentage_200d_in_currency_btc": marketData.price_change_percentage_200d_in_currency.btc,
            "price_change_percentage_1y_in_currency_usd": marketData.price_change_percentage_1y_in_currency.usd,
            "price_change_percentage_1y_in_currency_eth": marketData.price_change_percentage_1y_in_currency.eth,
            "price_change_percentage_1y_in_currency_btc": marketData.price_change_percentage_1y_in_currency.btc,
            "market_cap_change_24h_in_currency_usd": marketData.market_cap_change_24h_in_currency.usd,
            "market_cap_change_24h_in_currency_eth": marketData.market_cap_change_24h_in_currency.eth,
            "market_cap_change_24h_in_currency_btc": marketData.market_cap_change_24h_in_currency.btc,
            "market_cap_change_percentage_24h_in_currency_usd": marketData.market_cap_change_percentage_24h_in_currency.usd,
            "market_cap_change_percentage_24h_in_currency_eth": marketData.market_cap_change_percentage_24h_in_currency.eth,
            "market_cap_change_percentage_24h_in_currency_btc": marketData.market_cap_change_percentage_24h_in_currency.btc,
        }
        coinStats.coin.push(coinStatDat)
        let exchanges = []
        let exchangesStats = []

        //? Parse Market Stats
        let baseCheck = ""
        let targetCheck = ""
        for (let index = 0; index < res.data.tickers.length; index++) {
            let ticker = res.data.tickers[index];
            let volume = ticker.volume;
            let base = ticker.base;
            const coinId = ticker.coin_id;
            const target = ticker.target;
            const market = ticker.market.name;
            exchanges.push(market)

            let marketStat = { "volume": volume, "base": base, "coinId": coinId, "target": target, "market": market }
            marketStatsDat.push(marketStat)
        }

        //? Sort market pair stats by volume
        let stats = marketStatsDat.sort((a, b) => {
            return a.volume - b.volume;
        });
        //? Reverse markets by volume
        const reversedStats = stats.reverse();

        coinStats.markets.push(...reversedStats)

        //? Fitter unique Exchanges
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        let uniqueExchanges = exchanges.filter(onlyUnique);

        let exchangeDat = []

        for (let index = 0; index < uniqueExchanges.length; index++) {
            let unique = uniqueExchanges[index]
            exchangeDat.push({ "name": unique, "pairItems": [] })
        }

        //? Sort and push pairs to exchange
        for (let index = 0; index < exchangeDat.length; index++) {
            let exch = exchangeDat[index]
            // console.log(exch.name);

            for (let ii = 0; ii < coinStats.markets.length; ii++) {
                let market = coinStats.markets[ii].market
                let marketItem = coinStats.markets[ii]

                if (exch.name === market) {
                    exchangeDat[index].pairItems.push(marketItem)
                }
            }
        }

        let marketStats = []
        //? Exchange Object stat maker
        for (let index = 0; index < exchangeDat.length; index++) {

            let volumes = []

            const comboItm = exchangeDat[index].pairItems;
            for (let ii = 0; ii < comboItm.length; ii++) {
                volumes.push(comboItm[ii].volume)
                // console.log(volumes)
            }

            var volumeTotal = volumes.reduce(function (a, b) {
                return a + b;
            }, 0);
            marketStats
            marketStats.push({ "volumeTotal": volumeTotal, "exchange": exchangeDat[index].name })
        }



        //? Sort markets by volume
        let marketVolumeStats = marketStats.sort((a, b) => (a.volumeTotal > b.volumeTotal) ? 1 : -1)
        // console.log(marketVolumeStats);
        //? Reverse markets by volume
        const reversedMarketVolumeStats = marketVolumeStats.reverse();
        coinStats.marketStats.push(...reversedMarketVolumeStats)

        // console.log(marketVolumeStats)
        // coinStats.markets.push(...stats)

        coinStats.exchanges.push(...exchangeDat)

        // fs.writeFile('./coinStats.json', JSON.stringify(coinStats), function (err) {
        //     if (err) throw err;
        //     console.log('Saved-segment-left-1');
        // });


        fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-left/src/coinData.json', JSON.stringify(coinStats), function (err) {
            if (err) throw err;
            console.log('Saved-segment-left-1');
        });

        fs.writeFile('D:/Projects/TuraTara/Repo/TuaTara-stream-bot/tuatara-scene-right/src/coinData.json', JSON.stringify(coinStats), function (err) {
            if (err) throw err;
            console.log('Saved-segment-left-1');
        });

    }
}

// CoinData()