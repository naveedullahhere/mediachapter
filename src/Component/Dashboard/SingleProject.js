import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';

export const SingleProject = () => {

    const { URL, userId } = useContext(AppContext);
    const params = useParams();
    const [data, setData] = useState([]);
    const [img, setImg] = useState(null);
    const singleProject = params.singleProject;


    useEffect(() => {
        fetch(`${URL}api/single-project/${singleProject}?token=${userId}`)
            .then((response) => response.json())
            .then((actualData) => { console.log(actualData); })
            .catch((err) => {
                setData([]);
            });
    }, []);

    return (
        <div>{singleProject}</div>
    )
}
