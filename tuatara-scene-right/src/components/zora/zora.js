import React, { useState, useEffect } from 'react'
import "./zora.css"
import ZoraHeader from './zoraHeader'
import ZoraData from './zoraData.json'
import QRCode from 'qrcode.react'
import CryptoMediaLogo from './assets/cryptoMediaLogo'
import { useTransition, config, animated } from 'react-spring'
import ZoraLogo from "./assets/zoraLogo.png"
import CryptoMediaFreshMints from './assets/cryptoMediaFreshMints'
import CryptoMediaBids from './assets/cryptoMediaBids'

export default function Zora() {

    const [time, setTime] = useState(0);
    const [segType, setSegType] = useState("transitionFreshMints");

    useEffect(() => {
        let interval = 0

        if ((segType === "transitionFreshMints")) {
            interval = setInterval(() => setSegType("freshMints"), 4000);
        }

        if ((segType === "freshMints") && ZoraData.freshMints.length > time) {
            setSegType("freshMints")
            interval = setInterval(() => setTime(time + 1), 4000);
        }

        if ((segType === "freshMints") && ZoraData.freshMints.length === time) {
            setSegType("transitionBids")
            interval = setInterval(() => setTime(0), 4000);
        }


        if ((segType === "transitionBids")) {
            interval = setInterval(() => setSegType("bids"), 4000);
            setTime(0)
        }

        if ((segType === "bids") && ZoraData.bids.length > time) {
            setSegType("bids")
            interval = setInterval(() => setTime(time + 1), 4000);
        }

        if ((segType === "bids") && ZoraData.bids.length === time) {
            setSegType("transitionTransfers")
            interval = setInterval(() => setTime(0), 4000);
        }


        if ((segType === "transitionTransfers")) {
            interval = setInterval(() => setSegType("transfers"), 4000);
            setTime(0)
        }

        if ((segType === "transfers") && ZoraData.transfers.length > time) {
            setSegType("transfers")
            interval = setInterval(() => setTime(time + 1), 4000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [time, segType]);



    let artworksDat = ZoraData

    function ZoraGallerySlideshow({ datType, datIndex }) {
        const item = artworksDat[datType][datIndex];


        return (
            <div className="zora--name-container">
                {item.metaData.mimeType.includes('image') && <img src={item.contentUri} className="zora--artwork--item" />}
                {item.metaData.mimeType.includes('video') && <video autoPlay loop controls className="zora--artwork--item"> <source src={item.contentUri} height="500" width="auto" type="video/mp4" /></video>}
                <h3 className="artwork--text-name">{item.metaData.id}</h3>
                <h1 className="artwork--text-name">{item.metaData.name}</h1>
                {item.creatorId && <h2>Creator: {item.creatorId.substring(0, 6)}...</h2>}
                {item.ownerId && <h2>Owner: {item.ownerId.substring(0, 6)}...</h2>}
                <p className="artwork--text-Description">{item.metaData.description}</p>
            </div >

        )
    }
    function timeConverter(UNIX_timestamp) {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + '/' + month + '/' + year + ' ' + hour + ':' + min + ':' + sec;
        return time;
    }


    function CurrentBids({ datType, datIndex }) {
        // !BUG TO FIX LIST BIDS below
        if (artworksDat[datType][datIndex] && artworksDat[datType][datIndex].currentBids && artworksDat[datType][datIndex].currentBids[0]) {
            const bidList = artworksDat[datType][datIndex].currentBids.map((item, index) =>
                <div className="zora--bidItems-container">
                    <div className="zora--bidItem-index">
                        {/* {index + 1} */}
                    </div >
                    <div className="zora--bidItem-index">
                        {item.bidder.id.substring(0, 6)}...
                    </div >
                    <div className="zora--bidItem-index">
                        {item.amount / 1000000000000000000} {item.currency.symbol}
                    </div >
                    <div className="zora--bidItem-index">
                        {timeConverter(item.createdAtTimestamp)}
                    </div >
                </div >
            );

            return (
                <>
                    {bidList}
                </>
            )
        }
        return (
            <>
                <div className="qrCode--zora-container">
                    Scan for more Information
                <QRCode className="qrCode--zora-item" value={`https://zora.co/${artworksDat[datType][datIndex].creatorId}/${artworksDat[datType][datIndex].id}`} />
                URL starts with Zora.co
            </div>
            </>
        )
    }

    function TranstitionTest() {
        return (<>
            <ZoraGallerySlideshow
                datIndex={time}
                datType={segType}
            />
        </>
        )
    }
    return (
        <>
            <CryptoMediaLogo />
            <img className="zora--header-logo" src={ZoraLogo} height="100px" />

            {segType === "transitionBids" && <div className="transition--graphic-container"><CryptoMediaBids /></div>}
            {segType === "transitionFreshMints" && <div className="transition--graphic-container"><CryptoMediaFreshMints /></div>}
            {segType === "transitionTransfers" && <div className="transition--graphic-container"><CryptoMediaFreshMints /></div>}

            {artworksDat[segType] && artworksDat[segType][time] && < >
                <div className="zora--wrapper">
                    <div className="zora--container-left">
                        <ZoraHeader
                            datType={segType}
                            datIndex={time}
                        />
                        <h3>Bids</h3>
                        <br />
                        <CurrentBids
                            datIndex={time}
                            datType={segType}
                        />
                        <br />
                        {/* {bidList} */}
                    </div>
                    <div className="zora--container-right">
                        <TranstitionTest />
                    </div >
                </div >
            </ >
            }
        </>
    )
}


// + Illustration seed nutsack light relfection
// + No more

// On Iphone
// created by under logo

// enter email