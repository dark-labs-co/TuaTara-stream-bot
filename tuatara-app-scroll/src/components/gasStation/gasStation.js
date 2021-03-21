import React from 'react'
import GasLogo from './gasLogo'
import './gasStation.css'

export default function GasStation({ slow, medium, fast }) {
    return (
        <div className="gasStation--wrapper">
            <div className="gasStation--item-container">
                <GasLogo />
            </div>
            <div className="gasStation--item-container">
                <div className="gasStation--item-label">SLOW</div>
                <div className="gasStation--gwei-text">{slow.gas / 10}</div>
                <div className="gasStation--gwei-label">GWEI</div>
                <div className="gasStation--gwei-time"> {medium.time}</div>
                <div className="gasStation--gwei-label">Min</div>

            </div>
            <div className="gasStation--item-container">
                <div className="gasStation--item-label">AVE.</div>
                <div className="gasStation--gwei-text">{medium.gas / 10}</div>
                <div className="gasStation--gwei-label">GWEI</div>
                <div className="gasStation--gwei-time"> {medium.time}</div>
                <div className="gasStation--time-label">Min</div>
            </div>
            <div className="gasStation--item-container">
                <div className="gasStation--item-label">FAST</div>
                <div className="gasStation--gwei-text">{fast.gas / 10}</div>
                <div className="gasStation--gwei-label">GWEI</div>
                <div className="gasStation--gwei-time"> {medium.time}</div>
                <div className="gasStation--time-label">Min</div>
            </div>
        </div>
    )
}
