import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { LinkRedirect, MarkPrice, TypographyStyled } from '../styled/styledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { listAsync } from '../redux/actions/actionProducts';
import { selectedModal } from '../redux/actions/actionModal';


const Gallery = ({categoria}) => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const { products } = useSelector(store => store.products);

    const filtrado = products.filter(item => item.categoria === categoria);

    const enviarDatosModal = (codigo) => {
        dispatch(selectedModal(codigo));
    }
    
    useEffect(() => {
      dispatch(listAsync());
    }, []);

  return (
    <div className={classes.root}>
        {
            filtrado.map((card) => (
        <div key={card.codigo} className={classes.gallery__box}>
            <img onClick={() => enviarDatosModal(card)} 
            className={classes.gallery__image} src={card.image__front} />
            <LinkRedirect to='/'>{card.nombre}</LinkRedirect>
            <MarkPrice>${card.precio}</MarkPrice>
        </div>
            ))
        }

        
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'no-wrap',
        gap: theme.spacing(8),
        overflowX: 'scroll'
    },
    gallery__box: {
        minWidth: '240px', 
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
    },
    gallery__image: {
        width: '100%',
        minHeight: '320px',
        maxHeight: '320px',
        objectFit: 'content',
        cursor: 'pointer'
        
    }
}));

export default Gallery