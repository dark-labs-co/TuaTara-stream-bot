
const cron = require('node-cron');
const GraphCollection = require('./graphCollection/graphCollection')
const HeaderScroll = require("./headerScroll/headerScroll");
const marketGraphSync = require('./marketWatch/marketGraphSync');
const Run = require("./run")

const delay = ms => new Promise(res => setTimeout(res, ms));

function Index() {

    const graphs = async () => {
        await delay(40000);
        GraphCollection("ethereum", "ETH");
        marketGraphSync("ethereum", "ETH");

        await delay(40000);
        GraphCollection("bitcoin", "BTC");
        marketGraphSync("bitcoin", "BTC");

        await delay(40000);
        GraphCollection("polkadot", "DOT");
        marketGraphSync("polkadot", "DOT");

        await delay(40000);
        GraphCollection("cardano", "ADA");
        marketGraphSync("cardano", "ADA");

        await delay(40000);
        GraphCollection("litecoin", "LTC");
        marketGraphSync("litecoin", "LTC");

        await delay(40000);
        GraphCollection("monero", "XMR");
        marketGraphSync("monero", "XMR");

        await delay(40000);
        GraphCollection("eos", "EOS");
        marketGraphSync("eos", "EOS");

        await delay(40000);
        GraphCollection("aave", "AAVE");
        marketGraphSync("aave", "AAVE");
    }

    cron.schedule('* * * * *', () => {
        Run()
        HeaderScroll()
    })

    cron.schedule('*/3 * * * *', () => {
        graphs()
    })
}

Index()
