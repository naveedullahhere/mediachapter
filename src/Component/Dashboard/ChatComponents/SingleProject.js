import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../../context/AppContext';
import { DiscussionHeader } from '../../Discussion/DiscussionHeader';
import { Message } from '../../Discussion/Message';
import { Spinner } from '../../Spinner';
import toast from "react-hot-toast";
import { Sidebar } from '../Sidebar';
import { Note } from '../../SummerNote/Note';

export const SingleProjectDiscussion = () => {
    const { user, URL, noteValue, setEditorState, EditorState, ContentState, editorState } = useContext(AppContext);
    const [allMessages, setAllMessges] = useState([]);
    const [isErr, setIsError] = useState(false);
    const [projectId, setProjectId] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [loadChat, setLoadChat] = useState(false);
    const [isActive, setisActive] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    const singleProject = params.project;



    const messageEndRef = useRef(null);
    useEffect(() => {
        joinDiscussion(singleProject);
    }, []);

    const scrollToBottom = () => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
    }
    const joinDiscussion = async (id) => {
        scrollToBottom();

        // message.current.value = "";
        setLoadChat(true);
        setProjectId(id);


        fetch(`${URL}api/get-discussion/${id}`).then(response => response.json())
            .then(data => { setAllMessges(data); setLoadChat(false); })
            .catch(err => { setIsError(true); setLoadChat(false); toast.error("Something went wrong!"); });
        // if (allMessages.length === 0) {
        //     navigate("/notfound");
        // }
        setLoadChat(true);
    }


    const handleMessage = () => {

        postData(`${URL}api/discussion-post`, { user_id: user.data.id, project_id: projectId, message: noteValue })
            .then(data => {
                if (data.user_id) {
                    setAllMessges([...allMessages, data]);
                    setisActive(true);
                    scrollToBottom();

                    setEditorState(() => EditorState.createEmpty(),);
                } else {
                    toast.error("Something went wrong!");
                }
                setIsLoading(false);
                scrollToBottom();
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
                            {loadChat ? <Spinner /> :

                                (
                                    allMessages.map((item) => {

                                        return <Message key={item.id} from={item.username} time={item.created_at} keyid={item.id} id={item.user_id} message={`${item.message}`} userid={user.data.id} />

                                    })
                                )
                            }

                            <li ref={messageEndRef} ></li>
                        </ul>
                        <button className="btn btn-main synccc" onClick={() => joinDiscussion(singleProject)}>

                            <i className="fa fa-sync-alt">

                            </i>

                        </button>
                        {allMessages.length ?
                            <div className="composeScreen p-4 bg-light">

                                <div className='d-flex align-items-center border-muted rounded-3 position-relative'>
                                    <Note />
                                    <div className="sendd">
                                        <button className="btn btn-main mx-3 " onClick={handleMessage}>Send</button>
                                    </div>
                                </div>

                            </div>
                            : ""}
                    </div>
                </div>
            </div>
        </div >
    )
}
