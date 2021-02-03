import React, { useEffect, useState } from 'react'
import DataLink from '../../dataLinkAaveRaw.json'
import "./aave.css"

function AaveRateCell({ dataLink }) {
    const sidebar = (<div>
        {dataLink.rateData.map((rateData) =>
            <div className="rateData--cell-wrapper">
                <div className="rateData--cell-container">
                    <h1 className="rate--symbol-text">{rateData.symbol}</h1>
                </div>
                <div className="rateData--cell-container">
                    <h2 className="rate--dactaItem-text vbr">{(parseFloat(rateData.vbr).toFixed(3))}%</h2>
                </div>
                <div className="rateData--cell-container">
                    <h2 className="rate--dataItem-text vbr">{(parseFloat(rateData.liquidityRate).toFixed(3))}%</h2>
                </div>
                <div className="rateData--cell-container">
                    <h2 className="rate--dataItem-text vbr">{(parseFloat(rateData.vsEth.priceInEth).toFixed(3))}ETH</h2>
                </div>
            </div>
        )}
    </div>
    );
    return (
        <div>
            {sidebar}
        </div>
    );
}

export default function AaveRates() {

    return (
        <div>
            <h1 className="rateData--lending-title">Lending</h1>
            <AaveRateCell dataLink={DataLink} />
        </div>
    )
}