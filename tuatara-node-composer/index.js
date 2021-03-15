
const cron = require('node-cron');
const CoinGeckoGlobalAgg = require('./CoinGeckoGlobalAgg')
const GraphCollection = require('./graphCollection/graphCollection')
const HeaderScroll = require("./headerScroll/headerScroll");
const marketGraphSync = require('./marketWatch/marketGraphSync');
const coinData = require('./marketWatch/coinData');
const Run = require("./run")
// const CoinList = require('./coinList.json')
const CoinListRank = require('./coinListRank.json')
const fs = require('fs')


const delay = ms => new Promise(res => setTimeout(res, ms));

function Index() {

    let CoinList = []
    function getRank() {
        fs.readFile('./coinListRank.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            parseFeedSegment(JSON.parse(data))
        })
        function parseFeedSegment(dat) {
            for (let index = 0; index < dat.coinAgg.length; index++) {
                const coinNames = dat.coinAgg[index];
                CoinList.push(coinNames)
            }
        }
    }

    const graphs = async () => {
        await getRank()
        await delay(10000)
        console.log(CoinList.length)

        // coingeckoVolume.coinAgg
        for (let i = 29; i >= 0; i--) {
            await delay(7000)
            GraphCollection(CoinList[i].name.currency, CoinList[i].name.symbol, 1)
            marketGraphSync(CoinList[i].name.currency, CoinList[i].name.symbol, 1)
            coinData(CoinList[i].name.currency, CoinList[i].name.symbol, CoinList[i].rank)
            //? Recall First function to solve some Effed up stuff with the first graph
            await delay(500)
            GraphCollection(CoinList[i].name.currency, CoinList[i].name.symbol, 1)
            marketGraphSync(CoinList[i].name.currency, CoinList[i].name.symbol, 1)

            await delay(7000)
            GraphCollection(CoinList[i].name.currency, CoinList[i].name.symbol, 7)
            marketGraphSync(CoinList[i].name.currency, CoinList[i].name.symbol, 7)
            await delay(7000)
            GraphCollection(CoinList[i].name.currency, CoinList[i].name.symbol, 30)
            marketGraphSync(CoinList[i].name.currency, CoinList[i].name.symbol, 30)
            await delay(7000)
            GraphCollection(CoinList[i].name.currency, CoinList[i].name.symbol, 365)
            marketGraphSync(CoinList[i].name.currency, CoinList[i].name.symbol, 365)
            await delay(7000)
            GraphCollection(CoinList[i].name.currency, CoinList[i].name.symbol, 'max')
            marketGraphSync(CoinList[i].name.currency, CoinList[i].name.symbol, 'max')

            if (i >= (CoinList.length - 1)) {
                i = 0
            }
        }
    }

    // Run()

    cron.schedule('*/1 * * * *', () => {
        // Run()
        HeaderScroll()
    })

    graphs()
    // cron.schedule('*/50 * * * *', () => {
    // graphs()
    // })
}

Index()
