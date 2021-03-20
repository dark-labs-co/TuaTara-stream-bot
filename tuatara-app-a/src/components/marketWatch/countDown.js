import React from 'react'
import { useSpring, animated } from 'react-spring'

export default function CountDown() {
    const props = useSpring({ x: 100, from: { x: 0 } })
    return (
        <>
            {/* <animated.svg strokeWidth="5" stroke="#646464" strokeDashoffset={props.x}>
            <path fill="#000" transform="matrix(1 0 0 -1 95.1057 100)" d="M6.12323e-15 100L-25.5559 35.1747L-95.1057 30.9017L-41.3503 -13.4355L-58.7785 -80.9017L-7.98683e-15 -43.4783L58.7785 -80.9017L41.3503 -13.4355L95.1057 30.9017L25.5559 35.1747L6.12323e-15 100Z" />
        </animated.svg> */}
        </>
    )
}
