import React, { useState, useEffect } from 'react'
import MarketWatchPlainArrow from '../../../assets/arrows/marketWatchPlainArrow'

export default function MarketCell({ title, dat }) {
    const [market, setMarket] = useState('')

    useEffect(() => {
        setMarket(dat >= 0 ? 'up' : 'down')
    }, [dat])

    return (
        <div className={`display--hero-item ${market}`}>
            <h2 className="display-title">{title}</h2><h2 className="display-percent">{dat.toFixed(2)}%</h2><MarketWatchPlainArrow className="display-arrow" fills={market === 'up' ? '#45f55d' : '#d245f5'} rotation={market === 'up' ? 270 : 90} />
        </div>
    )
}