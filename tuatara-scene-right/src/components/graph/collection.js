import React, { useEffect, useState } from "react";
import Graph from "./graph";
import './styles.css'
import MarketWatchData from "../../dataLinkMarketWatch.json"
import VolumeBar from "../marketWatch/volumeBar";

const Collection = () => {
    let calcHeight = 200;
    // MarketWatchData.days
    return (
        <div className="collection--wrapper">
            <div className="collection--container">

                <div className="collection--timeTicker-wrapper">
                    <h3 className={`collection--timeTicker-text ${MarketWatchData.days === "1" && "timeTicker-selected"}`}>1d</h3>
                    <h3 className={`collection--timeTicker-text ${MarketWatchData.days === "7" && "timeTicker-selected"}`}>7d</h3>
                    <h3 className={`collection--timeTicker-text ${MarketWatchData.days === "30" && "timeTicker-selected"}`}>30d</h3>
                    <h3 className={`collection--timeTicker-text ${MarketWatchData.days === "90" && "timeTicker-selected"}`}>90d</h3>
                    <h3 className={`collection--timeTicker-text ${MarketWatchData.days === "365" && "timeTicker-selected"}`}>1y</h3>
                    <h3 className={`collection--timeTicker-text ${MarketWatchData.days === "max" && "timeTicker-selected"}`}>max</h3>
                </div>
            </div>
            <div className="collection--container">
                <h3 className="collection--text">Prices (USD)</h3>


                <div className="collection--graph-container">
                    <Graph
                        coinDat={MarketWatchData.prices}
                        days={MarketWatchData.days}
                        color={'green'}
                        height={calcHeight}
                        top={0}
                        bottom={10}
                    />
                </div>
                <div className="collection--priceStat-container">
                    <div>Min: {MarketWatchData.min.toFixed(2)}</div>
                    <div>Average: {MarketWatchData.ave.toFixed(2)}</div>
                    <div> Max:{MarketWatchData.max.toFixed(2)}</div>
                    {/* <div>
                            <h2>Total Liquidity</h2>
                        </div> */}
                </div>
            </div>

            <div className="collection--container">
                <h3 className="collection--text">Volume</h3>
                <div className="collection--graph-container">
                    <VolumeBar
                        data={MarketWatchData.volume}
                    />

                    {/* <div>
                        <div>
                            <h2>Volume (24hrs)</h2>
                        </div>
                    </div> */}
                </div>
            </div>
            {/* <div className="collection--container">
                <h3 className="collection--text">Market Caps</h3>
                <Graph
                    coinDat={MarketWatchData.market_caps}
                    color={'red'}
                    height={150}
                    top={0}
                    bottom={0}
                />
            </div> */}
        </div >
    )
}

export default Collection