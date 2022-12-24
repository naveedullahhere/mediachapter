
import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { Sidebar } from './Sidebar'
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from '../Spinner';
import { Error } from '../Error';

export const Projects = () => {
    const { user, URL } = useContext(AppContext);
    const [projects, setProjects] = useState([]);
    const [isProjects, setIsProjects] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsError] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = () => {
        fetch(`${URL}api/project/${user.data.user_token}`)
            .then((response) => response.json())
            .then((actualData) => { setProjects(actualData); setIsLoading(false); actualData.length === 0 ? setIsProjects(false) : setIsProjects(true) })
            .catch((err) => {
                setProjects([]);
                setIsError(true);
                setIsLoading(false);
            })
    }
    return (
        <div>
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-2"><Sidebar pageid={'projects'} /></div>

                    <div className="col-xl-9 col-lg-9 col-md-8 col-10" >
                        <div className='py-md-5 py-3'>
                            <div className="row w-100 mx-auto">
                                {isLoading &&
                                    <Spinner />
                                }
                                {isErr &&
                                    <Error />
                                }
                                {isProjects
                                    &&
                                    projects.map((item) => {
                                        return <div className="col-xl-3 col-lg-4 col-md-6 col-12 my-3">
                                            <div className="card py-2 project-cards position-relative">
                                                <div className="card-body py-0">
                                                    <h5 className="heading fs-5 mb-0">{item.name}</h5>
                                                    <p className="para-sm text-muted card-description mb-0" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                                </div>
                                                <span class={`position-absolute top-0 start-100 project-badge badge rounded-pill bg-${item.status === "0" ? "warning" : item.status === "1" ? "info" : item.status === "2" ? "success" : "danger"}`}>
                                                    {
                                                        item.status === "0" ? "Pending" : item.status === "1" ? "Process" : item.status === "2" ? "Completed" : "Cancelled"
                                                    }
                                                </span>
                                                <div className='text-center'>
                                                    <Link to={`/projects/${item.id}`} className="mb-3 w-auto btn btn-main">View Detail ↗</Link>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                                {!isProjects && <div className="col-12">
                                    <h1 className="heading fs-3">No projects found!</h1>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
