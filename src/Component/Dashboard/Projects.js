
import React, { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../../context/AppContext';
import { Sidebar } from './Sidebar'
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from '../Spinner';
import toast from "react-hot-toast";
import { Error } from '../Error';

export const Projects = () => {
    const { user, URL } = useContext(AppContext);
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isProjects, setIsProjects] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsError] = useState(false);
    const [grater, setGrater] = useState(false);
    const [isMinv, setIsMin] = useState("");

    const [isCategLoading, setIsCategLoading] = useState(true);

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

    const loadCategories = () => {
        fetch(`${URL}api/categories?type=service`)
            .then((response) => response.json())
            .then((actualData) => { setCategories(actualData); setIsCategLoading(false); })
            .catch((err) => {
                setCategories([]);
                setIsCategLoading(false);
            })
    }

    const category = useRef();
    const isMin = useRef();


    const selectChanged = () => {
        if (parseInt(category.current.selectedOptions[0].getAttribute('data-set')) <= isMin.current.value) {
            setIsMin("Minimum Budget Must Grater Than : " + category.current.selectedOptions[0].getAttribute('data-set'));
            setGrater(false);
        }
        else {
            setGrater(true);
        }
    }
    const [file, setFile] = useState();

    function handleChange(event) {
        setFile(event.target.files[0]);
        var files = event.target.files;

        let reader = new FileReader;

        reader.onload = (e) => {
            console.log(e.target.result);
        }

        reader.readAsDataURL(files[0]);

    }

    const createProject = (e) => {
        e.preventDefault();

        if (grater) {
            return toast.error("Minimum Budget Greater Than : " + parseInt(category.current.selectedOptions[0].getAttribute('data-set')));
        }

        var data = {
            name: e.target.projectname.value,
            description: e.target.projectdescription.value,
            category_id: category.current.value,
            budget: isMin.current.value,
            category_id: user.data.user_token,
        }

        fetch(`${URL}api/create-project`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: data
        })
            .then(res => res.json())
            .then(json => {
                console.log(json);

            }).catch(err => {
                console.log(err);
            })

    }







    function openFile(evt) {
        let status = [];
        const fileObj = evt.target.files[0];
        const reader = new FileReader();


        let fileloaded = e => {
            const fileContents = e.target.result;
            status.push(`File name: "${fileObj.name}". ` +
                `Length: ${fileContents.length} bytes.`);
            const first80char = fileContents.substring(0, 80);
            status.push(`First 80 characters of the file:\n${first80char}`)
            console.log({ status: status.join("\n") });
        }
        fileloaded = fileloaded.bind(this);
        reader.onload = fileloaded;
        reader.readAsText(fileObj);
    }
    return (
        <div>
            <div className="container-fluid px-0">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-2"><Sidebar pageid={'projects'} /></div>

                    <div className="col-xl-9 col-lg-9 col-md-8 col-10" >
                        <div className='py-md-5 py-3'>
                            <div className="row w-100 mx-auto">
                                <div className="col-12 mb-3">
                                    <button className="btn btn-main" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={loadCategories}>Create Project</button>

                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Create Project</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                                </div>
                                                <form onSubmit={createProject}>
                                                    {isCategLoading ?
                                                        <Spinner />
                                                        :
                                                        <div class="modal-body">
                                                            <div className="my-3">

                                                                <input type="text" placeholder='Project Name' required name='projectname' className='input inp form-control text-dark' />

                                                            </div>

                                                            <div className="my-3">

                                                                <input type="text" placeholder='Project Description' name='projectdescription' required className='input inp form-control text-dark' />

                                                            </div>

                                                            <div class="mb-3">
                                                                <select class="text-dark input inp" ref={category} onChange={selectChanged} name="category">
                                                                    <option selected hidden>Select one</option>
                                                                    {categories.map((item) => {
                                                                        return <option data-set={item.min_budget} value={`${item.slug}`}>{item.title}</option>
                                                                    })}
                                                                </select>
                                                            </div>

                                                            <div className="my-3">

                                                                <input type="number" ref={isMin} onChange={selectChanged} placeholder='Minimum Budget' required className={`input inp form-control ${grater && "border-danger"} text-dark`} />
                                                                {grater &&
                                                                    <p>{isMinv}</p>
                                                                }

                                                            </div>

                                                            <div className="my-3">

                                                                <input type="file" onChange={evt => openFile(evt)} placeholder='Choose File' required className='input inp form-control text-dark' />

                                                            </div>

                                                        </div>
                                                    }

                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="submit" class="btn btn-main">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
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
            </div >
        </div >
    )
}
