import React from 'react'
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../selectors/getCartTotal";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

//Material UI
import { makeStyles } from '@material-ui/core';
import { SignInButton } from '../styled/styledComponents';

const Subtotal = () => {
  const classes = useStyles();

  const navigate = useNavigate();
  const { cart } = useSelector(store => store.cart);

  return (
    <div className={classes.subtotal}>
        <CurrencyFormat 
        renderText={(value) => (
            <>
              <p>
                  Subtotal ({cart.length} items): <strong>{ value }</strong>
              </p>  
              <small className={classes.subtotal__gift}>
                    <input 
                    type='checkbox'
                    />
                    This order contains a gift
              </small>
            </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} // Calculate total cart
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />

        <SignInButton onClick={e => navigate('/payment')}>Proceed to Checkout</SignInButton>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    subtotal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '300px',
        height: '100px',
        padding: theme.spacing(2),
        backgroundColor: '#f3f3f3',
        border: '1px solid #dddd',
        borderRadius: '3px'
    },
}))

export default Subtotal