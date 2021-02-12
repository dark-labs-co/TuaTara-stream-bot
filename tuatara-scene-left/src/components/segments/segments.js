import React from 'react'
import MarketWatch from './marketWatch/marketWatch'
import Aave from './aave/aave'
import SuperRare from './superRare/superRare'

export default function segments() {
    return (
        <>
            <MarketWatch />
            <Aave />
            {/* <SuperRare /> */}
        </>
    )
}
