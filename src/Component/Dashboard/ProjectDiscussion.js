import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { Spinner } from '../Spinner';
import { Note } from '../SummerNote/Note';
import App, { Autocomplete } from '../SummerNote/SuggestProjects';
import { Projects } from './ChatComponents/Projects'
import { Sidebar } from './Sidebar'
import toast from "react-hot-toast";

export const ProjectDiscussion = () => {

  const { user, URL, noteValue, setEditorState, EditorState } = useContext(AppContext);
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
        toast.error("Something went wrong!");
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
    // console.log(projectOuterId);
    postData(`${URL}api/discussion-post`, { user_id: user.data.id, project_id: projectOuterId, message: noteValue })
      .then(data => {
        if (data.user_id) {
          // setAllMessges([...allMessages, data]);
          setisActive(true);
          setEditorState(() => EditorState.createEmpty(),);
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

          <div className="col-xl-9 col-lg-9 col-md-8 col-10 py-md-0 py-4 projects px-md-0 " >

            <main className='mail py-md-4 py-3'>
              <div class='bg-white rounded-3 p-3 px-2 shadow-sm'>
                <div class='input-box d-flex align-items-center'>

                  <div className="row w-100 mx-auto searchprojects">

                    <div className="col-12">

                      <p className="fs-6 mb-1 text-dark">Search</p>

                    </div>

                    <div className="col-12 d-flex justify-content-between">
                      <div className="searchh gap-2 w-50">

                        <input class='form-control text-dark w-100' type='text' placeholder='Search Conversations...' onChange={e => { setSearchTerm(e.target.value) }} />
                        {/* <button class='btn btn-main py-2'><i className="fa fa-search"></i></button> */}
                      </div>
                      <div>

                        <button class='btn btn-main py-2 mx-2' onClick={() => setisActive(!isActive)}>Start New iDiscussion</button>
                        <button class='btn btn-main py-2' onClick={() => fetchProjects(user && user.data.user_type === "user" ? `${URL}api/project/${user.data.user_token}` : `${URL}api/project/management`)}><i className="fa fa-sync-alt"></i></button>
                      </div>

                    </div>
                  </div>

                </div>
              </div>


              {/* <ul class='mail-menu'>
                <li>
                  <div class='options-wrapper'>
                    <button className="button-checkAll button-options button-large button-grey" onClick={() => setisActive(!isActive)}>
                      Compose
                    </button>
                  </div>
                </li>
                <li>
                  <button class='button-grey button-large' onClick={() => fetchProjects(user && user.data.user_type === "user" ? `${URL}api/project/${user.data.user_token}` : `${URL}api/project/management`)}>
                    <i className="fa fa-refresh"></i>
                  </button>
                </li>
              </ul> */}

              <div class='mail-box bg-white rounded-3  shadow-sm mt-3'>
                <table>

                  {projects.filter((item) => {
                    if (searchTerm === "") {
                      return item
                    }
                    else if (item.projects.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return item
                    }
                    return null
                  }).map((item) => {
                    return item['total-message'] != 0 && <Projects id={item.projects.id} userId={user.data.id} customerId={item.projects.customer_id} username={item.message.username} setProjectId={setProjectId} key={item.projects.id} unread={item['unread-count']} ProjectName={item.projects.name} joinDiscussion={joinDiscussion} lastMessage={!item.message ? "" : item.message.message} time={!item.message ? "" : item.message.created_at} />
                  })}

                  {isLoading &&
                    <Spinner />
                  }
                  <div className="composeScreen">

                    <div class={`popup-window new-mail ${isActive && "minimized"}`}>
                      <div className="header">
                        <div className="title mb-0">
                          New Message
                          <div className="right">
                            <button className="button-grey button-small button-minimize" onClick={() => setisActive(true)}>＿</button>
                            <button className="button-grey button-small button-fullscreen">
                              <i className="fa fa-expand" onClick={() => setisActive(false)}></i></button>
                          </div>
                        </div>
                        <div className="min-hide">
                          <Autocomplete projects={projects} projectOuterId={projectOuterId} setProjectOuterId={setProjectOuterId} />
                        </div>
                      </div>
                      {/* <textarea className="min-hide" placeholder='Subject' ref={message}></textarea> */}

                      <Note

                      />
                      <div className="menu footer min-hide">
                        <button className="button-large button-blue" onClick={handleMessage}>Send</button>
                        <button className="button-large button-silver">
                          <i className="fa fa-font"></i>
                        </button>
                        |
                        <button className="button-large button-silver">
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


                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
