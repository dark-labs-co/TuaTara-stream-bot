import React, { useEffect, useState } from "react";
import { ResponsiveStream } from "@nivo/stream";
import { linearGradientDef } from '@nivo/core'
import './styles.css'

const Graph = ({ coinDat, color, height, top, bottom }) => {
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
                    fill: "#252727"
                }
            },
            legend: {
                text: {
                    fill: "none"
                }
            }
        },
        grid: {
            line: {
                stroke: "lightBlue"
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
                margin={{ top: top, right: 50, bottom: bottom, left: 10 }}
                axisTop={null}
                axisBottom={null}
                axisRight={null}
                axisRight={{
                    enable: true
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
                        { offset: 0, color: '#000' },
                        { offset: 100, color: '#000', opacity: .95 },
                    ]),
                    linearGradientDef('green', [
                        { offset: 0, color: '#000' },
                        { offset: 100, color: '#000', opacity: .95 },
                    ])
                ]}
                fill={[
                    { match: { id: 'ETH' }, id: `${color}` }
                ]}

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