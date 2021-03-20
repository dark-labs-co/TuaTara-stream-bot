import React, { useEffect, useState } from "react";
import MarketGraphs from './marketGraphs'
import AaveRates from './components/aave/aaveRates'
import Zora from './components/zora/zora'
import './App.css';
import Segment0 from './segment0.json'
export default function App() {

  return (
    <div className="app--wrapper">
      <Zora />
    </div>
  )
}
