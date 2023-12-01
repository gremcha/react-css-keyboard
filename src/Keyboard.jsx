import React from 'react'
import './style/style.css'
import KeyboardBase from './components/KeyboardBase'
import KeysRow from './components/KeysRow'

export default function () {
    return (
        <div className="keyboard">
            <div className="rows">
                <KeysRow
                    amount={8}
                    keysType="fourth-row"
                    uniqueKey="tab"
                    uniqueKeyIndex={0}
                />
                <KeysRow
                    amount={8}
                    keysType="third-row"
                    uniqueKey="tab"
                    uniqueKeyIndex={7}
                />
                <KeysRow
                    amount={9}
                    keysType="second-row"
                    uniqueKey="second-row"
                    uniqueKeyIndex={10}
                />
                <KeysRow
                    amount={8}
                    keysType="first-row"
                    uniqueKey="space"
                    uniqueKeyIndex={3}
                />
            </div>
            <KeyboardBase />
        </div>
    )
}
