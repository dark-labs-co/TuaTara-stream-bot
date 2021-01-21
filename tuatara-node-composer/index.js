
const cron = require('node-cron');
const GraphCollection = require('./graphCollection/graphCollection')
const HeaderScroll = require("./headerScroll/headerScroll")
const Run = require("./run")
const delay = ms => new Promise(res => setTimeout(res, ms));

function Index() {
    const graphs = async () => {
        await delay(10000);
        GraphCollection("ethereum", "ETH");

        await delay(10000);
        GraphCollection("bitcoin", "BTC");

        await delay(10000);
        GraphCollection("polkadot", "DOT");

        await delay(10000);
        GraphCollection("cardano", "ADA");

        await delay(10000);
        GraphCollection("litecoin", "LTC");

        await delay(10000);
        GraphCollection("monero", "XMR");

        await delay(10000);
        GraphCollection("eos", "EOS");

        await delay(10000);
        GraphCollection("aave", "AAVE");

        await delay(10000);
        GraphCollection("tezos", "XTZ");

        await delay(10000);
        GraphCollection("nem", "XEM");

        await delay(10000);
        GraphCollection("tron", "TRX");
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
