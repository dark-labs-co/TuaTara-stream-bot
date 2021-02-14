import React, { useEffect, useState } from "react";
import { ResponsiveStream } from "@nivo/stream";
import { linearGradientDef } from '@nivo/core'
import './styles.css'

const Graph = ({ coinDat, color, height, tickVals }) => {
    const [highestValArr, setHighestValArr] = useState([])
    const [highestVal, setHighestVal] = useState(0)

    const theme = {
        // background: "#222222",
        axis: {
            fontSize: "16px",
            tickColor: "#2D2F34",
            ticks: {
                line: {
                    stroke: "none"
                },
                text: {
                    fill: "white",
                    fontSize: "26px",

                }
            },
            legend: {
                text: {
                    fill: "white"
                }
            }
        },
        grid: {
            line: {
                stroke: "white"
            }
        }
    };

    {/*
*/}


    return (
        <div className="grid--container">
            <ResponsiveStream
                data={coinDat}
                keys={["ETH"]}
                height={height}
                order='ascending'
                margin={{ top: 10, right: 100, bottom: 10, left: 10 }}
                axisTop={null}
                axisBottom={null}
                axisRight={{
                    enable: true,
                    tickRotation: 0,
                    tickValues: { tickVals }
                }}
                offsetType="none"
                colors="none"
                fillOpacity={0.85}
                borderColor={{ theme: "background" }}
                theme={theme}
                borderWidth={1}
                dotSize={8}
                dotColor={{ from: "color" }}
                dotBorderWidth={2}
                dotBorderColor={{ from: "color", modifiers: [["darker", 0.7]] }}
                animate={true}
                enableGridY={true}
                enableGridX={false}
                motionStiffness={90}
                motionDamping={15}

                defs={[
                    linearGradientDef('red', [
                        { offset: 0, color: '#fff' },
                        { offset: 100, color: '#d5f545', opacity: .95 },
                    ]),
                    linearGradientDef('green', [
                        { offset: 0, color: '#fff' },
                        { offset: 100, color: '#d5f545', opacity: .95 },
                    ])
                ]}
                fill={[
                    { match: { id: 'ETH' }, id: `${color}` }
                ]}
                stroke="red"
                tooltipLabel={{
                    tableCell: {
                        background: 'red',
                    },
                    container: {
                        backgroundColor: 'red',
                        color: 'red',
                        fill: 'red',
                        background: 'red'
                    }
                }}
                toolTip={{
                    tableCell: {
                        background: 'red',
                        fill: 'red'
                    },
                    container: {
                        backgroundColor: 'red',
                        color: 'red',
                        fill: 'red',
                        background: 'red'
                    }
                }
                }
            />
        </div >
    );
    return (
        <div>Loading Conditions...</div>
    )
}

export default Graph