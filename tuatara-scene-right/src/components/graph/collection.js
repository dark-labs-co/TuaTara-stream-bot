import React, { useEffect, useState } from "react";
import Graph from "./graph";
import './styles.css'
import MarketWatchData from "../../dataLinkMarketWatch.json"
import VolumeBar from "../marketWatch/volumeBar";

const Collection = () => {

    return (
        <div className="collection--wrapper">
            <div className="collection--container">
                <h3 className="collection--text">Prices</h3>
                <Graph
                    coinDat={MarketWatchData.prices}
                    color={'green'}
                    height={575}
                    top={0}
                    bottom={10}
                />
            </div>

            <div className="collection--container">
                <h3 className="collection--text">Volume</h3>
                <VolumeBar
                    data={MarketWatchData.volume}
                />
            </div>

            <div className="collection--container">
                <h3 className="collection--text">Market Caps</h3>
                <Graph
                    coinDat={MarketWatchData.market_caps}
                    color={'red'}
                    height={150}
                    top={0}
                    bottom={0}
                />
            </div>
        </div >
    )
}

export default Collection