import React from 'react'
import DataLink from '../../../dataLinkRaw.json'
import MarketCell from './marketCell'



export default function MainArea() {
    return (
        <div className="display--wrapper">
            <div className="display--container">
                <div className="display--title-container">
                    <h1 className="display--title-text">Price Movement</h1>
                </div>
                <MarketCell
                    title='1 Hour'
                    dat={DataLink.market_data.price_change_percentage_1h_in_currency.usd}
                />
                <MarketCell
                    title='24 Hours'
                    dat={DataLink.market_data.price_change_percentage_24h}
                />
                <MarketCell
                    title='7 Days'
                    dat={DataLink.market_data.price_change_percentage_7d}
                />
                <MarketCell
                    title='14 Days'
                    dat={DataLink.market_data.price_change_percentage_14d}
                />
                <MarketCell
                    title='30 Days'
                    dat={DataLink.market_data.price_change_percentage_30d}
                />
                <MarketCell
                    title='60 Days'
                    dat={DataLink.market_data.price_change_percentage_60d}
                />
                <MarketCell
                    title='200 Days'
                    dat={DataLink.market_data.price_change_percentage_200d}
                />
                <MarketCell
                    title='1 Year'
                    dat={DataLink.market_data.price_change_percentage_1y}
                />
            </div>
        </div >
    )
}
