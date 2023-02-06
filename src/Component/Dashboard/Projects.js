
import React, { useState, useContext, useEffect, useRef } from 'react';
import { AppContext } from '../../context/AppContext';
import { Sidebar } from './Sidebar'
import $ from "jquery";
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from '../Spinner';
import { saveAs } from 'file-saver';

import toast from "react-hot-toast";
import { Error } from '../Error';

export const Projects = () => {
    const { user, URL } = useContext(AppContext);
    const [projects, setProjects] = useState([]);
    const [isProjects, setIsProjects] = useState(true);
    const [categories, setCategories] = useState([]);
    const [isCreatingProject, setCreatingProject] = useState(false);
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
                toast.error("Something went wrong!");
            })
    }

    const loadCategories = () => {
        fetch(`${URL}api/categories?type=project`)
            .then((response) => response.json())
            .then((actualData) => { setCategories(actualData); setIsCategLoading(false); })
            .catch((err) => {
                setCategories([]);
                setIsCategLoading(false);
                toast.error("Something went wrong!");
            })
    }

    const category = useRef();
    const isMin = useRef();
    const close = useRef(null);


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

    async function convertToBase64(e) {
        // var selectedFile = e.target["file"].files[0].file;
        // if (selectedFile.length > 0) {
        // var fileToLoad = selectedFile[0];
        // var fileReader = new FileReader();
        // var base64;
        // fileReader.onload = function (fileLoadedEvent) {
        //     base64 = fileLoadedEvent.target.result;
        //     console.log(base64);
        // };
        // fileReader.readAsDataURL(selectedFile);
        // } 
        return await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(e);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    var serializeForm = async function (form, e) {
        var obj = {};
        var formData = new FormData(form);
        var file = await convertToBase64(e.target["file"].files[0]);

        formData.delete('file');
        formData.append('file', file);


        // console.log(file);


        for (var key of formData.keys()) {
            obj[key] = formData.get(key);
        }

        // console.log(JSON.stringify(e.target["file"].files[0])); 
        return JSON.stringify(obj);
        return obj;

    };


    async function createProject(e) {
        e.preventDefault();
        if (grater) {
            return toast.error("Minimum Budget Greater Than : " + parseInt(category.current.selectedOptions[0].getAttribute('data-set')));
        }
        setCreatingProject(true);
        fetch(`${URL}api/create-project`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: await serializeForm(e.target, e)
        })
            .then(res => res.json())
            .then(json => {

                setCreatingProject(false);

                close.current.click()
                projects.push(json[0]);
                toast.success("Project Created Successfully");
                document.getElementById("formElem").reset();


            }).catch(err => {
                console.log(err);
                toast.error("Something went wrong!");
                setCreatingProject(false);
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
                                <div className="col-12 mb-3">
                                    <button className="btn btn-main" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={loadCategories}>Create Project</button>

                                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Create Project</h1>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                                </div>
                                                <form onSubmit={createProject} id="formElem" >
                                                    {isCategLoading ?
                                                        <Spinner />
                                                        :
                                                        <div class="modal-body">
                                                            <div className="my-3">

                                                                <input type="text" placeholder='Project Name' required name='name' className='input inp form-control text-dark' />

                                                            </div>

                                                            <div className="my-3">

                                                                <textarea type="text" placeholder='Project Description' name='description' required className='input inp form-control text-dark' ></textarea>

                                                            </div>

                                                            <div class="mb-3">
                                                                <select class="text-dark input inp" ref={category} onChange={selectChanged} name="category_id">
                                                                    <option selected hidden>Select Category</option>
                                                                    {categories.map((item) => {
                                                                        return <option data-set={item.min_budget} value={`${item.id}`}>{item.title}</option>
                                                                    })}
                                                                </select>
                                                            </div>

                                                            <div className="my-3">

                                                                <input type="number" ref={isMin} onChange={selectChanged} name="budget" placeholder='Minimum Budget' required className={`input inp form-control ${grater && "border-danger"} text-dark`} />
                                                                {grater &&
                                                                    <p>{isMinv}</p>
                                                                }

                                                            </div>

                                                            <div className="my-3">

                                                                <input type="file" name="file" placeholder='Choose File' required className='input inp form-control text-dark' />

                                                            </div>
                                                            <div className="my-3">

                                                                <input type="hidden" name="customer_id" value={user.data.id} />

                                                            </div>

                                                        </div>
                                                    }

                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" ref={close} data-bs-dismiss="modal">Close</button>
                                                        <button type="submit" class="btn btn-main" style={{ "width": "84px" }}>

                                                            {isCreatingProject ? <div class="spinner-border" role="status">
                                                                <span class="visually-hidden">Loading...</span>
                                                            </div> : "Submit"}

                                                        </button>
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
                                        return <div className="col-xl-3 col-lg-4 col-md-6 col-12 my-3" key={item.projects.id}>
                                            <div className="card py-2 project-cards position-relative">
                                                <div className="card-body py-0">
                                                    <h5 className="heading fs-5 mb-0">{item.projects.name}</h5>
                                                    <p className="para-sm text-muted card-description mb-0" dangerouslySetInnerHTML={{ __html: item.projects.description }}></p>
                                                </div>
                                                <span class={`position-absolute top-0 start-100 project-badge badge rounded-pill bg-${item.projects.status === "0" ? "warning" : item.projects.status === "1" ? "info" : item.projects.status === "2" ? "success" : "danger"}`}>
                                                    {
                                                        item.projects.status === "0" ? "Pending" : item.projects.status === "1" ? "Process" : item.projects.status === "2" ? "Completed" : "Cancelled"
                                                    }
                                                </span>
                                                <div className='text-center'>
                                                    <Link to={`/projects/${item.projects.id}`} className="mt-3 mb-2 w-auto btn btn-main">View Detail ↗</Link>
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
