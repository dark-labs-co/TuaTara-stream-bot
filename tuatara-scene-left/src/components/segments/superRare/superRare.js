import React from 'react'
import dataLink from '../../../rareData.json'
import "./superRare.css"
export default function SuperRare() {
    console.log(dataLink)
    const sidebar = (
        <>
            {dataLink.artworksDat.recent.map((recent) =>
                <div className="art--cell-container">
                    <img className="art--cell-image" src={recent.image} />
                    <div className="art--cell-title">{recent.name}</div>
                </div>
            )}
        </>
    );
    return (
        <div className="art--cell-wrapper">
            {sidebar}
        </div>
    );
}