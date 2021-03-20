import React, { useState, useEffect } from 'react'
// import CoinStatsData from '../../coinStats.json'
export default function CoinStatsSlider({ coinCurrent, coinMin, coinMax, coinAverage }) {
    const [normalizedCurrent, setNormalizedCurrent] = useState(0)
    const [normalizedAverage, setNormalizedAverage] = useState(0)
    const [textPos, setTextPos] = useState('middle')

    function numberWithCommas(x) {
        let y = x

        if (x >= 1000) {
            y = parseFloat(x).toFixed(0)
            return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return (y)
    }

    const normalizeBetweenTwoRanges = (val, minVal, maxVal, newMin, newMax) => {
        return newMin + (val - minVal) * (newMax - newMin) / (maxVal - minVal);
    };

    useEffect(() => {
        setNormalizedCurrent(normalizeBetweenTwoRanges(coinCurrent, coinMin, coinMax, 0, 100))
        setNormalizedAverage(normalizeBetweenTwoRanges(coinAverage, coinMin, coinMax, 0, 100))
        if (normalizedCurrent <= 25) {
            setTextPos('start')
        }
        if (normalizedCurrent >= 75) {
            setTextPos('end')
        }

    }, [normalizedCurrent, coinCurrent, coinMin, coinMax])


    return (
        <div style={{ "background": "#00000030", "text-align": "center", "width": "100%", "display": "flex", "justifyContent": "center", "flexDirection": "column" }}>

            <svg
                fill="#fffff70"
                width="140%"
                height="200"
                viewBox="-20 0 200 10"
                xmlns="http://www.w3.org/2000/svg">

                <rect

                />
                <line
                    stroke="#d245f5"
                    x1="0"
                    x2={normalizedAverage}
                    y1="5"
                    y2="5"
                />

                <line
                    stroke="#1daf30"
                    x1={normalizedAverage}
                    y1="5"
                    x2="100"
                    y2="5"
                />

                {/*
                //? Tick Line
                */}
                <line
                    stroke="#ffffff50"
                    stroke-width="0.5"
                    x1={25}
                    y1="3"
                    x2={25}
                    y2="7"
                    stroke-linecap="round"
                />

                <line
                    stroke="#ffffff50"
                    stroke-width="0.5"
                    x1={50}
                    y1="2"
                    x2={50}
                    y2="8"
                    stroke-linecap="round"
                />

                <line
                    stroke="#ffffff50"
                    stroke-width="0.5"
                    x1={75}
                    y1="3"
                    x2={75}
                    y2="7"
                    stroke-linecap="round"
                />

                {/* 
                //? Current Value
                */}
                <circle
                    cx={normalizedCurrent}
                    cy="5"
                    r="1"
                    fill="transparent"
                    stroke="#ffffff90"
                    strokeWeight="2"
                />

                {/*
                //? Low Value 
                */}
                <text
                    fill="#d245f5"
                    x={-2}
                    y="12"
                    fontSize="4px"
                    textAnchor="end"
                >
                    {numberWithCommas(coinMin)}
                </text>

                <text
                    fill="#d245f5"
                    x={-2}
                    y="2"
                    fontSize="4px"
                    textAnchor="end"
                >
                    Min
                </text>


                {/*
                //? Current Value 
                */}
                <text
                    fill="#ffffffa5"
                    x={normalizedCurrent}
                    y="12"
                    fontSize="5px"
                    textAnchor={textPos}
                >
                    {numberWithCommas(coinCurrent)}
                </text>


                {/*
                //? High Value 
                */}
                <text
                    fill="#1daf30"
                    x={102}
                    y="12"
                    fontSize="4px"
                    textAnchor="start"
                >
                    {numberWithCommas(coinMax)}
                </text>

                <text
                    fill="#1daf30"
                    x={102}
                    y="2"
                    fontSize="4px"
                    textAnchor="start"
                >
                    Max
                </text>
            </svg>
        </div >
    )
}

