
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
            await delay(4000)
            console.log(CoinList[i].currency)
            GraphCollection(CoinList[i].currency, CoinList[i].symbol)
            marketGraphSync(CoinList[i].currency, CoinList[i].symbol)
        }
    }
    //TODO Working on the graphs
    graphs()

    // cron.schedule('* * * * *', () => {
    //     Run()
    //     HeaderScroll()
    // })

    // cron.schedule('*/3 * * * *', () => {
    //     graphs()
    // })
}

Index()
