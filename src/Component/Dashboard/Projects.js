
import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { Sidebar } from './Sidebar'
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

export const Projects = () => {
    const { isUserLogin, projects } = useContext(AppContext);
    let navigate = useNavigate();
    isUserLogin === false && navigate('/login');
    useEffect(() => {
        return () => {
            isUserLogin === false && navigate('/login');
        }
    }, [isUserLogin]);

    console.log(projects);

    // api/single-project/7?token=16717102059769445745720221222
    return (
        <div>
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-xl-2 col-lg-3 col-md-4 col-12"><Sidebar pageid={'projects'} /></div>
                    <motion.div className="col-xl-10 col-lg-9 col-md-8 col-12" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} exit={{ transition: { duration: 0.3 }, opacity: 0, x: 100 }}>
                        <div className='py-5'>
                            <div className="row w-100 mx-auto">

                                {projects.lenth != 0
                                    ?
                                    projects.map((item) => {
                                        return <div className="col-lg-3 col-md-3 col-6">
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

                                    :
                                    "No Projects Found!"}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
