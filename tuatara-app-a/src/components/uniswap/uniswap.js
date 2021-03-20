import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
export default function Uniswap() {
    const [rareDat, setRareDat] = useState({})
    const [accDat, setAccDat] = useState({})
    let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

    useEffect(() => {
        fetch('https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `
                {
                    uniswapDayDatas(first:1, orderBy:date,orderDirection:desc){
                      id
                      date
                      dailyVolumeETH
                      dailyVolumeUSD
                      totalVolumeETH
                      totalLiquidityETH
                      totalLiquidityUSD
                      txCount
                    }
                  }
                  
            }`
            }),
        })
            .then(res => res.json())
            .then(res => setRareDat(res.data));
    }, [])

    function SuperRareDat(data) {
        let bid = data.data.bidLogs
        // console.log(bid)
        return (
            <>
                {bid &&
                    bid.map((log) => {
                        // console.log(log)
                        return (
                            <>
                                {/* id: {log.id} */}
                                {/* amount: {log.amount} */}
                                <SuperRareItem
                                    data={log.item} />
                            </>
                        )
                    }
                    )
                }
            </>
        )
    }

    function SuperRareItem(data) {
        // console.log(data)
        // console.log(data.data)

        let bid = data.data
        console.log(bid)
        return (
            <>
                {bid && bid.imageUri && <>
                    <img src={bid.imageUri} />
                </>
                }
                {/*      bid.map((item) => {
                    console.log(item)
                    return (
                        <>
                        id:{item.imageUri}
                        </>
                        )
                    }
                    )
                } */}
            </>
        )
    }
    return (
        <>
            {/* {rareDat &&
                <SuperRareDat
                    data={rareDat}
                />
            } */}
            {/* {rareDat && rareDat.message === 'OK' && <> */}
            {/* {rareDat.result[0].tokenID} */}
            {/* <h2>Super Rare</h2> */}
            {/* <h3>Arts</h3> */}
            {/* </> */}

        </>
    )
}