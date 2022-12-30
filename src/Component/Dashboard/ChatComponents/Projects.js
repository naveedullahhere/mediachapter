import React from 'react'
import { Link } from 'react-router-dom'

export const Projects = ({ id, ProjectName, joinDiscussion, setProjectId, lastMessage, time, unread }) => {


    var msgTime;
    var dt = new Date();
    if (Date.parse(time) < dt.getTime()) {
        msgTime = time.split("T")[1].split(".")[0]
    } else {
        msgTime = time.split("T")[0];
    }
    return (
        <tr key={id} className={unread != 0 && "unread"} onClick={() => setProjectId(id)}>
            <Link to={`/project-discussion/${id}`}>
                <td class='mail-labels'>
                    <input type='checkbox' class='mail-check' id={`chk${id}`} />
                    <label for={`chk${id}`}></label>
                    <input type='checkbox' class='mail-star' id={`star${id}`} />
                    <label for={`star${id}`}></label>
                    {/* <input typ='checkbox' class='mail-important' id={`im${id}`} />
                    <label for={`im${id}`}></label> */}
                </td>
                <td class='mail-sender'>{ProjectName}</td>
                <td class='mail-title' dangerouslySetInnerHTML={{ __html: lastMessage }}></td>
                <td class='mail-time'>{msgTime}</td>
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
