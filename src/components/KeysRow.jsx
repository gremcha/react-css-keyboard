import React from 'react'
import '../style/style.css'
import DefaultKey from './keys/DefaultKey'

export default function KeysRow({
    amount,
    keysType,
    uniqueKey,
    uniqueKeyIndex,
}) {
    return (
        <div className="keys-row">
            {new Array(amount).fill(0).map((value, index) => {
                if (index === uniqueKeyIndex) {
                    return <DefaultKey keyType={uniqueKey} />
                } else return <DefaultKey keyType={keysType} />
            })}
        </div>
    )
}

// ;<div className="keys-row">
//     <DefaultKey keyType={keysType} />
//     <DefaultKey keyType={keysType} />
//     <DefaultKey keyType={uniqueKey} />
//     <DefaultKey keyType={keysType} />
//     <DefaultKey keyType={keysType} />
//     <DefaultKey keyType={keysType} />
//     <DefaultKey keyType={keysType} />
// </div>
