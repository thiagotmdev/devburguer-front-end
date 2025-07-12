import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import stripePromise from '../../config/stripeConfig';
import CheckoutForm from "../../components/Stripe/CheckoutForm";



export function Checkout() {
    const {
        state: {clientSecret},
    } = useLocation();

    return (
        <Elements stripe={stripePromise} options={{clientSecret}}>
            <CheckoutForm/>
        </Elements>
    )
}