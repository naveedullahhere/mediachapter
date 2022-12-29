import React, { useContext, useRef, useState, useEffect } from 'react'
import { AppContext } from '../../context/AppContext';
import { DiscussionHeader } from '../Discussion/DiscussionHeader';
import { Message } from '../Discussion/Message';
import { ProjectList } from '../Discussion/ProjectList'
import { Sidebar } from './Sidebar'
import toast from "react-hot-toast";
import Pusher from 'pusher-js';
import { Spinner } from '../Spinner';
import { Messages } from '../Discussion/Messages';
import { Error } from '../Error';

export const Chat = () => {

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

    const message = useRef("");
    const searchProjects = useRef("");

    // Pusher.logToConsole = true;

    // var pusher = new Pusher('9d1f28fc6e5a64c4258c', {
    //     cluster: 'ap2',
    //     channelAuthorization: {
    //         endpoint: 'http://example.com/pusher/auth'
    //     },
    // });

    // var channel = pusher.subscribe('channed-media-chapter');
    // channel.bind('projectdiscussion', function (data) {
    //     alert(JSON.stringify(data));
    // });



    useEffect(() => {
        var url = user && user.data.user_type === "user" ? `${URL}api/project/${user.data.user_token}` : `${URL}api/project/management`
        fetchProjects(url);
    }, []);


    const fetchProjects = (url) => {

        console.log(`URL: ${url}`);

        fetch(url)
            .then((response) => response.json())
            .then((actualData) => { setProjects(actualData); settempProjects(actualData); setIsLoading(false); actualData.length === 0 ? setIsProjects(false) : setIsProjects(true) })
            .catch((err) => {
                setProjects([]);
                setIsError(true);
                setIsLoading(false);
            })
    }


    const handleMessage = () => {
        // setIsLoading(true);
        postData(`${URL}api/discussion-post`, { user_id: user.data.id, project_id: projectId, message: message.current.value })
            .then(data => {
                if (data.user_id) {
                    setAllMessges([...allMessages, data]);
                    message.current.value = "";
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


    // console.log(projects);



    const joinDiscussion = (id, name) => {

        message.current.value = "";
        setLoadChat(true);
        setProjectId(id);
        setProjectName(name);
        startLoopp(id, name);

        // console.log(id);

        fetch(`${URL}api/get-discussion/${id}`).then(response => response.json())
            .then(data => { setAllMessges(data); setLoadChat(false); })
            .catch(err => { setIsError(true); setLoadChat(false); });
        setLoadChat(true);
    }

    const loadMags = (id, name) => {

        // message.current.value = "";
        setProjectId(id);
        setProjectName(name);
        // startLoopp(id, name);

        // console.log(id);

        fetch(`${URL}api/get-discussion/${id}`).then(response => response.json())
            .then(data => { setAllMessges(data); })
            .catch(err => { }); 
    }

    const startLoopp = (id, name) => {
        setInterval(() => {
            loadMags(id, name);
            console.log("asd");
        }, 5000);
    }

    const filterProjects = () => {
        setProjects(projects.filter((e) => {
            if (searchProjects.current.value.length === 0) {
                console.log("if");
                return tempProjects;
            }
            else {
                console.log("else");
                return e.name.match(searchProjects.current.value);
            }
        }))
    }
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div>
            <div className="container-fluid px-0">
                <div className="row">

                    <div className="col-xl-3 col-lg-3 col-md-4 col-2 pe-0"><Sidebar pageid={'chat'} /></div>

                    <div className="col-xl-9 col-lg-9 col-md-8 col-10 py-md-0 py-4 projects px-md-0" >

                        <div className="row w-100 mx-auto h-100">
                            <div className="col-12 px-0">
                                <div id="container">
                                    <aside>
                                        <header className='pb-3'>
                                            <input type="text" placeholder="search" onChange={e => { setSearchTerm(e.target.value) }} ref={searchProjects} />
                                        </header>
                                        <div className="d-flex align-items-center">

                                            <h1 className="heading m-0 text-white fs-5 px-4">
                                                Projects
                                            </h1>

                                            {/* <button className="btn btn-main">
                                                Compose
                                            </button> */}

                                        </div>
                                        <ul>
                                            {projects.filter((item) => {
                                                if (searchTerm === "") {
                                                    return item
                                                }
                                                else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                                    return item
                                                }
                                                return null
                                            }).map((item) => {
                                                return <ProjectList id={item.id} ProjectName={item.name} joinDiscussion={joinDiscussion} />
                                            })}

                                            {isLoading &&
                                                <Spinner />
                                            }
                                        </ul>
                                    </aside>
                                    <main>
                                        <header>

                                            <DiscussionHeader ProjectName={projectName} members={searchProjects.current.value} />

                                        </header>
                                        {isErr && <Error />}

                                        <Messages loadChat={loadChat} msgs={allMessages} userid={user.data.id} />

                                        <footer className='d-flex'>
                                            <input type={"text"} placeholder="Type your message" ref={message} className='input' />
                                            <button className='btn btn-white' onClick={handleMessage}>Send</button>
                                        </footer>

                                    </main>
                                    {/* <div class='popup-window new-mail'>
                                        <div class='header'>
                                            <div class='title'>New Message<div class='right'>
                                                <button class='button-grey button-small button-minimize'>＿
                                                </button>
                                                <button class='button-grey button-small button-fullscreen'>
                                                    <i class='fa fa-expand'></i>
                                                </button>
                                                <button class='button-grey button-small button-exit'>
                                                    <i class='fa fa-times'></i>
                                                </button>
                                            </div>
                                            </div><div class='min-hide'>
                                                <input class='receiver input-large' type='text' placeholder='Recipients' value='Hello WOrld' />
                                                <input class='input-large' type='text' placeholder='Subject' />
                                            </div>
                                        </div>
                                        <textarea class='min-hide'></textarea>
                                        <div class='menu footer min-hide'>
                                            <button class='button-large button-blue'>Send</button>
                                            <button class='button-large button-silver'>
                                                <i class='fa fa-font'></i>
                                            </button> |
                                            <button class='button-large button-silver'>
                                                <i class='fa fa-paperclip'></i>
                                            </button>
                                            <button class='button-large button-silver'>
                                                <i class='fa fa-plus'></i>
                                            </button>
                                            <div class='right'>
                                                <button class='button-large button-silver'>
                                                    <i class='fa fa-trash-o'></i>
                                                </button>
                                                |<button class='button-large button-silver'>
                                                    <i class='fa fa-sort-asc'></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
