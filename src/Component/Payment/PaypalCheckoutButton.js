import toast from "react-hot-toast";
import { useContext } from 'react'
import { PayPalButtons } from "@paypal/react-paypal-js";
import { AppContext } from '../../context/AppContext';

export const PaypalCheckoutButton = ({ product }) => {

    const { URL } = useContext(AppContext);

    const handleApprove = (data, order) => {

        console.log("Approved");

        const dataz = { payment_id: order.purchase_units[0].payments.captures[0].id, payment_link: "http", invoice_id: product.invoice_number }

        fetch(`${URL}api/invoicepay`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataz)
        })
            .then((response) => response.json())
            .then((actualData) => { console.log(actualData); })
            .catch((err) => {
                console.log(err);
                toast.error("Something went wrong!");
            });


    }

    return (

        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: product.invoice_number,
                            amount: {
                                value: product.price
                            }
                        }
                    ]
                })
            }}


            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                handleApprove(data, order);
                toast.success("Transaction Successfully");
            }}
            onError={(err) => {
                // toast.error(err);
                console.log(err);
            }}
            onCancel={() => {
                console.log("caas");
                toast.error("You Cancelled The Payment");
            }}
        />

    )
}
