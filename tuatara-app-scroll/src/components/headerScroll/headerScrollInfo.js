import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import './style.css'

const HeaderScrollInfo = ({ text, slow, medium, fast }) => {
    const [key0, setKey0] = useState(1);
    const [blockNumber, setBlockNumber] = useState(0)

    function getBlock() {
        fetch("https://api.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=IEZ8JK8HXMTT47X9KTWUMM7GJSMMD99TWB")
            .then(response => response.text())
            .then(result => parseBlock(JSON.parse(result)))
            .catch(error => console.log('error', error));
    }

    function parseBlock(gasR) {
        setBlockNumber(gasR.result)
    }

    useEffect(() => {
        getBlock()
    }, []);

    const scrollPingPong = useSpring({
        from: { transform: "translate(0,0)" },
        to: { transform: "translate(9%,0)" },
        config: { duration: 5500 },
        reset: true,
        reverse: key0 % 2 == 0,
        onRest: () => {
            if (key0 <= 2) {
                setKey0(key0 + 1);
            }
            else {
                setKey0(0);
            }
        }
    });



    return (
        <div className="topLeft--title-container">
            {`TuaTara NFT TV | ETH Block ${blockNumber}`}
            {/* <animated.div key={key0} style={scrollPingPong}> */}
            {/* <div className="gasStation--item-container">
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
                    <div className="gasStation--gwei-time"> {fast.time}</div>
                    <div className="gasStation--time-label">Min</div>
                </div> */}
            {/* </animated.div> */}
        </div>
    );
};

export default HeaderScrollInfo;