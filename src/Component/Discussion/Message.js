import React from 'react'

export const Message = ({ from, time, keyid, id, message, userid }) => {
    return (
        <li class={`${userid === id ? "me" : "you"}`} key={keyid}>
            <div className="entete">
                <h2>{`${userid === id ? "You" : from}`}</h2>
                <h3>{time}</h3>
            </div>
            <div className="message" dangerouslySetInnerHTML={{ __html: message }}>
            </div>
        </li>
    )
}
