import React, { useState } from 'react'
import { MarkPrice, SignInButton } from '../styled/styledComponents';

//Material UI
import { makeStyles, Typography } from '@material-ui/core';
import Sidebar from './Sidebar';

const Product = ({item}) => {

  const classes = useStyles();

  const [showSidebar, setShowSidebar] = useState([]);
  const [modal, setModal] = useState(false);

  const editarModal = (productItem) => {
    console.log('setShowModal', productItem.nombre);
    setModal(true);
    console.log('MODAL', modal);
    if(!modal) {
      setModal(true);
      setShowSidebar(productItem);
    } else {
      setModal(false);
      setShowSidebar([]);
    }
  }

  return (
    <div className={classes.product}>
        <img onClick={() => editarModal(item)} className={classes.product__image} src={item.image__front}/>
        <div className={classes.product__content}>
        <Typography variant='body' className={classes.product__title}>{item.nombre}</Typography>
        <MarkPrice>${item.precio}</MarkPrice>
        </div>

        {
          modal === true ? <Sidebar modalSidebar={showSidebar}  modalBoolean={modal}/> : ''
        }
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  product: {
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '4px',
    padding: theme.spacing(1),
    '&:hover': {
      boxShadow: ' 6px 6px 22px #b1b1b1, -6px -6px 22px #ffffff;'

    }
  },
  product__image: {
    width: '100%',
    height: '240px',
    objectFit: 'content'
  },
  product__content: {
    padding: theme.spacing(1.2),
    height: '100px'
  }
}))

export default Product