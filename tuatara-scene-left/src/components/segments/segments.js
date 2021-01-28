import React from 'react'
import MarketWatch from './marketWatch/marketWatch'
import Aave from './aave/aave'

export default function segments() {
    return (
        <>
            <MarketWatch />
            <Aave />
        </>
    )
}
