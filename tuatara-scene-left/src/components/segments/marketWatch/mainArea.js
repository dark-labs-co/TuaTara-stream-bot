import React from 'react'
import DataLink from '../../../dataLinkRaw.json'
import MarketCell from './marketCell'
import CoinData from '../../../coinData.json'
import "./marketWatch.css"

export default function MainArea() {

    function numberWithCommas(x) {
        if (x >= 1000) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        return (x)
    }

    function PairGallery() {
        return (
            <div className="pairGallery--wrapper">
                {CoinData.marketStats.map((valueI, indexI) => {
                    return <>
                        {indexI <= 2 && <div className={`pairGallery--container ${valueI.exchange}`}>
                            <div className="pairGallery--exchangeTitle-container">
                                <h2 className="pairGallery--exchange-title">
                                    {valueI.exchange}
                                </h2>
                                <h3 className="pairGallery--exchange-volume">
                                    {numberWithCommas(valueI.volumeTotal.toFixed(0))}
                                </h3>
                            </div>
                            {CoinData.exchanges.map((valueJ, indexJ) => {
                                if (valueI.exchange === valueJ.name) {
                                    return <div className="coinStats--wrapper">
                                        {valueJ.pairItems.map((valueK, indexK) => {
                                            return <>
                                                {indexK <= 2 &&
                                                    <div className="coinStats--container">
                                                        <div className="coinStats--pair-container">
                                                            <div className="coinStats--pair-text">{(valueK.base <= 10) ? valueK.base : valueK.coinId.substring(0, 10)}</div>
                                                            <div className="coinStats--pair-text">{valueK.target.substring(0, 5)}</div>
                                                        </div>
                                                        <div className="coinStats--pair-volume">{numberWithCommas(valueK.volume.toFixed(2).substring(0, 5))}</div>
                                                    </div>}
                                            </>
                                        })}
                                    </div>
                                }
                                {/* {indexJ <= 3 && <div className="pairGallery--item-container">
                                        <p className="pairGallery--item-number">{indexJ}.</p>
                                        <h4 className="pairGallery--item-target"> {value.pairItems[indexJ].target.substring(0, 5)}</h4>
                                        <h3 className="pairGallery--item-volume"> {numberWithCommas(value.pairItems[indexJ].volume.toFixed())}</h3>
                                    </div>
                                    }*/}
                            })}

                        </div>
                        }
                    </>
                })
                }
            </div >
        )
    }

    return (
        <>
            <div className="coinRank">
                #{CoinData.coin[0].rank + 1}
            </div>

            <div className="display--wrapper">
                <div className="display--container">
                    <div className="display--title-container">
                        <h1 className="display--title-text">Top Exchange Pair Volume</h1>
                    </div>
                    <PairGallery />
                    <div className="display--priceStats--wrapper">
                        <div className="display--title-container">
                            <h1 className="display--title-text">Price Movement</h1>
                        </div>
                        <MarketCell
                            title='1hr'
                            dat={DataLink.market_data.price_change_percentage_1h_in_currency.usd}
                        />
                        <MarketCell
                            title='1d'
                            dat={DataLink.market_data.price_change_percentage_24h}
                        />
                        <MarketCell
                            title='7d'
                            dat={DataLink.market_data.price_change_percentage_7d}
                        />
                        <MarketCell
                            title='30d'
                            dat={DataLink.market_data.price_change_percentage_30d}
                        />
                        <MarketCell
                            title='1y'
                            dat={DataLink.market_data.price_change_percentage_1y}
                        />
                    </div>
                </div>
            </div >
        </>
    )
}