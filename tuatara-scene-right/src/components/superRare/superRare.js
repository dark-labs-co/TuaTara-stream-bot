import React, { useEffect, useState } from 'react'
import Web3 from 'web3'
import '../../App.css'
export default function SuperRare() {
    const [rareDat, setRareDat] = useState({})
    const [accDat, setAccDat] = useState({})
    let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

    useEffect(() => {
        fetch('https://api.thegraph.com/subgraphs/name/protofire/superrare', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: `        {
                    saleLogs(first: 5,orderBy:amount,orderDirection:desc) {
                        timestamp
                        id
                        amount
                        buyer
                        seller
                    item{
                        name
                        createdBy
                        id
                        imageUri
                        name
                        tokenId
                        salePrice
                        }
                    }
                    {
                        items( where: {tokenId: 704})
                       {
                        tokenId
                          id
                          descriptorHash
                          name
                          description
                          createdBy
                        }
                      }
                                      }`
            }),
        })
            .then(res => res.json())
            .then(res => setRareDat(res.data));
    }, [])

    function SuperRareDat(data) {
        let bid = data.data.saleLogs
        let items = data.data.items
        console.log(items);
        return (
            <>
                {bid &&
                    bid.map((log) => {
                        return (
                            <>
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
        let bid = data.data
        // console.log(bid)
        return (
            <>
                {bid && bid.imageUri && <>
                    <div className="superRare--container">
                        <img className="superRare--image" src={bid.imageUri} />
                        <div className="superRare--title">{bid.name}</div>
                        <div className="superRare--tokenID">ID: {bid.tokenId}</div>
                        <div className="superRare--tokenID">timestamp: {bid.timestamp}</div>
                        {/* <div className="superRare--salePrice">{bid.currentBid.amount}ETH</div> */}
                    </div>
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
        <div className="superRare--wrapper">
            {rareDat &&
                <SuperRareDat
                    data={rareDat}
                />
            }
            {/* {rareDat && rareDat.message === 'OK' && <> */}
            {/* {rareDat.result[0].tokenID} */}
            {/* <h2>Super Rare</h2> */}
            {/* <h3>Arts</h3> */}
            {/* </> */}

        </div>
    )
}