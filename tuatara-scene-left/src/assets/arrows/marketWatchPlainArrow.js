import React from 'react'

export default function MarketWatchPlainArrow({ fills, rotation }) {


    return (
        < svg style={{ margin: 'auto' }} height="40" width="40" viewBox="40 -100 100 200"
            transform={`rotate(${rotation})`
            }>
            <path fill={fills}
                d="M76.5 95L181.5 0L76.5 -95L76.5 -37.5L-76.5 -37.5L-76.5 37.5L76.5 37.5L76.5 95Z" fill-rule="evenodd" />
        </svg >
    )
}


