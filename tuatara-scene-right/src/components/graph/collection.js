import React, { useEffect, useState } from "react";
import Graph from "./graph";
import './styles.css'
import MarketWatchData from "../../dataLinkMarketWatch.json"
import CoinData from "../../coinData.json"
import VolumeBar from "../marketWatch/volumeBar";
import CoinStatsSlider from "./coinStatsSlider";

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
                    {/* <h3 className={`collection--timeTicker-text ${MarketWatchData.days === "90" && "timeTicker-selected"}`}>90d</h3> */}
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
                        curVal={CoinData.coin[0].current_price_usd}
                        averageVal={MarketWatchData.ave}
                    />
                </div>
                <div className="collection--priceStat-container">
                    <CoinStatsSlider
                        coinCurrent={CoinData.coin[0].current_price_usd.toFixed(2)}
                        coinMin={MarketWatchData.min.toFixed(2)}
                        coinMax={MarketWatchData.max.toFixed(2)}
                        coinAverage={MarketWatchData.ave.toFixed(2)}
                    />
                </div>
            </div>

            <div className="collection--container">
                <h3 className="collection--text">Volume</h3>
                <div className="collection--graph-container">
                    <VolumeBar
                        data={MarketWatchData.volume}
                    />
                </div>
            </div>
        </div >
    )
}

export default Collection