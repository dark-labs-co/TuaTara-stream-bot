import React, { useEffect, useState } from "react";
import MarketGraphs from './marketGraphs'
import AaveRates from './components/aave/aaveRates'
import './App.css';
import Segment0 from './segment0.json'
export default function App() {

  return (
    <>
      {Segment0.segment === "marketWatch" && <MarketGraphs />}
      {Segment0.segment === "aave" && <AaveRates />}
    </>
  )
}
