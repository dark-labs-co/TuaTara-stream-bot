import React from 'react'
import './avatar.css'
import AvatarVid from '../../assets/avatar/avatar.webm'
export default function Avatar() {
    return (
        <>
            <video autoPlay loop controls className="avatar--mov"> <source src={AvatarVid} width="auto" type="video/mp4" /></video>

        </>
    )
}
