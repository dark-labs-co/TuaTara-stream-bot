
const cron = require('node-cron');
const GraphCollection = require('./graphCollection/graphCollection')
const HeaderScroll = require("./headerScroll/headerScroll")
const Run = require("./run")
const delay = ms => new Promise(res => setTimeout(res, ms));

function Index() {

    const graphs = async () => {
        await delay(40000);
        GraphCollection("ethereum", "ETH");

        await delay(40000);
        GraphCollection("bitcoin", "BTC");

        await delay(40000);
        GraphCollection("polkadot", "DOT");

        await delay(40000);
        GraphCollection("cardano", "ADA");

        await delay(40000);
        GraphCollection("litecoin", "LTC");

        await delay(40000);
        GraphCollection("monero", "XMR");

        await delay(40000);
        GraphCollection("eos", "EOS");

        await delay(40000);
        GraphCollection("aave", "AAVE");
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
