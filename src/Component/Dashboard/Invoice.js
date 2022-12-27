import React from 'react'

export const Invoice = ({ company, data, invoiceData, media, raf }) => {
    return (
        <div className="mainInvoice shadow-sm" id="divToPrint" ref={raf}>
            <div className="head d-flex justify-content-between align-items-center">
                <a href={company.website} target={`_blank`}> <img src={`${media}/${company.logo}`} alt="invoice logo" /></a>
                <h1 className="text-main text-dark invoicee">
                    INVOICE
                </h1>
            </div>

            <div className="my-md-5 my-3">
                <p className="para-styled para-sm">
                    {company.name}
                </p>
                <p className="para-styled para-sm">
                    {company.address}
                </p>
                <a href={`mailto:${company.email}`} className="para-styled para-sm d-flex">
                    {company.email}
                </a>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <p className="para-sm para-styled">
                    Date: {data.issue_date}
                </p>
                <p className="para-sm para-styled">
                    Invoice Num: {data.invoice_number}
                </p>
                <p className="para-sm para-styled">
                    Project Name: {data.project_name}
                </p>
            </div>

            <table className='invoice-table w-100 my-md-4 my-2'>
                <thead>
                    <tr>
                        <th>DESCRIPTION</th>
                        <th>RATE</th>
                        <th>AMOUNT</th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceData && invoiceData.map((item) => {
                        return <tr>
                            <td>{item.description}</td>
                            <td>{item.quantity} x ${item.rate}</td>
                            <td>$ {parseInt(item.quantity) * item.rate}</td>
                        </tr>

                    })}
                </tbody>
            </table>
            <div className="d-flex justify-content-between tableTotal align-items-center">
                <p className="para-sm para-styled">
                    Total Amount:
                </p>
                <p className="para-sm para-styled">
                    $ {data.total}
                </p>
            </div>
            <div className="my-md-5 my-3">
                <p className="para-sm para-styled">
                    Payment Method: Direct Bank Transfer

                </p>
                <div className="invoice my-md-4 my-3">

                    <p className="para-sm para-styled fw-bolder">
                        Invoice Message

                    </p>
                    <p className="para-sm italic">
                        Another successful deliverable completed! we love working with you all. If you have any question,
                        don’t hesitate to ask.
                    </p>
                </div>
                <div className="regards">
                    <p className="para-sm text-styled mb-0">
                        Regards:
                    </p>
                    <p className="para-sm text-styled mb-2">
                        {data.regard_name}
                    </p>
                    <p className="para-sm italic">
                        {data.regard_about}
                    </p>
                </div>
            </div>

        </div>
    )
}
