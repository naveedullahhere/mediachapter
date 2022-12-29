import React from 'react'

export const ProjectList = ({ ProjectName, id, joinDiscussion }) => {
    return (
        <li key={id} onClick={() => joinDiscussion(id, ProjectName)}>
            <div>
                <h2>{ProjectName}</h2>
            </div>
        </li>
    )
}
