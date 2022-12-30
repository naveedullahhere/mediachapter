import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import { DiscussionHeader } from '../../Discussion/DiscussionHeader';
import { Message } from '../../Discussion/Message';
import { Spinner } from '../../Spinner';
import toast from "react-hot-toast";
import { Sidebar } from '../Sidebar';

export const SingleProjectDiscussion = () => {
    const { user, URL } = useContext(AppContext);
    const [projects, setProjects] = useState([]);
    const [allMessages, setAllMessges] = useState([]);
    const [tempProjects, settempProjects] = useState([]);
    const [isErr, setIsError] = useState(false);
    const [projectId, setProjectId] = useState('');
    const [projectName, setProjectName] = useState('');
    const [isProjects, setIsProjects] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [loadChat, setLoadChat] = useState(false);
    const [isActive, setisActive] = useState(false);
    const params = useParams();

    const singleProject = params.project;

    useEffect(() => {


        return () => {
            joinDiscussion(singleProject);
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
        postData(`${URL}api/discussion-post`, { user_id: user.data.id, project_id: projectId, message: message.current.value })
            .then(data => {
                if (data.user_id) {
                    setAllMessges([...allMessages, data]);
                    message.current.value = "";
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

                                        return <Message from={item.username} time={item.created_at} key={item.id} id={item.user_id} message={`${item.message}`} userid={user.data.id} />

                                    })
                                )
                            }

                        </ul>
                        <div className="composeScreen">
                            <div class={`popup-window new-mail ${isActive && "minimized"}`}>
                                <div class="header">
                                    <div class="title">
                                        New Message
                                        <div class="right">
                                            <button class="button-grey button-small button-minimize" onClick={() => setisActive(true)}>＿</button>
                                            <button class="button-grey button-small button-fullscreen">
                                                <i class="fa fa-expand" onClick={() => setisActive(false)}></i></button>
                                            <button class="button-grey button-small button-exit" onClick={() => setisActive(false)}>
                                                <i class="fa fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="min-hide">
                                        <input class="receiver input-large" type="text" placeholder="Recipients" value="" />
                                    </div>
                                </div>
                                <textarea class="min-hide" placeholder='Subject' ref={message}></textarea>
                                <div class="menu footer min-hide">
                                    <button class="button-large button-blue" onClick={handleMessage}>Send</button>
                                    <button class="button-large button-silver">
                                        <i class="fa fa-font"></i>
                                    </button>
                                    |
                                    <button class="button-large button-silver">
                                        <i class="fa fa-paperclip"></i>
                                    </button>
                                    <button class="button-large button-silver">
                                        <i class="fa fa-plus"></i>
                                    </button>
                                    <div class="right">
                                        <button class="button-large button-silver">
                                            <i class="fa fa-trash-o"></i>
                                        </button>|<button class="button-large button-silver">
                                            <i class="fa fa-sort-asc"></i>
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
