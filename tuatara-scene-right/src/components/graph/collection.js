import React, { useEffect, useState } from "react";
import Graph from "./graph";
import './styles.css'

const Collection = ({ coinDataMax, coinData30, coinData1, coinDat }) => {
    let dataParseMax = []
    let dataParse1 = []
    let dataParse30 = []

    const gInput = (gInput, gParse) => {
        for (let i = 0, l = gInput.length; i < l; i++) {
            let obj = gInput[i][1];
            gParse.push({
                "ETH": (obj)
            })
        }
        return gParse
    }

    if (coinData1.success) {
        console.log('CoinDat.price')
        gInput(coinDataMax.data.prices, dataParseMax)
        gInput(coinData30.data.prices, dataParse30)
        gInput(coinData1.data.prices, dataParse1)

        return (
            <div className="collection--wrapper">
                <div className="collection--container">
                    <Graph
                        coinDat={dataParse1}
                        color={'green'}
                        height={400}
                        top={0}
                        bottom={10}
                    />
                    <h3 className="collection--text">Today</h3>

                    {/* <div className="collection--text--container">
                            <p className="collection--change">Price Change:</p>
                            <h4> {coinDat.data.market_data.price_change_24h.toFixed(2)}</h4>
                        </div> */}
                </div>

                <div className="collection--container">
                    <Graph
                        coinDat={dataParse30}
                        color={'red'}
                        height={150}
                        top={0}
                        bottom={0}
                    />
                    <h3 className="collection--text">30 Days</h3>
                </div>

                <div className="collection--container">
                    <Graph
                        coinDat={dataParseMax}
                        color={'red'}
                        height={100}
                        top={0}
                        bottom={0}
                    />
                    <h3 className="collection--text">Max</h3>
                </div>

            </div>
        )
    }
    return (
        <div>
        </div>
    )
}

export default Collection