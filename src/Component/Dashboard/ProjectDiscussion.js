import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { Spinner } from '../Spinner';
import { Projects } from './ChatComponents/Projects'
import { Sidebar } from './Sidebar'

export const ProjectDiscussion = () => {

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
  projects.map((item) => {
    console.log(item);
  })
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
                    <button class="button-checkAll button-options button-large button-grey">
                      <input type='checkbox' class='mail-check' id='chkAll' />
                      <label for='chkAll'></label>
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
                  <button class='button-grey button-large' onClick={() => fetchProjects(user && user.data.user_type === "user" ? `${URL}api/project/${user.data.user_token}` : `${URL}api/project/management`)}><i class="fa fa-refresh"></i></button>
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
                    return item['total-message'] != 0 && <Projects id={item.projects.id} unread={item['unread-count']} ProjectName={item.projects.name} joinDiscussion={joinDiscussion} lastMessage={"Fresh Pins for you!"} time={"10:43 PM"} />
                  })}

                  {isLoading &&
                    <Spinner />
                  }

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
