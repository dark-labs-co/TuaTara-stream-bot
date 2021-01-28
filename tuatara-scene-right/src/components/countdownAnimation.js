import React, { useState, useEffect } from "react";

import { useSpring, animated, config } from "react-spring";

const Face = (props) => {
    const { color, x, y } = props;

    const [active, setActive] = useState(false);

    const animatedProps = useSpring({
        strokeDasharray: active ? "170,0" : "0,170"
    });

    useEffect(() => {
        setActive(!active)
    }, [])

    return (
        <svg height="300" width="300" >
            <circle cx="150" cy="150" r="150" fill={color} id="face" />
            <circle cx="100" cy="100" r="15" fill="black" id="left-  eye" />
            <circle cx="200" cy="100" r="15" fill="black" id="right-eye" />
            <animated.path
                d={`M 75 200 Q ${x} ${y} 225 200`}
                strokeWidth="4"
                stroke="black"
                fill="none"
                id="mouth"
                strokeDasharray={animatedProps.strokeDasharray}
            />
        </svg>
    );
};

export default function CountdownAnimation() {
    return (
        <>
        </>
        // <div className="countdown--wrapper">
        //     <Face color={"cyan"} x={10} y={10} />
        // </div>
    );
}
