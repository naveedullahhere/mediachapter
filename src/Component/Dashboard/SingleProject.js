import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../context/AppContext';
import { useParams, Link } from 'react-router-dom';
import { Error } from '../Error';
import { Spinner } from '../Spinner';
import { Sidebar } from './Sidebar';
import { toast } from 'react-hot-toast';
import { StarRating } from './StarRating';

export const SingleProject = () => {

    const { URL, user } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsError] = useState(false);

    const params = useParams();
    const singleProject = params.singleProject;
    const [data, setData] = useState([]);
    const [reviewdata, setReviewData] = useState([]);

    const [Invoice, setInvoice] = useState([]);
    const [isInvoice, setIsInvoice] = useState(true);


    useEffect(() => {


        fetch(`${URL}api/feedback-get?project_id=${singleProject}`)
            .then(res => res.json())
            .then(json => {
                if (json.success != false) {
                    console.log(json);
                    setReviewData([...reviewdata, json])
                } else {
                    toast.error("Something went wrong!");
                }
                setIsLoading(false);
            }).catch((err) => {
                setIsLoading(false);
                toast.error("Something went wrong!");
            });

        fetch(`${URL}api/single-project/${singleProject}?token=${user.data.user_token}`)
            .then((response) => response.json())
            .then((actualData) => { setData(actualData.data); setIsLoading(false); })
            .catch((err) => {
                setIsError(true);
                setIsLoading(false);
                setData([]);
                toast.error("Something went wrong!");
            });

        fetch(`${URL}api/invoice/${user.data.user_token}?project_id=${singleProject}`)
            .then((response) => response.json())
            .then((actualData) => { setInvoice(actualData); actualData.length === 0 ? setIsInvoice(false) : setIsInvoice(true) })
            .catch((err) => {
                setInvoice([]);
                setIsError(true);
                setIsLoading(false);
                toast.error("Something went wrong!");
            })

    }, []);


    const review = useRef(null);

    const [rating, setRating] = useState(3);

    const handleChange = (value) => {
        setRating(value);
    }
    console.log(reviewdata);
    const handleReview = () => {
        fetch(`${URL}api/feedback-post`,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id: user.data.id, project_id: singleProject, rating: rating, review: review.current.value })
            }
        )
            .then(res => res.json())
            .then(json => {
                if (json.success != false) {
                    if (json) {
                        toast.success("Review Submitted! 😊");
                        setReviewData([...reviewdata, json])
                    }
                    else {
                    }
                } else {
                    toast.error("Something went wrong!");
                }
                setIsLoading(false);
            }).catch((err) => {
                setIsLoading(false);
                toast.error("Something went wrong!");
            });
    }


    return (
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-2"><Sidebar pageid={'projects'} /></div>
                <div className="col-xl-9 col-lg-9 col-md-8 col-10 py-md-0 py-4 projects ps-md-0" >

                    {isLoading &&
                        <Spinner />
                    }
                    {data.id || Invoice.length != 0 ? <>
                        <div className="row w-100 mx-auto">
                            <div className="col-12">
                                <h2 className="fs-3 heading text-start p-0">
                                    Project Details
                                </h2>
                            </div>
                            {data.id &&

                                <div div className="col-12">
                                    <div className="d-flex gap-3 align-items-md-center flex-sm-row flex-column">
                                        <h1 className="heading mb-0 fs-md-4 fs-5 fw-normal">Project Name: <span className="fw-bold"> {data.name}</span></h1>
                                        <p className="para-sm mb-0 text-start d-sm-none text-muted" dangerouslySetInnerHTML={{ __html: data.description }}></p>

                                        <span class={`badge mb-sm-0 w-auto mb-3 text-bg-${data.status === "0" ? "warning" : data.status === "1" ? "info" : data.status === "2" ? "success" : "danger"}`}>
                                            {
                                                data.status === "0" ? "Pending" : data.status === "1" ? "Process" : data.status === "2" ? "Completed" : "Cancelled"
                                            }
                                        </span>

                                    </div>
                                    <p className="para-sm d-sm-block d-none text-muted" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                                </div>
                            }
                        </div>

                        {isErr &&
                            <Error />
                        }

                        <div className="row w-100 mx-auto">
                            <div className="col-12">


                                <div class="card mb-4">
                                    <div class="card-body">
                                        <p className="fs-4 heading">Invoices</p>
                                        <table class="table table-hover">
                                            <thead class="mdb-color darken-3">
                                                <tr className='text-white'>
                                                    <th>#</th>
                                                    <th>Invoice Number</th>
                                                    <th>Project Name</th>
                                                    <th>Created By</th>
                                                    <th>Issue Date</th>
                                                    <th>Due Date</th>
                                                    <th>Amount</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            {isInvoice
                                                &&
                                                <tbody>
                                                    {Invoice.map((item, index) => {
                                                        return <tr>
                                                            <th scope='row'>{index + 1}</th>
                                                            <td><Link to={`/invoices/${item.id}`}>{item.invoice_number}</Link></td>
                                                            <td>{item.project_name}</td>
                                                            <td>{item.creator_name}</td>
                                                            <td>{item.issue_date}</td>
                                                            <td>{item.due_date}</td>
                                                            <td>$ {item.total}</td>
                                                            <td>{!parseInt(item.payment_status) ? <span class="badge text-bg-warning">Unpaid</span> : <span class="badge text-bg-success">Paid</span>}</td>
                                                        </tr>
                                                    })}
                                                </tbody>
                                            }
                                        </table>
                                        {!isInvoice && <div className="col-12">
                                            <h1 className="heading fs-3">No Invoices found!</h1>
                                        </div>}
                                    </div>
                                </div>
                            </div>



                        </div>
                    </> : ""}
                    {data.status === "2" &&
                        <div className="row w-100 mx-auto review pe-md-4">
                            <div className="col-12 pb-3">
                                {reviewdata && reviewdata.flat().map((item) => {
                                    return <div className="review-box d-flex justify-content-between align-items-center my-2">
                                        <p className="para-sm mb-0 w-75">
                                            {item.review}
                                        </p>
                                        <div className="starzz d-flex">
                                            {(() => {
                                                let rows = [];
                                                for (let i = 0; i < item.rating; i++) {
                                                    rows.push(i);
                                                }
                                                return rows.map((item) => {
                                                    return <span key={item} className={"star d-flex justify-content-center align-items-center"} style={{ color: "#fff", width: 24, height: 24, fontSize: 24 }} >🟊</span>
                                                })
                                            })()}
                                        </div>
                                    </div>
                                })}
                            </div>
                            <div className="col-12">
                                {!reviewdata.flat().length
                                    &&
                                    <div class="wrapper mx-auto pt-3">
                                        <div >

                                            <StarRating
                                                count={5}
                                                size={40}
                                                value={rating}
                                                activeColor={'var(--primary)'}
                                                inactiveColor={'#ddd'}
                                                onChange={handleChange} />
                                            <textarea id='revieww' name="opinion" cols="30" rows="5" placeholder="Your review..." ref={review}></textarea>
                                            <div class="btn-group">
                                                <button type="submit" class="btn submit" onClick={handleReview}>Submit</button>
                                                <button class="btn cancel">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                    }
                </div>
            </div>
        </div >
    )
}
