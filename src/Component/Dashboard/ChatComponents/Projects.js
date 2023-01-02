import React from 'react'
import { Link } from 'react-router-dom'

export const Projects = ({ id, ProjectName, userId, joinDiscussion, username, setProjectId, lastMessage, time, unread, customerId }) => {
    // console.log(userId, parseInt(customerId));
    var msgTime;
    var dt = new Date();
    if (Date.parse(time) - 3 < dt.getTime()) {
        msgTime = time.split("T")[1].split(".")[0]
    } else {
        msgTime = time.split("T")[0];
    }
    console.log(username);
    return (
        <tr key={id} className={unread != 0 && "unreasd"} onClick={() => setProjectId(id)}>
            <Link to={`/project-discussion/${id}`} className="d-block my-2">
                <div className="username d-flex justify-content-between">
                    <p>   {username}   </p>
                    {
                        unread != 0 && <div class=''><span class="badge bg-dark rounded-pill">{unread}</span></div>
                    }
                </div>
                {/* <div className='d-flex gap-4 w-100'> */}

                <div class=''><p> {ProjectName}</p></div>

                {/* </div> */}
                <div className="d-flex justify-content-between">

                    <div class='smmm msggg' dangerouslySetInnerHTML={{ __html: lastMessage }}></div>
                    <div class='smmm'>{msgTime}</div>

                </div>
            </Link>
        </tr >
    )
}


