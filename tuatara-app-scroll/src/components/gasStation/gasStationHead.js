import React from 'react'
import GasLogo from './gasLogo'
import './gasStation.css'

export default function GasStation({ slow, medium, fast }) {
    function gasTol(gas) {
        if (gas <= 100) {
            return ('green')
        }
        if (gas <= 150) {
            return ('yellow')
        }
        if (gas <= 200) {
            return ('orange')
        }
        if (gas <= 250) {
            return ('red')
        }
        if (gas <= 300) {
            return ('white')
        }
    }

    return (
        <div className="gasStation--wrapper-head">
            <div className="gasStation--item-container">
                <GasLogo />
            </div>
            <div className="gasStation--item-container">
                <div className="gasStation--item-label">SLOW <span className={`dot--${gasTol(slow.gas / 10)}`}>•</span></div>
                <div className="gasStation--gwei-text">{slow.gas / 10}</div>
                <div className="gasStation--gwei-label">GWEI</div>
                <div className="gasStation--gwei-time"> {slow.time}</div>
                <div className="gasStation--gwei-label">Min</div>

            </div>
            <div className="gasStation--item-container">
                <div className="gasStation--item-label">AVE. <span className={`dot--${gasTol(medium.gas / 10)}`}>•</span></div>
                <div className="gasStation--gwei-text">{medium.gas / 10}</div>
                <div className="gasStation--gwei-label">GWEI</div>
                <div className="gasStation--gwei-time"> {medium.time}</div>
                <div className="gasStation--time-label">Min</div>
            </div>
            <div className="gasStation--item-container">
                <div className="gasStation--item-label">FAST <span className={`dot--${gasTol(fast.gas / 10)}`}>•</span></div>
                <div className="gasStation--gwei-text">{fast.gas / 10}</div>
                <div className="gasStation--gwei-label">GWEI</div>
                <div className="gasStation--gwei-time"> {fast.time}</div>
                <div className="gasStation--time-label">Min</div>
            </div>
        </div>
    )
}
