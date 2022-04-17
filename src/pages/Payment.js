import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from '../components/CheckoutProduct';
import { getCartTotal } from '../selectors/getCartTotal';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';

//Material UI
import { makeStyles } from '@material-ui/core';

const Payment = () => {
    const classes = useStyles();

    const [user, setUser] = useState(null);
    const { cart } = useSelector(store => store.cart);
    const navigate = useNavigate();


    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // get user from firebase auth
        const auth = getAuth().currentUser;
        setUser(auth);
        
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url:  `./payments/create?total=${getCartTotal(cart) * 100}`
            })
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [cart])

    const handleSubmit = async (e) => {
        // do all the fancy stripe stuff...
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            navigate('/orders');
            
        })
    }

    const handleChange = e => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(e.empty);
        setError(e.error? e.error.message : "");
    }

  return (
    <div className={classes.payment}>
        <div className={classes.payment__container}>
            <h1>Checkout ({<Link to="/checkout">{cart?.length} items</Link>})</h1>
            {/* Payment section - delivery address */}
                <div className={classes.payment__section}>
                    <div className={classes.payment__title}>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className={classes.payment__address}>
                           <p>{user?.email}</p>
                           <p>123 React Lane</p>
                           <p>Los Angeles, CA</p>
                    </div>
                </div>
            {/* Payment section - Review Items */}
                <div className={classes.payment__section}>
                    <h3>Review items and delivery</h3>

                </div>
                <div className={classes.payment__items}>
                    {/*  */}
                    {cart.map(item => (
                        <CheckoutProduct 
                        id={item.codigo}
                        nombre={item.nombre}
                        image={item.image__front}
                        precio={item.precio}
                        />
                    ))}
                </div>
            {/* Payment section - Payment method */}
            <div className={classes.payment__section}>
                <div className={classes.payment__title}>
                    <h3>Payment Method</h3>
                </div>
                <div className={classes.payment__details}>
                    {/* Stripe magic will go */}
                    <form onSubmit={handleSubmit}>
                        <CardElement 
                        onChange={handleChange}
                        />
                        <div className={classes.payment__priceContainer}>
                            <CurrencyFormat 
                            renderText={(value) => (
                                <>
                                <h3>Order Total: {value}</h3>
                                </>
                            )}
                            decimalScale={2}
                            value={getCartTotal(cart)}
                             //Part of the homework
                             displayType={"text"}
                             thousandSeparator={true}
                             prefix={'$'}
                            />
                            <button disabled={ processing || disabled || succeeded}>
                                <span>
                                    {processing ? <p>Processing</p> : "Buy Now"}
                                </span>
                            </button>
                        </div>
                        {/* Errors */}
                        {error && <div>{error}</div>}
                    </form>

                </div>
            </div>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    payment: {
        backgroundColor: 'white'
    },
    payment__container: {

    '& h1': {
    textAlign: 'center',
    padding: theme.spacing(1),
    fontWeight: '400',
    backgroundColor: 'rgb(234,237,237)',
    borderBottom: '1px solid lightgray',
    '& a':{
        textDecoration: 'none'
        }
    }
    },
    payment__section: {
        display: 'flex',
        padding: '20px',
        margin: '0 20px',
        borderBottom: '1px solid lightgray'
    },
    payment__title: {
        flex: '0.2'
    },
    payment__address: {
        flex: '0.8'
    },
    payment__details: {
        flex: '0.8'
    },
    payment__items: {
        flex: '0.8'
    }
    
}))

export default Payment