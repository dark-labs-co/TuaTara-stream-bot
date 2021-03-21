
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
const zora = require('./zora/zora.js')

// const delay = ms => new Promise(res => setTimeout(res, ms));

function Index() {
    zora()

    // Run()
    cron.schedule('*/1 * * * *', () => {
        // Run()
        HeaderScroll()
    })

}

Index()
