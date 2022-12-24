import { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../context/AppContext';
import { useParams } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Invoice } from './Invoice';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

export const SingleInvoice = () => {
    const params = useParams();
    const singleInvoice = params.singleInvoice;


    const { URL, user } = useContext(AppContext);
    const [isLoading, setIsLoading] = useState(true);
    const [isErr, setIsError] = useState(false);

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
            });
    }, []);

    const downloadInvoice = () => {
        const input = document.getElementById('divToPrint');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save("download.pdf");
            })

    }
    const payInvoice = () => {

        fetch(`${URL}api/pay-invoice`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "invoice_id": singleInvoice }),
        })
            .then((response) => response.json())
            .then((actualData) => { console.log(actualData); })
            .catch((err) => {
                setIsError(true);
                setIsLoading(false);
                setData([]);
                setInvoiceItems([]);
            });
    }
    return (
        <div className="container-fluid px-0">
            <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-4 col-2"><Sidebar pageid={'invoice'} /></div>

                <div className="col-xl-9 col-lg-9 col-md-8 col-10 py-md-0 py-4  " >
                    <div className="row">

                        <div className='col-12'>

                            <div className="headrr d-flex justify-content-between align-items-center flex-md-row flex-column">

                                <h1 className="heading fs-4 my-4">
                                    Due Data:  <span className="text-success">{data.due_date}</span>
                                </h1>
                                <div className="inviz d-flex gap-3">

                                    <button className={`btn btn-${!parseInt(data.payment_status) ? "success" : "warning"}`} disabled={!parseInt(data.payment_status) && "true"} >{!parseInt(data.payment_status) ? "Paid" : "Unpaid"}</button>
                                    <button className="btn btn-main" onClick={payInvoice}>Pay Invoice</button>
                                    <button className="btn btn-main" onClick={downloadInvoice}>Download Invoice</button>
                                </div>

                            </div>
                            <div className='invoiceParent projects'>

                                <Invoice company={company} data={data} invoiceData={invoiceData} media={media} />

                            </div >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
