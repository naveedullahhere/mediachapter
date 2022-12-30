import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import { DiscussionHeader } from '../../Discussion/DiscussionHeader';
import { Message } from '../../Discussion/Message';
import { Spinner } from '../../Spinner';
import toast from "react-hot-toast";
import { Sidebar } from '../Sidebar';
import { Note } from '../../SummerNote/Note';

export const SingleProjectDiscussion = () => {
    const { user, URL, noteValue, setNoteValue } = useContext(AppContext);
    const [allMessages, setAllMessges] = useState([]);
    const [isErr, setIsError] = useState(false);
    const [projectId, setProjectId] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [loadChat, setLoadChat] = useState(false);
    const [isActive, setisActive] = useState(true);
    const params = useParams();

    const singleProject = params.project;

    useEffect(() => {


        return () => {
            joinDiscussion(singleProject);
            // console.log("single Diss");
        }
    }, [])

    const joinDiscussion = (id) => {

        // message.current.value = "";
        setLoadChat(true);
        setProjectId(id);


        fetch(`${URL}api/get-discussion/${id}`).then(response => response.json())
            .then(data => { setAllMessges(data); setLoadChat(false); })
            .catch(err => { setIsError(true); setLoadChat(false); });
        setLoadChat(true);
    }
    const message = useRef("");


    const handleMessage = () => {
        postData(`${URL}api/discussion-post`, { user_id: user.data.id, project_id: projectId, message: noteValue })
            .then(data => {
                if (data.user_id) {
                    setAllMessges([...allMessages, data]);
                    setisActive(true);
                } else {
                    toast.error("Something went wrong!");
                }
                setIsLoading(false);
            }).catch((err) => {
                setIsLoading(false);
            });
    }

    async function postData(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }

    return (
        <div>
            <div className="container-fluid px-0">
                <div className="row">

                    <div className="col-xl-3 col-lg-3 col-md-4 col-2 pe-0"><Sidebar pageid={'chat'} /></div>

                    <div className="col-xl-9 col-lg-9 col-md-8 col-10 py-md-0 py-4 projects px-md-0 singleDiss position-relative" >
                        <ul id="chat">
                            {
                                allMessages.length === 0 && <p className="">Start Messaging</p>
                            }
                            {loadChat ? <Spinner /> :

                                (
                                    allMessages.map((item) => {

                                        return <Message key={item.id} from={item.username} time={item.created_at} keyid={item.id} id={item.user_id} message={`${item.message}`} userid={user.data.id} />

                                    })
                                )
                            }

                        </ul>
                        <div className="composeScreen">

                            <div class={`popup-window new-mail ${isActive && "minimized"}`}>
                                <div className="header">
                                    <div className="title">
                                        New Message
                                        <div className="right">
                                            <button className="button-grey button-small button-minimize" onClick={() => setisActive(true)}>＿</button>
                                            <button className="button-grey button-small button-fullscreen">
                                                <i className="fa fa-expand" onClick={() => setisActive(false)}></i></button>
                                            <button className="button-grey button-small button-exit" onClick={() => setisActive(false)}>
                                                <i className="fa fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="min-hide">
                                        <input className="receiver input-large" type="text" placeholder="Recipients" value="" />
                                    </div>
                                </div>
                                {/* <textarea className="min-hide" placeholder='Subject' ref={message}></textarea> */}
                                <Note />
                                <div className="menu footer min-hide">
                                    <button className="button-large button-blue" onClick={handleMessage}>Send</button>
                                    <button className="button-large button-silver">
                                        <i className="fa fa-font"></i>
                                    </button>|<button className="button-large button-silver">
                                        <i className="fa fa-paperclip"></i>
                                    </button>
                                    <button className="button-large button-silver">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                    <div className="right">
                                        <button className="button-large button-silver">
                                            <i className="fa fa-trash-o"></i>
                                        </button>|<button className="button-large button-silver">
                                            <i className="fa fa-sort-asc"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="buttonbar">

                            <button className="btn btn-main compose" onClick={() => setisActive(!isActive)}>
                                Compose
                            </button>
                            <button className="btn btn-main compose" onClick={() => joinDiscussion(singleProject)}>
                                Sync
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
