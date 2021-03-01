import './zora.css';
import CryptoMediaFreshMints from './assets/cryptoMediaFreshMints';
import CryptoMediaBids from './assets/cryptoMediaBids';
export default function ZoraHeader({ datType, datIndex }) {
    return (
        <div className="zora--header-wrapper">
            <div className="zora--header-tag">
                {datType === "freshMints" && <CryptoMediaFreshMints />}
                {datType === "bids" && <CryptoMediaBids />}
                {datIndex + 1} of 20
            </div>
        </div>
    )
}
