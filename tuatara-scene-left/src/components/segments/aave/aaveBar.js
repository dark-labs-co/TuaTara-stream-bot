import React from 'react'
import { ResponsiveBar } from '@nivo/bar'
import "./style.css"
let d = [
    {
        "symbol": "coin0",
        "coin0_borrow": 6114,
        "coin0_borrowColor": "hsl(38, 70%, 50%)",
        "coin0_deposit": 1304,
        "coin0_depositColor": "#2cb8c3",
    },
    {
        "symbol": "coin1",
        "coin1_borrow": 6114,
        "coin1_borrowColor": "hsl(38, 70%, 50%)",
        "coin1_deposit": 6114,
        "coin1_depositColor": "hsl(38, 70%, 50%)",
    },
    {
        "symbol": "coin2",
        "coin2_borrow": 6114,
        "coin2_borrowColor": "hsl(38, 70%, 50%)",
        "coin2_deposit": 6114,
        "coin2_depositColor": "hsl(38, 70%, 50%)",
    },

    {
        "symbol": "coin3",
        "coin3_borrow": 6114,
        "coin3_borrowColor": "hsl(38, 70%, 50%)",
        "coin3_deposit": 6114,
        "coin3_depositColor": "hsl(38, 70%, 50%)",
    },

]
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
export const AaveBar = ({ data /* see data tab */ }) => (
    <>
        <div className={'aave-bar--wrapper'}>
            <ResponsiveBar
                data={d}
                keys={['coin0_deposit', 'coin0_borrow', 'coin1_deposit', 'coin1_borrow', 'coin2_deposit', 'coin2_borrow', 'coin3_deposit', 'coin3_borrow']}
                indexBy="symbol"
                margin={{ top: 10, right: 10, bottom: 10, left: 70 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                theme={theme}
                borderColor="red"

                defs={[
                    {
                        id: 'borrow',
                        type: 'patternLines',
                        background: '#b6509e',
                        color: '#b6509e',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'deposit',
                        type: 'patternLines',
                        background: '#2cb8c3',
                        color: '#2cb8c3',
                        size: 4,
                        padding: 1,
                        stagger: true
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
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
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
        <svg className="aave--graphOverlay-l0" width="3533" height="1452">
            <path fill="none" stroke="#C9C9C9" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(2.30138 0 0 -1 1766.42 1449.9)" d="M-765.548 0L765.548 0" fill-rule="evenodd" />
            <path fill="none" stroke="#C9C9C9" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(2.30138 0 0 -1 1766.42 1341.35)" d="M-765.548 0L765.548 0" fill-rule="evenodd" />
            <path fill="none" stroke="#C9C9C9" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(2.30138 0 0 -1 1766.42 1232.81)" d="M-765.548 0L765.548 0" fill-rule="evenodd" />
            <path fill="none" stroke="#C9C9C9" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(2.30138 0 0 -1 1766.42 1124.26)" d="M-765.548 0L765.548 0" fill-rule="evenodd" />
            <path fill="none" stroke="#C9C9C9" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(2.30138 0 0 -1 1766.42 1015.72)" d="M-765.548 0L765.548 0" fill-rule="evenodd" />
            <path fill="none" stroke="#C9C9C9" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(2.30138 0 0 -1 1766.42 907.173)" d="M-765.548 0L765.548 0" fill-rule="evenodd" />
            <path fill="none" stroke="#C9C9C9" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(2.30138 0 0 -1 1766.42 798.627)" d="M-765.548 0L765.548 0" fill-rule="evenodd" />
            <path fill="none" stroke="#C9C9C9" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(2.30138 0 0 -1 1766.42 690.082)" d="M-765.548 0L765.548 0" fill-rule="evenodd" />
            <path fill="none" stroke="#C9C9C9" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(2.30138 0 0 -1 1766.42 581.536)" d="M-765.548 0L765.548 0" fill-rule="evenodd" />
            <path fill="none" stroke="#C9C9C9" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(2.30138 0 0 -1 1766.42 472.991)" d="M-765.548 0L765.548 0" fill-rule="evenodd" />
            <path fill="none" stroke="#C9C9C9" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(2.30138 0 0 -1 1766.42 364.446)" d="M-765.548 0L765.548 0" fill-rule="evenodd" />
            <path fill="none" stroke="#C9C9C9" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(2.30138 0 0 -1 1766.42 255.9)" d="M-765.548 0L765.548 0" fill-rule="evenodd" />
            <path fill="none" stroke="#323232" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(1 0 0 -1 1448.04 567.258)" d="M481.525 540.453L-480.56 -538.522" fill-rule="evenodd" />
            <path fill="none" stroke="#323232" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(1 0 0 -1 1706.8 563.481)" d="M223.011 536.839L-228.802 -537.482" fill-rule="evenodd" />
            <path fill="none" stroke="#323232" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(1 0 0 -1 2001.6 563.905)" d="M-73.3043 540.769L73.3043 -540.769" fill-rule="evenodd" />
            <path fill="none" stroke="#323232" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(1 0 0 -1 2306.83 565.106)" d="M-371.328 537.164L371.328 -537.164" fill-rule="evenodd" />
            {/* <path fill="white" transform="matrix(1.00494 0 0 -1.04546 1930.21 289.671)" d="M-959.111 -277.077L959.111 -277.077L959.111 277.077L-959.111 277.077L-959.111 -277.077Z" /> */}
            <path fill="#646464" transform="matrix(1 0 0 -1 1930.65 179.626)" d="M0 120C-66.2742 120 -120 66.2742 -120 0C-120 -66.2742 -66.2742 -120 0 -120C66.2742 -120 120 -66.2742 120 0C120 66.2742 66.2742 120 0 120Z" />
            <path fill="#646464" transform="matrix(1 0 0 -1 1930.65 179.626)" d="M0 110C-60.7513 110 -110 60.7513 -110 0C-110 -60.7513 -60.7513 -110 0 -110C60.7513 -110 110 -60.7513 110 0C110 60.7513 60.7513 110 0 110Z" />
            <path fill="#646464" transform="matrix(1 0 0 -1 1936.81 176.417)" d="M5.53958 13.6022L15.7416 53.7881C16.0134 54.8587 15.6504 55.0472 14.9309 54.2092L-40.441 -10.2827C-41.1605 -11.1207 -40.8484 -11.8001 -39.7438 -11.8001L-6.09253 -11.8001C-4.98796 -11.8001 -4.33108 -12.6632 -4.62534 -13.7278L-15.7009 -53.7989C-15.9951 -54.8635 -15.6497 -55.0478 -14.9293 -54.2105L40.4394 10.1476C41.1598 10.9849 40.8484 11.6637 39.7438 11.6637L7.04745 11.6637C5.94289 11.6637 5.26779 12.5316 5.53958 13.6022Z" />
            <path fill="none" stroke="#323232" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" transform="matrix(1 0 0 -1 1936.81 176.417)" d="M5.53958 13.6022L15.7416 53.7881C16.0134 54.8587 15.6504 55.0472 14.9309 54.2092L-40.441 -10.2827C-41.1605 -11.1207 -40.8484 -11.8001 -39.7438 -11.8001L-6.09253 -11.8001C-4.98796 -11.8001 -4.33108 -12.6632 -4.62534 -13.7278L-15.7009 -53.7989C-15.9951 -54.8635 -15.6497 -55.0478 -14.9293 -54.2105L40.4394 10.1476C41.1598 10.9849 40.8484 11.6637 39.7438 11.6637L7.04745 11.6637C5.94289 11.6637 5.26779 12.5316 5.53958 13.6022Z" />
        </svg>


    </>
)

