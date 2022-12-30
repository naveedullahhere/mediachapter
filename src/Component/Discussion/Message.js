import React from 'react'

export const Message = ({ from, time, key, id, message, userid }) => {
    return (
        <li class={`${userid === id ? "me" : "you"}`} key={key}>
            <div class="entete">
                <h2>{`${userid === id ? "You" : from}`}</h2>
                <h3>{time}</h3>
            </div>
            <div class="message" dangerouslySetInnerHTML={{ __html: message }}> 
            </div>
        </li>
    )
}
