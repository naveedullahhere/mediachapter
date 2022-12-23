
import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { Sidebar } from './Sidebar'
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from '../Spinner';
import { Error } from '../Error';

export const Projects = () => {
    const { isUserLogin, getCookie, URL } = useContext(AppContext);
    let navigate = useNavigate();
    const [projects, setProjects] = useState([]);

    const [isProjects, setIsProjects] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsError] = useState(false);

    isUserLogin === false && navigate('/login');
    useEffect(() => {
        return () => {
            isUserLogin === false && navigate('/login');
            if (getCookie("USER")) {
                fetch(`${URL}api/project/${JSON.parse(getCookie("USER")).data.user_token}?status=`)
                    .then((response) => response.json())
                    .then((actualData) => { setProjects(actualData); setIsLoading(false); actualData.length === 0 && setIsProjects(true); })
                    .catch((err) => {
                        setProjects([]);
                        setIsError(true);
                        setIsLoading(false);
                    })
            }
        }
    }, [isUserLogin]);

    return (
        <div>
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-12"><Sidebar pageid={'projects'} /></div>
                    <motion.div className="col-xl-9 col-lg-9 col-md-8 col-12" initial={{ transition: { duration: 1 }, opacity: 0 }} animate={{ transition: { duration: 1 }, opacity: 1 }} exit={{ transition: { duration: 1 }, opacity: 0 }}>
                        <div className='py-5'>
                            <div className="row w-100 mx-auto">
                                {isLoading &&
                                    <Spinner />
                                }
                                {isErr &&
                                    <Error />
                                }
                                {isProjects &&
                                    <div className="col-12">
                                        <h1 className="heading fs-3">No Projects Found!</h1>
                                    </div>
                                }
                                {!isProjects
                                    &&
                                    projects.map((item) => {
                                        return <div className="col-lg-3 col-md-3 col-6 my-3">
                                            <div class="card py-2 project-cards position-relative">
                                                <div class="card-body py-0">
                                                    <h5 class="heading fs-5 mb-0">{item.name}</h5>
                                                    <p class="para-sm text-muted card-description mb-0" dangerouslySetInnerHTML={{ __html: item.description }}></p>
                                                </div>
                                                <span class={`position-absolute top-0 start-100 project-badge badge rounded-pill bg-${item.status === "0" ? "warning" : item.status === "1" ? "info" : item.status === "2" ? "success" : "danger"}`}>
                                                    {
                                                        item.status === "0" ? "Pending" : item.status === "1" ? "Process" : item.status === "2" ? "Completed" : "Cancelled"
                                                    }
                                                </span>
                                                <div className='text-center'>
                                                    <Link to={`/projects/${item.id}`} class="mb-3 btn btn-main">View Detail ↗</Link>
                                                </div>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
