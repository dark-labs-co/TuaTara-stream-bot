import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import "./style.css"
import AaveDataLink from "../../../dataLinkAaveRaw.json"
import { numberWithCommas } from "./numberHelper"

const theme = {
    axis: {
        domain: {
            line: {
                stroke: 'blue',
                strokeWidth: 2,
            }
        }
    }
}


export const AaveBar = ({ serviceName, coinIndex0, coinIndex1, coinIndex2, coinIndex3 }) => (
    <>
        <h1 className='aave-section--title'>{serviceName}</h1>
        <h1 className='aave-section--subTitle'>last 10,000 txs</h1>
        <div className='aave-bar--wrapper'>
            <ResponsiveBar
                data={[
                    {
                        "symbol": "coin",
                        "coin0_borrow": 0,
                        "coin0_borrowColor": "hsl(38, 70%, 50%)",
                        "coin0_deposit": 0,
                        "coin0_depositColor": "#2cb8c3",
                    },
                    {
                        "symbol": "coin0",
                        "coin0_borrow": (AaveDataLink.lendingData[coinIndex0].deposit * AaveDataLink.lendingData[coinIndex0].vsEth).toFixed(),
                        "coin0_borrowColor": "hsl(38, 70%, 50%)",
                        "coin0_deposit": (AaveDataLink.lendingData[coinIndex0].borrow * AaveDataLink.lendingData[coinIndex0].vsEth).toFixed(),
                        "coin0_depositColor": "#2cb8c3",
                    },
                    {
                        "symbol": "coin1",
                        "coin1_borrow": (AaveDataLink.lendingData[coinIndex1].deposit * AaveDataLink.lendingData[coinIndex1].vsEth).toFixed(),
                        "coin1_borrowColor": "hsl(38, 70%, 50%)",
                        "coin1_deposit": (AaveDataLink.lendingData[coinIndex1].borrow * AaveDataLink.lendingData[coinIndex1].vsEth).toFixed(),
                        "coin1_depositColor": "hsl(38, 70%, 50%)",
                    },
                    {
                        "symbol": "coin2",
                        "coin2_borrow": (AaveDataLink.lendingData[coinIndex2].deposit * AaveDataLink.lendingData[coinIndex2].vsEth).toFixed(),
                        "coin2_borrowColor": "hsl(38, 70%, 50%)",
                        "coin2_deposit": (AaveDataLink.lendingData[coinIndex2].borrow * AaveDataLink.lendingData[coinIndex2].vsEth).toFixed(),
                        "coin2_depositColor": "hsl(38, 70%, 50%)",
                    },

                    {
                        "symbol": "coin3",
                        "coin3_borrow": (AaveDataLink.lendingData[coinIndex3].deposit * AaveDataLink.lendingData[coinIndex3].vsEth).toFixed(),
                        "coin3_borrowColor": "hsl(38, 70%, 50%)",
                        "coin3_deposit": (AaveDataLink.lendingData[coinIndex3].borrow * AaveDataLink.lendingData[coinIndex3].vsEth).toFixed(),
                        "coin3_depositColor": "hsl(38, 70%, 50%)",
                    },

                ]}
                keys={['coin0_deposit', 'coin0_borrow', 'coin1_deposit', 'coin1_borrow', 'coin2_deposit', 'coin2_borrow', 'coin3_deposit', 'coin3_borrow']}
                indexBy="symbol"
                margin={{ top: 10, right: 0, bottom: 20, left: 0 }}
                padding={.1}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                theme={theme}
                borderColor="red"

                defs={[
                    {
                        id: 'borrow',
                        type: 'patternLines',
                        background: '#b6509e70',
                        color: '#b6509e70',
                        size: 4,
                        padding: 0,
                        stagger: false
                    },
                    {
                        id: 'deposit',
                        type: 'patternLines',
                        background: '#2cb8c370',
                        color: '#2cb8c370',
                        size: 4,
                        padding: 0,
                        stagger: false,
                        opacity: 0.1
                    }

                ]}
                fill={[
                    {
                        match: {
                            id: 'coin0_borrow'
                        },
                        id: 'borrow'
                    },
                    {
                        match: {
                            id: 'coin0_deposit'
                        },
                        id: 'deposit'
                    },
                    {
                        match: {
                            id: 'coin1_borrow'
                        },
                        id: 'borrow'
                    },
                    {
                        match: {
                            id: 'coin1_deposit'
                        },
                        id: 'deposit'
                    },
                    {
                        match: {
                            id: 'coin2_borrow'
                        },
                        id: 'borrow'
                    },
                    {
                        match: {
                            id: 'coin2_deposit'
                        },
                        id: 'deposit'
                    },
                    {
                        match: {
                            id: 'coin3_borrow'
                        },
                        id: 'borrow'
                    },
                    {
                        match: {
                            id: 'coin3_deposit'
                        },
                        id: 'deposit'
                    }
                ]}
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'symbol',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                axisLeft={null}
                axisBottom={null}
                labelSkipWidth={12}
                labelSkipHeight={25}
                labelTextColor={{ from: 'color', modifiers: [['brighter', 3]] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
                enableGridY={false}
            />
        </div>
        <div className="aave--coinName-wrapper">
            <div className="aave--coinName-text">
                <div className="aave--coinName-title">
                    Type
                </div>
                <div className="aave--coinName-data0">
                    Borrow
                    <br />

                    <div className="aave--coinName-data1">
                        Deposit
                    </div>
                </div>
            </div>

            <div className="aave--coinName-text">
                <div className="aave--coinName-title">
                    {AaveDataLink.lendingData[coinIndex0].symbol}
                </div>
                <div className="aave--coinName-data0">
                    {numberWithCommas(AaveDataLink.lendingData[coinIndex0].deposit)}
                    <br />

                    <div className="aave--coinName-data1">
                        {numberWithCommas(AaveDataLink.lendingData[coinIndex0].borrow)}
                    </div>
                </div>
            </div>

            <div className="aave--coinName-text">
                <div className="aave--coinName-title">
                    {AaveDataLink.lendingData[coinIndex1].symbol}
                </div>
                <div className="aave--coinName-data0">
                    {numberWithCommas(AaveDataLink.lendingData[coinIndex1].deposit)}
                    <br />

                    <div className="aave--coinName-data1">
                        {numberWithCommas(AaveDataLink.lendingData[coinIndex1].borrow)}
                    </div>
                </div>
            </div>

            <div className="aave--coinName-text">
                <div className="aave--coinName-title">
                    {AaveDataLink.lendingData[coinIndex2].symbol}
                </div>
                <div className="aave--coinName-data0">
                    {numberWithCommas(AaveDataLink.lendingData[coinIndex2].deposit)}
                    <br />
                    <div className="aave--coinName-data1">
                        {numberWithCommas(AaveDataLink.lendingData[coinIndex2].borrow)}
                    </div>
                </div>
            </div>
            <div className="aave--coinName-text">
                <div className="aave--coinName-title">
                    {AaveDataLink.lendingData[coinIndex3].symbol}
                </div>
                <div className="aave--coinName-data0">
                    {numberWithCommas(AaveDataLink.lendingData[coinIndex3].deposit)}
                    <br />

                    <div className="aave--coinName-data1">
                        {numberWithCommas(AaveDataLink.lendingData[coinIndex3].borrow)}
                    </div>
                </div>
            </div>
        </div>

        <svg className="aave--graphOverlay-l0" viewBox="0 -50 2000 2000">
            <defs>
                <linearGradient id="grad0" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"
                        stopColor="#2cb8c3"
                    />
                    <stop offset="100%"
                        stopColor="#b6509e"
                    />
                </linearGradient>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"
                        stopColor="#b6509e"
                    />
                    <stop offset="100%"
                        stopColor="#2cb8c3"
                    />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%"
                        stopColor="#2cb8c3"
                    />
                    <stop offset="100%"
                        stopColor="#b6509e"
                    />
                </linearGradient>
            </defs>
            <rect
                id="rect959"
                width="1929.358"
                height="1328.8422"
                x="1.0963691"
                y="1.0963691"
                fill="rgba(255, 255, 255, 0.0)"
            />

            <path
                d="M 543.57795,786.43914 H 1432.6474"
                id="path945-9"

                fill="rgba(255, 255, 255, 0)"
            />

            <g
                stroke="#fff"
            >
                <path
                    d="M 278.76459,1329.9386 H 1874.9386"
                    id="path939" />
                <path
                    d="M 190.41994,1183.3379 H 1756.5655"
                    id="path941" />
                <path
                    d="M 351.87532,1002.2919 H 1608.3672"
                    id="path943" />
                <path
                    d="M 459.78703,879.31011 H 1510.1793"
                    id="path945" />
                <path
                    d="M 815.36107,787.99914 581.3234,1329.9386"
                    id="path949" />
                <path
                    d="M 961.73098,785.83695 893.15833,1331.3558"
                    id="path951" />
                <path
                    d="m 1079.6752,786.54247 69.6662,544.81323"
                    id="path953" />
                <path
                    d="m 1188.6399,787.27944 188.9449,546.64616"
                    id="path955" />
                <path
                    d="m 1302.0859,786.50649 320.9297,543.43211"
                    id="path957" />
                <path
                    d="M 961.73098,785.83695 893.15833,1331.3558"
                    id="path1045"
                    stroke="#b6509e"
                    strokeWidth="5"
                />
                <path
                    d="m 1079.6752,786.54247 69.6662,544.81323"
                    id="path1045-9"
                    stroke="#b6509e"
                    strokeWidth="5"
                />
                <path
                    d="m 1188.6399,787.27944 188.9449,546.64616"
                    id="path1045-9-1"
                    stroke="#b6509e"
                    strokeWidth="5"
                />
                <path
                    d="m 1302.0859,786.50649 320.9297,543.43211"
                    id="path1045-9-2"
                    stroke="#b6509e"
                    strokeWidth="5"
                />


                <path
                    d="M 815.36107,787.99914 581.3234,1329.9386"
                    id="path1045-9-7"
                    stroke="#2cb8c3"
                    strokeWidth="5"
                />
                <path
                    d="M 676.02194,786.50649 278.76459,1329.9386"
                    id="path1045-9-0"
                    stroke="#2cb8c3"
                    strokeWidth="5"
                />
                <path
                    d="M 543.57795,786.43914 59.088361,1329.8687"
                    id="path1045-9-2-2-2"
                    stroke="#2cb8c3"
                    strokeWidth="5"
                    stroke
                />
                <path
                    d="m 1432.6474,786.43914 442.2213,543.56936"
                    id="path1045-9-2-2"
                    stroke="#2cb8c3"
                    strokeWidth="5"
                />
                <path
                    d="M 543.57795,786.43914 59.088323,1329.8687"
                    id="path1045-9-2-2-2-7"
                    stroke="#2cb8c3"
                    strokeWidth="5"
                />
                <path
                    d="m 1432.6474,786.43914 442.2213,543.56936"
                    id="path1045-9-2-2-3"
                    stroke="#b6509e"
                    strokeWidth="5"
                />
            </g>
        </svg>
        <div className="footer--wrapper">
            <div>Bars in ETH</div>
        </div>
    </>
)


