import React, { useState, useEffect } from 'react'
import DataLinkAave from '../../../dataLinkAaveRaw.json'
import { AaveBar } from './aaveBar';

export default function MainArea() {
    const [coinIndex0, setCoinIndex0] = useState(0)
    const [coinIndex1, setCoinIndex1] = useState(1)
    const [coinIndex2, setCoinIndex2] = useState(2)
    const [coinIndex3, setCoinIndex3] = useState(3)

    const delay = ms => new Promise(res => setTimeout(res, ms));
    const coinIndexCycle = async () => {
        await delay(5000);
        setCoinIndex0(4)
        setCoinIndex1(5)
        setCoinIndex2(6)
        setCoinIndex3(7)

        await delay(5000);
        setCoinIndex0(8)
        setCoinIndex1(9)
        setCoinIndex2(10)
        setCoinIndex3(11)

        await delay(5000);
        setCoinIndex0(12)
        setCoinIndex1(13)
        setCoinIndex2(14)
        setCoinIndex3(15)

        await delay(5000);
        setCoinIndex0(16)
        setCoinIndex1(17)
        setCoinIndex2(18)
        setCoinIndex3(19)

        await delay(5000);
        setCoinIndex0(20)
        setCoinIndex1(21)
        setCoinIndex2(22)
        setCoinIndex3(0)
    };

    useEffect(() => {
        coinIndexCycle()
    }, []);

    return (
        <div className="display--wrapper">
            <div className="display--container">
                <AaveBar
                    coinIndex0={coinIndex0}
                    coinIndex1={coinIndex1}
                    coinIndex2={coinIndex2}
                    coinIndex3={coinIndex3}
                />
            </div >
        </div >
    )
}
