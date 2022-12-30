import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { Spinner } from '../Spinner';
import { Note } from '../SummerNote/Note';
import App, { SuggestProjects } from '../SummerNote/SuggestProjects';
import { Projects } from './ChatComponents/Projects'
import { Sidebar } from './Sidebar'
import toast from "react-hot-toast";

export const ProjectDiscussion = () => {

  const { user, URL, noteValue } = useContext(AppContext);
  const [projects, setProjects] = useState([]);
  // const [allMessages, setAllMessges] = useState([]);
  const [tempProjects, settempProjects] = useState([]);
  const [isErr, setIsError] = useState(false);
  const [projectId, setProjectId] = useState('');
  const [projectName, setProjectName] = useState('');
  const [isProjects, setIsProjects] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadChat, setLoadChat] = useState(false);


  useEffect(() => {
    var url = user && user.data.user_type === "user" ? `${URL}api/project/${user.data.user_token}` : `${URL}api/project/management`
    fetchProjects(url);
  }, []);

  const fetchProjects = (url) => {

    setIsLoading(true);

    fetch(url)
      .then((response) => response.json())
      .then((actualData) => { setProjects(actualData); settempProjects(actualData); setIsLoading(false); actualData.length === 0 ? setIsProjects(false) : setIsProjects(true) })
      .catch((err) => {
        setProjects([]);
        setIsError(true);
        setIsLoading(false);
      })
  }
  const [searchTerm, setSearchTerm] = useState("");



  const joinDiscussion = (id, name) => {

    // message.current.value = "";
    // setLoadChat(true);
    // setProjectId(id);
    // setProjectName(name);
    // startLoopp(id, name);


    // fetch(`${URL}api/get-discussion/${id}`).then(response => response.json())
    //   .then(data => { setAllMessges(data); setLoadChat(false); })
    //   .catch(err => { setIsError(true); setLoadChat(false); });
    // setLoadChat(true);
  }


  const handleMessage = () => {
    // console.log(noteValue);

    postData(`${URL}api/discussion-post`, { user_id: user.data.id, project_id: projectOuterId, message: noteValue })
      .then(data => {
        if (data.user_id) {
          // setAllMessges([...allMessages, data]);
          setisActive(true);
          fetchProjects(user && user.data.user_type === "user" ? `${URL}api/project/${user.data.user_token}` : `${URL}api/project/management`);
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

  const [isActive, setisActive] = useState(true);
  const [projectOuterId, setProjectOuterId] = useState('');

  return (
    <div>
      <div className="container-fluid px-0">
        <div className="row">

          <div className="col-xl-3 col-lg-3 col-md-4 col-2 pe-0"><Sidebar pageid={'chat'} /></div>

          <div className="col-xl-9 col-lg-9 col-md-8 col-10 py-md-0 py-4 projects px-md-0" >

            <main className='mail'>
              <div class='mail-search'>
                <div class='input-box d-flex align-items-center'>
                  <input class='input' type='text' onChange={e => { setSearchTerm(e.target.value) }} />
                  <button class='btn btn-main py-2'><i class="fa fa-search"></i></button>

                </div>
              </div>


              <ul class='mail-menu'>
                <li>
                  <div class='options-wrapper'>
                    <button class="button-checkAll button-options button-large button-grey" onClick={() => setisActive(!isActive)}>
                      Compose
                    </button>
                    <ul class='dropdown-menu drop-bottom hide'>
                      <li>All</li>
                      <li>None</li>
                      <li>Read</li>
                      <li>Unread</li>
                      <li>Starred</li>
                      <li>Unstarred</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <button class='button-grey button-large' onClick={() => fetchProjects(user && user.data.user_type === "user" ? `${URL}api/project/${user.data.user_token}` : `${URL}api/project/management`)}>
                    <i class="fa fa-refresh"></i>
                  </button>
                </li>
                <li>
                  <div class='options-wrapper'>
                    <button class="button-options button-large button-grey">
                      <p>More</p>
                      <div class='more'><i class="fa fa-sort-asc"></i></div>
                    </button>
                    <ul class='dropdown-menu drop-bottom hide'>
                      <li>Mark all as read</li>
                      <li class='splitLine'></li>
                      <li class='disable'>Select messages to <br /> see more actions</li>
                    </ul>
                  </div>
                </li>
              </ul>

              <div class='mail-box'>
                <table>

                  {projects.filter((item) => {
                    if (searchTerm === "") {
                      return item
                    }
                    else if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return item
                    }
                    return null
                  }).map((item) => {
                    return item['total-message'] != 0 && <Projects id={item.projects.id} setProjectId={setProjectId} unread={item['unread-count']} ProjectName={item.projects.name} joinDiscussion={joinDiscussion} lastMessage={item.message.message} time={item.message.created_at} />
                  })}

                  {isLoading &&
                    <Spinner />
                  }
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
                          <SuggestProjects projects={projects} setProjectOuterId={setProjectOuterId} />
                        </div>
                      </div>
                      {/* <textarea class="min-hide" placeholder='Subject' ref={message}></textarea> */}

                      <Note

                      />
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


                </table>
                <br /><br /><br />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
