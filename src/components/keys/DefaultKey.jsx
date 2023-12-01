import React from 'react'
import '../../style/style.css'

export default function DefaultKey({ keyType = 'firstRow' }) {
    return (
        <div className="key">
            <div className={`up-side-key ${keyType}`}></div>
            <div className={`front-side-key ${keyType}`}></div>
        </div>
    )
}
