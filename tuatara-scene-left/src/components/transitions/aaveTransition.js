import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import './aaveTransition.css'

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

const AaveTransition = ({ text }) => {
    const [key, setKey] = useState(1);
    const scrollL = useSpring({
        from: { transform: "translate(0%,0)" },
        to: { transform: "translate(-100%,0)" },
        config: { duration: 5000 },
        reset: true,
        //reverse: key % 2 == 0,
        onRest: () => {
            setKey(key + 1);
        }
    });

    const scrollR = useSpring({
        from: { transform: "translate(0%,0)" },
        to: { transform: "translate(100%,0)" },
        config: { duration: 5000 },
        reset: true,
        //reverse: key % 2 == 0,
        onRest: () => {
            setKey(key + 1);
        }
    });

    return (
        <div style={{ "height": "100vh", "width": "100vw", "position": "absolute", "top": "0" }}>
            <animated.div style={scrollR} className="scroll-t">
                <svg
                    id="svg2184"
                    width="2534.9097"
                    height="1368.0509">

                    <rect
                        id="rect1966"
                        width="1116.009"
                        height="61.950508"
                        x="1.4456693"
                        y="1118.3945"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-0"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="994.28906"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-5"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="870.18353"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-1"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="746.07831"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-3"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="621.97278"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-2"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="373.76202"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-9"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="249.65652"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-99"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="125.55109"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-6"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="1.4456693"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-06"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="497.86743"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-4"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="1242.4999"
                        fill="#000"
                    />
                </svg>
            </animated.div>
            <animated.div style={scrollL} className="scroll-b">
                <svg
                    id="svg2181"
                    width="2534.9097"
                    height="1368.0509">
                    <rect
                        id="rect1966"
                        width="1116.009"
                        height="61.950508"
                        x="1.4456693"
                        y="1118.3945"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-0"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="994.28906"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-5"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="870.18353"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-1"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="746.07831"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-3"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="621.97278"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-2"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="373.76202"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-9"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="249.65652"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-99"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="125.55109"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-6"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="1.4456693"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-06"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="497.86743"
                        fill="#000"
                    />
                    <rect
                        id="rect1966-4"
                        width="1116.0092"
                        height="61.950508"
                        x="1.4456693"
                        y="1242.4999"
                        fill="#000"
                    />
                </svg>
            </animated.div>
        </div>
    )
}
export default AaveTransition;