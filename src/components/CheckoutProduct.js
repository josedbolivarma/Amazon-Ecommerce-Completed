import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteSyncFromCart } from '../redux/actions/actionShoppingCart';
import { MarkPrice, SignUpButton } from '../styled/styledComponents';

//Material UI
import { makeStyles } from '@material-ui/core';

const CheckoutProduct = ({ id, image, nombre ,precio }) => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(deleteSyncFromCart(id));
  }

  return (
    <div className={classes.checkoutProduct}>
       <img 
       className={classes.checkoutProduct__image}
       src={image}
       alt='Checkout Product'
       />

       <div className={classes.checkoutProduct__info}>
       <p className={classes.checkoutProduct__title}>
         { nombre }
       </p>
       <p className={classes.checkoutProduct__price}>
          <MarkPrice>${ precio }</MarkPrice>
       </p>

       <SignUpButton onClick={removeFromCart}>Remove from Cart</SignUpButton>
       </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  checkoutProduct: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  checkoutProduct__info: {
    paddingLeft: theme.spacing(2),
    width: '50%'
  },
  checkoutProduct__image: {
    objectFit: 'contain',
    width: '180px',
    height: '180px'
  },
  checkoutProduct__title: {
    fontSize: '17px',
    fontWeight: '700',
    marginBottom: theme.spacing(1)
  },
  checkoutProduct__price: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }
}))

export default CheckoutProduct