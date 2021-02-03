import React, { useEffect, useState } from "react";
import './App.css';
import CoinGecko from 'coingecko-api';
import HeaderScroll from './components/headerScroll/headerScroll'
import SegmentData from "./segment2.json"
import GasStation from "./components/gasStation/gasStation";
import MarketWatchTransition from "./components/transitions/marketWatchTransition";
import TuaTaraLogo from "./components/logo/tuaTaraLogo";

export default function App() {
  const [CoinDat, setCoinDat] = useState([])
  const [gasDatSlow, setGasDatSlow] = useState({})
  const [gasDatMed, setGasDatMed] = useState({})
  const [gasDatFast, setGasDatFast] = useState({})

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

  function getGas() {
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "__cfduid=d76ebec73585d8cb25704c738bdf17a2d1612125336; AWSALB=PxtbE3wtzWYCvZ7DQ+CLkKuSJ+bCJM/EVUv6+LYPduhPDcslltP7fSZ078LriPyhlQP+Sg+FmnUQtYbMOQGwSHlJvka8l4TOJXDnDUGmB+6l0E/luHDzi5XEbcUv; AWSALBCORS=PxtbE3wtzWYCvZ7DQ+CLkKuSJ+bCJM/EVUv6+LYPduhPDcslltP7fSZ078LriPyhlQP+Sg+FmnUQtYbMOQGwSHlJvka8l4TOJXDnDUGmB+6l0E/luHDzi5XEbcUv");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://ethgasstation.info/api/ethgasAPI.json?api-key=ed6c7a2238d491150e12e3e948d2cf149ee7d3b816ed4e1394038d16d50c", requestOptions)
      .then(response => response.text())
      .then(result => parseGas(JSON.parse(result)))
      .catch(error => console.log('error', error));
  }

  function parseGas(gasR) {
    console.log(gasR);
    setGasDatSlow({ gas: gasR.safeLow, time: gasR.safeLowWait, })
    setGasDatMed({ gas: gasR.average, time: gasR.avgWait, })
    setGasDatFast({ gas: gasR.fast, time: gasR.fastWait, })
  }

  useEffect(() => {
    fetchMetrics()
    getGas()
  }, []);

  return (
    <>
      {CoinDat.code === 200 && <>
        <HeaderScroll
          text={CoinDat.data.market_data}
        />
        <TuaTaraLogo />
        <MarketWatchTransition />
      </>
      }

      {
        gasDatFast.gas >= 10 && <>
          <GasStation
            slow={gasDatSlow}
            medium={gasDatMed}
            fast={gasDatFast}
          />
        </>
      }
    </>
  )
}