import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import './style.css'

const HeaderScrollInfo = ({ text }) => {
    const [key0, setKey0] = useState(1);

    const scrollPingPong = useSpring({
        from: { transform: "translate(1%,0)" },
        to: { transform: "translate(9%,0)" },
        config: { duration: 5500 },
        reset: true,
        reverse: key0 % 2 == 0,
        onRest: () => {
            setKey0(key0 + 1);
        }
    });



    return (
        <>
            <animated.div key={key0} style={scrollPingPong}>
                {`TuaTara 🚧 Work In progress 🚧 TuaTara ⛓️ Blockchain Aggregator ⛓️ TuaTara 🦎 Market Prices by coingecko 🦎 TuaTara 👻 Aave DEFI 👻 `}
            </animated.div>
        </>
    );
};

export default HeaderScrollInfo;