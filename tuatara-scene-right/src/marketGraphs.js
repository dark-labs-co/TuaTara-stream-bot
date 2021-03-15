import React, { useEffect, useState, useRef } from "react";
import './App.css';
import Collection from './components/graph/collection';
import CoinGecko from 'coingecko-api';
import Segment1 from "./segment1.json"
import CoinData from "./coinData.json"
import CountdownAnimation from "./components/countdownAnimation";
import MarketLogo from "./components/graph/marketLogo";
import CountDown from "./components/marketWatch/countDown";

const Icon = ({ name }) => {
    const ImportedIconRef = useRef(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                ImportedIconRef.current = (await import(`./assets/icons/${Segment1.currency.toLowerCase()}.png`))
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
        return <>
            {/* <img src={ImportedIcon.default} className="coinPrice--icon-img0" /> */}
            <img src={ImportedIcon.default} className="coinPrice--icon-img1" /></>
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
            try {
                let dataCoin0 = await CoinGeckoClient.coins.fetch(cur, {})

                { dataCoin0.code === 200 && setCoinDat(dataCoin0) }
            } catch (e) {
                console.error(e); // 30
            }
        }
        PriceLogger()
    }


    const delay = ms => new Promise(res => setTimeout(res, ms));
    // const subCurCycle = async () => {
    //     await delay(10000);
    //     setSubCur({ "symbol": "eth", "currency": "Ethereum" })
    //     await delay(10000);
    //     setSubCur({ "symbol": "eth", "currency": "Ethereum" })
    //     await delay(10000);
    //     setSubCur({ "symbol": "btc", "currency": "Bitcoin" })
    //     await delay(10000);
    //     setSubCur({ "symbol": "usd", "currency": "USD" })
    // };

    useEffect(() => {
        fetchMetrics(Segment1.currency)
        // subCurCycle()
    }, []);

    function numberWithCommas(x) {
        let y = x

        if (x >= 1000) {
            y = parseFloat(x).toFixed(0)
            return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return (y)
    }

    return (
        <div className="App">
            <div className={`coinPrice--layer--container ${Segment1.currency}`}>
                <Icon name="bitcoin" fill="red" />
                <h1 className={`coinPrice--title-text ${Segment1.currency}`}>{Segment1.currency} ({Segment1.symbol})</h1>
                {CoinDat.code === 200 &&
                    <>
                        <div className={`coinPrice--prices--container`}>
                            <div className="coinPrice--price-text">{numberWithCommas(CoinDat.data.market_data.current_price['eth'].toFixed(4))}<div className="coinPrice--price-label eth">ETH</div></div>
                            <div className="coinPrice--price-text usd">{numberWithCommas(CoinDat.data.market_data.current_price['usd'].toFixed(2))}<div className="coinPrice--price-label usd">USD</div></div>
                            <div className="coinPrice--price-text">{numberWithCommas(CoinDat.data.market_data.current_price['btc'].toFixed(5))}<div className="coinPrice--price-label btc">BTC</div></div>
                        </div>
                        <CountdownAnimation />
                    </>
                }
            </div>

            {/* <div className="collection--graph--title">
                <MarketLogo />
                <CountDown />
            </div> */}
            <Collection
                coinDat={CoinDat}
                coinDataMax={CoinDatMax}
                coinData30={CoinDat30}
                coinData1={CoinDat1}
            />
            <div className="volume--stats-container">
                <div className={'volume--stats-item'}>
                    Totals
                </div>
                <div className={'volume--stats-item'}>
                    ETH  {numberWithCommas(CoinData.coin[0].total_volume_eth)}
                </div>
                <div className={'volume--stats-item'}>
                    USD {numberWithCommas(CoinData.coin[0].total_volume_usd)}
                </div>
                <div className={'volume--stats-item'}>
                    BTC {numberWithCommas(CoinData.coin[0].total_volume_btc)}
                </div>
            </div >
        </div>

    );
}

export default MarketGraph;
