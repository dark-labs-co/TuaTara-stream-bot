import React from 'react'
import GasLogo from './gasLogo'
import './gasStation.css'

export default function GasStation({ slow, medium, fast }) {
    return (
        <div className="gasStation--wrapper">
            <div className="gasStation--item-container"><GasLogo /></div>
            <div className="gasStation--item-container"><div className="gasStation--item-label">
                S</div>{slow.gas}
                <div className="gasStation--item-time"> {medium.time}</div></div>
            <div className="gasStation--item-container"><div className="gasStation--item-label">
                M</div>{medium.gas}
                <div className="gasStation--item-time"> {medium.time}</div></div>
            <div className="gasStation--item-container"><div className="gasStation--item-label">
                F</div>{fast.gas}
                <div className="gasStation--item-time"> {medium.time}</div></div>
        </div>
    )
}
