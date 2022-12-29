import React, { useEffect, useRef } from 'react';
import { Spinner } from '../Spinner';
import { Message } from './Message';

export const Messages = ({ msgs, userid, loadChat }) => {

    const divRef = useRef(null);

    // useEffect(() => {
    //     divRef.current.scrollIntoView({ behavior: 'smooth' });
    // }, [msgs]);


    return (
        <ul id="chat" ref={divRef}>
            {
                msgs.length === 0 && <p className="">Start Messaging</p>
            }
            {loadChat ? <Spinner /> :

                (
                    msgs.map((item) => {

                        return <Message from={item.username} time={item.created_at} key={item.id} id={item.user_id} message={`${item.message}`} userid={userid} />

                    })
                )

            }

        </ul>
    )
}
