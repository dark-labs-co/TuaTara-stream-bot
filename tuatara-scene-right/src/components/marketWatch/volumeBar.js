import { ResponsiveBar } from '@nivo/bar'
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

let dataMosher = function (dat) {
    let dataMoshItems = []

    for (let index = 0; index < dat.length; index++) {
        const element = dat[index];
        dataMoshItems.push({ "symbol": element.symbol, "datas": element.datas })
    }

    return (
        // [
        //     {
        //         "symbol": "ETH0",
        //         "datas": dat[0].datas
        //     }

        // ]
        dataMoshItems
    )
}

const VolumeBar = ({ data /* see data tab */ }) => (
    <ResponsiveBar
        data={dataMosher(data)}

        keys={['datas']}
        indexBy={'symbol'}
        margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
        padding={0.25}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: '#38bcb2',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: '#eed312',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ETH'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'sandwich'
                },
                id: 'lines'
            }
        ]}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'country',
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

)

export default VolumeBar;
