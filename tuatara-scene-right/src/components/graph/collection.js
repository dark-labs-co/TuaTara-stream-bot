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
                <h1>Prices</h1>
                <div className="collection--container">
                    <h3 className="collection--text">Today</h3>
                    <Graph
                        coinDat={dataParse1}
                        color={'green'}
                        height={575}
                        top={0}
                        bottom={10}
                    />
                </div>

                <div className="collection--container">
                    <h3 className="collection--text">30 Days</h3>
                    <Graph
                        coinDat={dataParse30}
                        color={'red'}
                        height={150}
                        top={0}
                        bottom={0}
                    />
                </div>

                <div className="collection--container">
                    <h3 className="collection--text">Max</h3>
                    <Graph
                        coinDat={dataParseMax}
                        color={'red'}
                        height={150}
                        top={0}
                        bottom={0}
                    />
                </div>
            </div >
        )
    }
    return (
        <div>
        </div>
    )
}

export default Collection