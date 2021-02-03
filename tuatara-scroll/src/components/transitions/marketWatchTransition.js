import React, { useEffect, useState, useRef } from "react";
import videojs from 'video.js';
import AaveVideoTransition from "../../assets/aaveTransition.webm";
import MWVideoTransition from "../../assets/marketWatchTransition.webm";
import './transitions.css'
import segment0 from "../../segment0.json"

export default function MarketWatchTransition() {
    const videoRef = useRef()
    const [vidPlay, setVidPlay] = useState(false)
    useEffect(() => {
        const player = videojs(videoRef.current, { play: vidPlay, muted: true, play: true }, () => {
            if (segment0.segment === 'marketWatchPause') {
                player.src(MWVideoTransition);
                player.play();
            }
            if (segment0.segment === 'aavePause') {
                player.src(AaveVideoTransition);
                player.play();
            }
            setVidPlay(true);
        });


    }, [segment0, videoRef, vidPlay]);
    return (
        <video ref={videoRef} height="1500px" width="1500" className="video--item" />
    )
}
