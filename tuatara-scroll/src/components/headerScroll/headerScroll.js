import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import './style.css'
import HeaderScrollInfo from './headerScrollInfo'

function ScrollDat({ datIn, move }) {
    let dat = datIn
    return (
        <div className='scroll--container' >
            {datIn && dat &&
                Object.keys(dat).map((keyName, i) => (
                    <div className={`scroll--text ${((dat[keyName]).toFixed(2)) <= 0 ? 'up' : 'down'}`} key={i}>
                        {keyName.toUpperCase()}: {(dat[keyName]).toFixed(2)}%
                    </div>
                ))
            }
        </div >
    )
}

const HeaderScroll = ({ text }) => {
    const [key1, setKey1] = useState(1);

    const scrolling = useSpring({
        from: { transform: "translate(0%,0)" },
        to: { transform: "translate(-1000%,0)" },
        config: { duration: 250000 },
        reset: true,
        // reverse: key1 % 2 == 0,
        onRest: () => {
            setKey1(key1 + 1);
        }
    });


    return (
        <>

            <div className={"header--wrapper"} >
                <HeaderScrollInfo />
                <div className={`header--wrapper ${text.price_change_percentage_24h >= 0 ? 'up' : 'down'}`} >
                    <animated.div key={key1} style={scrolling}>
                        <ScrollDat
                            move={text.price_change_percentage_24h >= 0 ? 'up' : 'down'}
                            datIn={(text.market_cap_change_percentage_24h_in_currency)} />
                    </animated.div>
                </div>
            </div > {/* 

            <div className={`header--wrapper ${text.price_change_percentage_30d >= 0 ? 'up' : 'down'}`} key={key}>
                <div className={`header--label ${text.price_change_percentage_30d >= 0 ? 'up' : 'down'}`}> Month</div>
                <animated.div style={scrolling}>
                    <ScrollDat
                        move={text.price_change_percentage_30d >= 0 ? 'up' : 'down'}
                        datIn={(text.price_change_percentage_30d_in_currency)} />
                </animated.div>
            </div>

            <div className={`header--wrapper ${text.price_change_percentage_1y >= 0 ? 'up' : 'down'}`} key={key}>
                <div className={`header--label ${text.price_change_percentage_1y >= 0 ? 'up' : 'down'}`}> Year</div>
                <animated.div style={scrolling}>
                    <ScrollDat
                        move={text.price_change_percentage_1y >= 0 ? 'up' : 'down'}
                        datIn={(text.price_change_percentage_1y_in_currency)} />
                </animated.div>
            </div> */}
        </>
    );
};

export default HeaderScroll;