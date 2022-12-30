import React from 'react'
import { Link } from 'react-router-dom'

export const Projects = ({ id, ProjectName, joinDiscussion, lastMessage, time, unread }) => {
    return (
        <tr key={id} className={unread != 0 && "unread"}>
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
                <td class='mail-title'>{lastMessage}</td>
                <td class='mail-time'>{time}</td>
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
