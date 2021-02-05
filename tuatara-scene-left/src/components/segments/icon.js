import React from 'react'

export default function MarketWatchIcon({ stroke }) {
    return (
        <>
            <svg height="70" width="100" viewBox="0 0 600 600">
                <path fill="#000" opacity=".3" transform="matrix(1.27018 0 0 -1.27018 319.225 321.522)" d="M-251.322 -253.13L251.322 -253.13L251.322 253.13L-251.322 253.13L-251.322 -253.13Z" />
                <path fill="none" stroke={stroke} strokeWidth="20" transform="matrix(1 0 0 -1 190.719 193.748)" d="M0 100C-55.2285 100 -100 55.2285 -100 0C-100 -55.2285 -55.2285 -100 0 -100C55.2285 -100 100 -55.2285 100 0C100 55.2285 55.2285 100 0 100Z" />
                <path fill="none" stroke={stroke} strokeWidth="20" transform="matrix(1 0 0 -1 449.162 453.999)" d="M0 100C-55.2285 100 -100 55.2285 -100 0C-100 -55.2285 -55.2285 -100 0 -100C55.2285 -100 100 -55.2285 100 0C100 55.2285 55.2285 100 0 100Z" />
                <path fill="#fff" stroke={stroke} strokeWidth="20" strokeLinecap="round" transform="matrix(1 0 0 -1 317.173 323.818)" d="M247.706 249.514L-247.706 -249.514" fill-rule="evenodd" />
            </svg>
        </>
    )
}
