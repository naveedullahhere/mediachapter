import { useContext, useState, useEffect, useRef } from 'react'
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Invoice } from './Invoice';
import $ from "jquery";
import ReactToPrint from 'react-to-print';

import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { Spinner } from '../Spinner';
import { PaypalCheckoutButton } from '../Payment/PaypalCheckoutButton';
import { Error } from '../Error';

export const SingleInvoice = () => {
    const params = useParams();
    const singleInvoice = params.singleInvoice;


    const { URL, user } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsError] = useState(false);
    const [isPay, setIsPay] = useState(false);

    const [data, setData] = useState([]);
    const [media, setMedia] = useState("");
    const [company, setCompany] = useState([]);
    const [invoiceData, setInvoiceItems] = useState([]);


    useEffect(() => {
        fetch(`${URL}api/single-invoice/${singleInvoice}?token=${user.data.user_token}`)
            .then((response) => response.json())
            .then((actualData) => { setData(actualData.invoice); setCompany(actualData.company); setMedia(actualData.media_path); setInvoiceItems(actualData.invoice_items); setIsLoading(false); })
            .catch((err) => {
                setIsError(true);
                setIsLoading(false);
                setData([]);
                setInvoiceItems([]);
                console.log("err");
            });
    }, []);
    const isPayable = () => {
        setIsPay(!isPay);
    };

    const reportTemplateRef = useRef(null);

    const downloadInvoice = (el) => {
        // const input = document.getElementById('divToPrint'); 
        // const doc = new jsPDF({
        //     format: 'a4',
        //     unit: 'px',
        // });  

        // doc.html(reportTemplateRef.current, {
        //     async callback(doc) {
        //         await doc.save('document');
        //         console.log(doc);
        //     },
        // });

        var restorepage = $('body').html();
        var printcontent = $('#' + el).clone();
        $('body').empty().html(printcontent);
        window.print();
        $('body').html(restorepage);


    }
    const componentRef = useRef();

    const product = {
        invoice_number: data.id,
        price: 1,
    }
    return (
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-2"><Sidebar pageid={'invoice'} /></div>

                <div className="col-xl-9 col-lg-9 col-md-8 col-10 py-md-0 py-4  " >
                    <div className="row">
                        {data.payment_status || invoiceData.length != 0 ?

                            <div className='col-12'>

                                <div className="headrr d-flex justify-content-between align-items-center flex-md-row flex-column">

                                    <h1 className="heading fs-4 my-4">
                                        Due Data:  <span className="text-success">{data.due_date}</span>
                                    </h1>
                                    <div className="inviz d-flex gap-3">

                                        <button className={`btn btn-${!parseInt(data.payment_status) ? "warning" : "success"}`} disabled >{!parseInt(data.payment_status) ? "Unpaid" : "Paid"}</button>
                                        {!parseInt(data.payment_status) &&
                                            <div className="payInvoice" id='payInvoice'>

                                                <button className="btn btn-main" onClick={isPayable}>Pay Invoice</button>

                                            </div>
                                        }

                                        <ReactToPrint
                                            trigger={() => <button className="btn btn-main" >Download Invoice</button>}
                                            content={() => componentRef.current}
                                        />

                                    </div>
                                    {isPay &&
                                        <div id='togglerBtnPaypal' className="togglerBtnPaypal my-3">
                                            <PaypalCheckoutButton product={product} />
                                        </div>
                                    }

                                </div>

                                <div className='invoiceParent projects'>

                                    <Invoice company={company} data={data} invoiceData={invoiceData} raf={componentRef} media={media} />

                                </div >
                            </div>
                            : ""}
                        {isLoading &&
                            <Spinner />
                        }
                        {isErr &&
                            <Error />
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
