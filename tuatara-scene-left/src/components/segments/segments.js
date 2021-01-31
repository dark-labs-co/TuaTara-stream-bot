import React from 'react'
import MarketWatch from './marketWatch/marketWatch'
import Aave from './aave/aave'
import AaveTransition from '../transitions/aaveTransition'

export default function segments() {
    return (
        <>
            <MarketWatch />
            {/* <AaveTransition /> */}
            <Aave />
        </>
    )
}
