import React, { useEffect, useState } from "react";
import './App.css';
import CoinGecko from 'coingecko-api';
import HeaderScroll from './components/headerScroll/headerScroll'
import SegmentData from "./segment2.json"

export default function App() {
  const [CoinDat, setCoinDat] = useState([])

  const [data, setData] = useState();

  const fetchMetrics = () => {
    //? Initiate the CoinGecko API Client
    //? Call coingecko API

    const CoinGeckoClient = new CoinGecko();
    let PriceLogger = async () => {
      let dataCoin0 = await CoinGeckoClient.coins.fetch('ethereum', {});
      console.log(dataCoin0);
      setCoinDat(dataCoin0)
    };
    PriceLogger()
  }

  useEffect(() => {
    fetchMetrics()
  }, []);

  return (
    <>
      {CoinDat.code === 200 && <>
        <HeaderScroll
          text={CoinDat.data.market_data}
        />
      </>}
    </>
  )
}