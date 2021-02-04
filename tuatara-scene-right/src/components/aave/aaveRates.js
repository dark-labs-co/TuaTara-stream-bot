import React, { useEffect, useState, useRef } from 'react'
import DataLink from '../../dataLinkAaveRaw.json'
import "./aave.css"
import { useSpring, animated } from "react-spring";

function AaveRateCell({ dataLink }) {

    const Icon = ({ name, rateData }) => {
        const ImportedIconRef = useRef(null);
        const [loading, setLoading] = useState(false);


        useEffect(() => {
            setLoading(true);
            const importIcon = async () => {
                try {
                    ImportedIconRef.current = (await import(`../../assets/aaveTokenIcons/${rateData.symbol.toLowerCase()}.svg`))
                } catch (err) {
                    //? placeholder Image
                    ImportedIconRef.current = (await import(`../../assets/aaveTokenIcons/standardCryptoLogo.svg`))
                } finally {
                    setLoading(false);
                }
            };
            importIcon();
        }, [name]);

        if (!loading && ImportedIconRef.current) {
            const { current: ImportedIcon } = ImportedIconRef;
            console.log(ImportedIconRef)
            return <>
                <img
                    src={ImportedIcon.default}
                    className="aave--token-icon" />
            </>
        }

        return null;
    };
    const [key0, setKey0] = useState(1);

    const scrollPingPong = useSpring({
        from: { transform: "translate(0,100%)" },
        to: { transform: "translate(0,-2500%)" },
        config: { duration: 100000 },
        reset: true,
        reverse: key0 % 2 == 0,
        // onRest: () => {
        //     setKey0(key0 + 1);
        // }
    });


    const sidebar = (<>
        {dataLink.rateData.map((rateData) =>
            <div className="rateData--cell-wrapper">
                <animated.div key={key0} style={scrollPingPong} className="rateData--cell-container">
                    <div className="rateData--cell-item">
                        <Icon rateData={rateData} />
                    </div>
                    <div className="rateData--cell-item">
                        <h1 className="rate--symbol-text">{rateData.symbol}</h1>
                    </div>
                    <div className="rateData--cell-item">
                        <h2 className="rate--dactaItem-text vbr">{(parseFloat(rateData.vbr).toFixed(3))}%</h2>
                    </div>
                    <div className="rateData--cell-item">
                        <h2 className="rate--dataItem-text vbr">{(parseFloat(rateData.liquidityRate).toFixed(3))}%</h2>
                    </div>
                    <div className="rateData--cell-item">
                        <h2 className="rate--dataItem-text vbr">{(parseFloat(rateData.vsEth.priceInEth).toFixed(3))}ETH</h2>
                    </div>
                </animated.div>
            </div>
        )}
    </>
    );
    return (
        <>
            {sidebar}
        </>
    );
}


export default function AaveRates() {

    return (
        <>
            <div className="rateData--cell-wrapper">
                <h1 className="rateData--lending-title">Liquidity Rates</h1>
                <div className="rateData--title-container">
                    <div className="rateData--cell-container">
                    </div>
                    <div className="rateData--cell-container">
                        <h1 className="rate--symbol-title-text">Token</h1>
                    </div>
                    <div className="rateData--cell-container">
                        <h2 className="rate--dactaItem-text vbr">VBR</h2>
                    </div>
                    <div className="rateData--cell-container">
                        <h2 className="rate--dataItem-text vbr">Liquidity Rate</h2>
                    </div>
                    <div className="rateData--cell-container">
                        <h2 className="rate--dataItem-text vbr">Price in ETH</h2>
                    </div>
                </div>
            </div>

            <AaveRateCell dataLink={DataLink} />
        </>
    )
}
