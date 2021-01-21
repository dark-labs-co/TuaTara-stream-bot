import React, { useEffect, useState, useRef } from "react";
import logo from './logo.svg';
import './App.css';
import Collection from './components/graph/collection';
import CoinGecko from 'coingecko-api';
import SuperRare from "./components/superRare/superRare";
import Uniswap from "./components/uniswap/uniswap";
import Segment1 from "./segment1.json"

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
        return <div><img src={ImportedIcon.default} /></div>;
    }

    return null;
};

function MarketGraph() {
    const [CoinDat, setCoinDat] = useState([])
    const [CoinDatMax, setCoinDatMax] = useState([])
    const [CoinDat30, setCoinDat30] = useState([])
    const [CoinDat1, setCoinDat1] = useState([])

    const [data, setData] = useState();

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
                console.log('dataCoin0')
                console.log(dataCoin0)
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

    useEffect(() => {
        fetchMetrics(Segment1.currency)
    }, []);

    return (
        <div className="App">
            {CoinDat.code === 200 &&
                <>
                    <div className="coinPrice--layer--container">
                        {/* <h2 className="coinPrice--layer--0">{CoinDat.data.market_data.current_price.usd}</h2> */}
                        <h2 className="coinPrice--layer--1">{CoinDat.data.market_data.current_price.usd}</h2>
                        <h3 className="coinPrice--layer--cur">{Segment1.symbol} • USD</h3>
                        <div className="collection--text--wrapper">
                            <div className="collection--text--container">
                                <div className="collection--text--item">
                                    <p className="collection--text--text"> Low:</p>
                                    <h4 className="low">{CoinDat.data.market_data.low_24h['usd']}</h4>
                                </div>
                                <div>
                                    <Icon name="bitcoin" fill="red" />
                                </div>
                                <div className="collection--text--item">
                                    <p className="collection--text--text">High:</p>
                                    <h4 className="high">{CoinDat.data.market_data.high_24h['usd']}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <h2 className="coinPrice">{CoinDat.data.tickers[0].target}</h2> */}
                    {/* <h1>Ethereum </h1> */}
                    {/*? Put this on a timer to change ticker */}
                    {/* <p>Thumbs up {CoinDat.data.sentiment_votes_up_percentage}</p> */}
                    {/* <p>Thumbs down {CoinDat.data.sentiment_votes_down_percentage}</p> */}
                </>
            }
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
