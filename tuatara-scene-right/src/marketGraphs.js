import React, { useEffect, useState, useRef } from "react";
import logo from './logo.svg';
import './App.css';
import Collection from './components/graph/collection';
import CoinGecko from 'coingecko-api';
import SuperRare from "./components/superRare/superRare";
import Uniswap from "./components/uniswap/uniswap";
import Segment1 from "./segment1.json"
import CountdownAnimation from "./components/countdownAnimation";

const Icon = ({ name }) => {
    const ImportedIconRef = useRef(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                ImportedIconRef.current = (await import(`./assets/icons/${Segment1.currency}.png`))
            } catch (err) {
                // Your own error handling logic, throwing error for the sake of
                // simplicity
                console.log(err)
                throw err;
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name]);

    if (!loading && ImportedIconRef.current) {
        const { current: ImportedIcon } = ImportedIconRef;
        console.log(ImportedIconRef)
        return <img src={ImportedIcon.default} className="coinPrice--icon-img" />
    }

    return null;
};

function MarketGraph() {
    const [CoinDat, setCoinDat] = useState([])
    const [CoinDatMax, setCoinDatMax] = useState([])
    const [CoinDat30, setCoinDat30] = useState([])
    const [CoinDat1, setCoinDat1] = useState([])

    const [data, setData] = useState();
    const [subCur, setSubCur] = useState({ "symbol": "eth", "currency": "Ethereum" });

    const fetchMetrics = (cur) => {
        //? Initiate the CoinGecko API Client
        //? Call coingecko API

        const CoinGeckoClient = new CoinGecko();
        let PriceLogger = async () => {
            // let data = await CoinGeckoClient.coins.fetch('loopring', {})
            try {
                let dataCoin0 = await CoinGeckoClient.coins.fetch(cur, {})
                let dataMax = await CoinGeckoClient.coins.fetchMarketChart(cur, { days: 'max' })
                let data30 = await CoinGeckoClient.coins.fetchMarketChart(cur, { days: '30' })
                let data1 = await CoinGeckoClient.coins.fetchMarketChart(cur, { days: '1' })
                console.log('data1')
                console.log(data1)
                { dataCoin0.code === 200 && setCoinDat(dataCoin0) }
                { dataMax.code === 200 && setCoinDatMax(dataMax) }
                { data30.code === 200 && setCoinDat30(data30) }
                { data1.code === 200 && setCoinDat1(data1) }
            } catch (e) {
                console.error(e); // 30
            }
        }
        PriceLogger()
    }


    const delay = ms => new Promise(res => setTimeout(res, ms));
    const yourFunction = async () => {
        await delay(10000);
        console.log("Waited 5s");
        setSubCur({ "symbol": "eth", "currency": "Ethereum" })
        await delay(10000);
        console.log("Waited 5s");
        setSubCur({ "symbol": "btc", "currency": "Bitcoin" })

        await delay(10000);
        setSubCur({ "symbol": "usd", "currency": "USD" })
    };

    useEffect(() => {
        fetchMetrics(Segment1.currency)
        yourFunction()
    }, []);
    console.log(subCur)
    return (
        <div className="App">
            {CoinDat.code === 200 &&
                <>
                    <div className={`coinPrice--layer--container ${Segment1.currency}`}>
                        <Icon name="bitcoin" fill="red" />
                        <h1 className={`coinPrice--title-text ${Segment1.currency}`}>{Segment1.currency} | {Segment1.symbol}</h1>
                        {/* <h2 className="coinPrice--layer--0">{CoinDat.data.market_data.current_price.usd}</h2> */}
                        {/* <h3 className="coinPrice--subCur--text">{subCur.symbol.toUpperCase()}</h3> */}
                        <h2 className="coinPrice--price-text">{CoinDat.data.market_data.current_price[subCur.symbol]}{subCur.symbol.toUpperCase()}</h2>
                        {/* <div className="collection--text--wrapper">
                            <div className="collection--text--container">
                                <div className="collection--text--item">
                                    <p className="collection--text--text"> Low</p>
                                    <h4 className="low">{CoinDat.data.market_data.low_24h[subCur.symbol]}</h4>
                                </div>

                                <div className="collection--text--item">
                                    <p className="collection--text--text">High</p>
                                    <h4 className="high">{CoinDat.data.market_data.high_24h[subCur.symbol]}</h4>
                                </div>
                            </div>
                        </div> */}
                        <CountdownAnimation />
                    </div>
                    {/* <h2 className="coinPrice">{CoinDat.data.tickers[0].target}</h2> */}
                    {/* <h1>Ethereum </h1> */}
                    {/*? Put this on a timer to change ticker */}
                    {/* <p>Thumbs up {CoinDat.data.sentiment_votes_up_percentage}</p> */}
                    {/* <p>Thumbs down {CoinDat.data.sentiment_votes_down_percentage}</p> */}
                </>
            }
            <h3 className="collection--graph--title">Market Data</h3>
            <Collection
                coinDat={CoinDat}
                coinDataMax={CoinDatMax}
                coinData30={CoinDat30}
                coinData1={CoinDat1}
            />
            {/* <h2>SuperRare</h2>
      <SuperRare />
      <Uniswap /> */}
            {/* Live: {CoinDat.data.last_updated} */}
        </div >
    );
}

export default MarketGraph;
