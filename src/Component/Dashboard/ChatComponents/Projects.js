import React from 'react'
import { Link } from 'react-router-dom'

export const Projects = ({ id, ProjectName, userId, joinDiscussion, setProjectId, lastMessage, time, unread, customerId }) => {
    // console.log(userId, parseInt(customerId));
    var msgTime;
    var dt = new Date();
    if (Date.parse(time)-3 < dt.getTime()) {
        msgTime = time.split("T")[1].split(".")[0]
    } else {
        msgTime = time.split("T")[0];
    }
    return (
        <tr key={id} className={unread != 0 && "unread"} onClick={() => setProjectId(id)}>
            {/* <tr key={id} className={unread != 0 && userId != parseInt(customerId) ? "unread" : ""} onClick={() => setProjectId(id)}> */}
            <Link to={`/project-discussion/${id}`} className="d-flex justify-content-between">
                <div className='d-flex gap-4 w-100'>

                    <div class='mail-sender'>{ProjectName}</div>
                    <div class='mail-title' dangerouslySetInnerHTML={{ __html: lastMessage }}></div>
                    {
                        unread != 0 && <div class='mail-unread'><span class="badge bg-white text-dark rounded-pill">{unread}</span></div>
                        // unread != 0 && userId != parseInt(customerId) ? <div class='mail-unread'><span class="badge bg-white text-dark rounded-pill">{unread}</span></div> : ""
                    }
                </div>
                <div class='mail-time'>{msgTime}</div>
            </Link>
            {/* <tr class='unread'>
            
                <td class='mail-labels'>
                    <input type='checkbox' class='mail-check' id='chk3' />
                    <label for='chk3'></label>
                    <input type='checkbox' class='mail-star' id='star3' />
                    <label for='star3'></label>
                    <input type='checkbox' class='mail-important' id='im3' />
                    <label for='im3'></label>
                </td>
                <td class='mail-sender'>Amy Lee</td>
                <td class='mail-title'>mea praesent vituperata</td>
                <td class='mail-time'>10:27 am</td>
            </tr> */}
        </tr >


    )
}
