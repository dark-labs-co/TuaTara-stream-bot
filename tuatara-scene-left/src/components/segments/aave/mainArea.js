import React from 'react'
import DataLinkAave from '../../../dataLinkAaveRaw.json'
import MarketWatchIcon from '../icon'
import MarketCell from './marketCell'
import { AaveBar } from './aaveBar';

export default function MainArea() {
    console.log(DataLinkAave.borrowDat.total_amount_borrowed_100samp_DAI)
    return (
        <div className="display--wrapper">
            <div className="display--container">
                <h2 className="display--hero-title">AAVE</h2>
                Borrow & Deposits in the last 100 hours
                <AaveBar />
                <div className="display--subHero-container">
                    {/* <strong>{DataLink.borrowDat.total_amount_borrowed_100samp_ETH}</strong> */}
                </div>
            </div >
        </div >
    )
}
