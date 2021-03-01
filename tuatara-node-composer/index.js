
const cron = require('node-cron');
const GraphCollection = require('./graphCollection/graphCollection')
const HeaderScroll = require("./headerScroll/headerScroll");
const marketGraphSync = require('./marketWatch/marketGraphSync');
const Run = require("./run")
const CoinList = require('./coinList.json')

const delay = ms => new Promise(res => setTimeout(res, ms));

function Index() {

    const graphs = async () => {
        for (let i = 0; i < CoinList.length; i++) {
            await delay(6000)
            GraphCollection(CoinList[i].currency, CoinList[i].symbol, 1)
            marketGraphSync(CoinList[i].currency, CoinList[i].symbol, 1)
            await delay(6000)
            GraphCollection(CoinList[i].currency, CoinList[i].symbol, 7)
            marketGraphSync(CoinList[i].currency, CoinList[i].symbol, 7)
            await delay(6000)
            GraphCollection(CoinList[i].currency, CoinList[i].symbol, 30)
            marketGraphSync(CoinList[i].currency, CoinList[i].symbol, 30)
            await delay(6000)
            GraphCollection(CoinList[i].currency, CoinList[i].symbol, 90)
            marketGraphSync(CoinList[i].currency, CoinList[i].symbol, 90)
            await delay(6000)
            GraphCollection(CoinList[i].currency, CoinList[i].symbol, 365)
            marketGraphSync(CoinList[i].currency, CoinList[i].symbol, 365)
            await delay(6000)
            GraphCollection(CoinList[i].currency, CoinList[i].symbol, 'max')
            marketGraphSync(CoinList[i].currency, CoinList[i].symbol, 'max')
        }
    }

    Run()
    cron.schedule('*/1 * * * *', () => {
        Run()
        HeaderScroll()
    })

    graphs()
    cron.schedule('*/50 * * * *', () => {
        graphs()
    })
}

Index()
