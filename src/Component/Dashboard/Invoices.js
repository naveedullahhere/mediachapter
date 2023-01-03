
import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import { motion } from 'framer-motion';
import { Sidebar } from './Sidebar'
import { Link, useNavigate } from 'react-router-dom';
import { Error } from '../Error';
import { Spinner } from '../Spinner';
import { toast } from 'react-hot-toast';

export const Invoices = () => {
    const { user, URL } = useContext(AppContext);
    const [Invoice, setInvoice] = useState([]);
    const [isInvoice, setIsInvoice] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsError] = useState(false);

    useEffect(() => {
        fetchInvoice();
    }, []);

    const fetchInvoice = () => {
        fetch(`${URL}api/invoice/${user.data.user_token}`)
            .then((response) => response.json())
            .then((actualData) => { setInvoice(actualData); console.log(actualData); setIsLoading(false); actualData.length === 0 ? setIsInvoice(false) : setIsInvoice(true) })
            .catch((err) => {
                setInvoice([]);
                setIsError(true);
                setIsLoading(false);
                toast.error("Something went wrong!");
            })
    }

    console.log(isInvoice);
    console.log(Invoice);

    return (
        <div>
            <div className="container-fluid px-0 ">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-2"><Sidebar pageid={'invoice'} /></div>

                    <div className="col-xl-9 col-lg-9 col-md-8 col-10 projects py-md-4 py-3" >

                        <div className="row w-100 mx-auto">
                            <div className="col-12">


                                {isErr &&
                                    <Error />
                                }

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
                                            {!isInvoice && <div className="row">
                                                <div className="col-12">

                                                    <h1 className="heading fs-3 mb-0 mt-4">No Invoices yet!</h1>

                                                </div>
                                            </div>}

                                        </table>
                                        {isLoading &&
                                            <Spinner />
                                        }

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
