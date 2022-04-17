import React, { useEffect, useState } from 'react'

// Material UI
import { makeStyles, Typography } from "@material-ui/core";
import { LinkRedirect, MarkPrice, SignInButton, SignUpButton, TypographyStyled } from '../styled/styledComponents';
import { useDispatch, useSelector } from 'react-redux';
import { addSyncToCart } from '../redux/actions/actionShoppingCart';
import ReactImageMagnify from 'react-image-magnify';

const DetailsContainer = () => {
  const classes = useStyles();

  const { modal } = useSelector(store => store.modal);

  const dispatch = useDispatch();
  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(modal.image__front);
  }, [modal])

  const addToCart = (productCart) => {
        dispatch(addSyncToCart(productCart));
  }
  

  return (
    <div className={classes.root}>
        <div className={classes.card__options}>
            <img onMouseEnter={() => setImage(modal.image__front)} className={classes.card__optionImage} src={modal.image__front} alt='front'/>
            <img onMouseEnter={() => setImage(modal.image__lateral)} className={classes.card__optionImage} src={modal.image__lateral} alt='lateral'/>
            <img onMouseEnter={() => setImage(modal.image__back)} className={classes.card__optionImage} src={modal.image__back} alt='back'/>
        </div>
        {/* Card Detail */}
        <div>
            <div className={classes.card__detail}>
                <ReactImageMagnify className={classes.card__detailImage} {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: image
                                        },
                                        largeImage: {
                                            src: image,
                                            width: 800,
                                            height: 1200
                                        },
                                        
                                    }} />
            </div>
        </div>
        {/* Card Detail */}
        



        
        {/* Card Info */}
        <div className={classes.card__info}>
            <div>
                <h3>{modal.nombre}</h3>
                <LinkRedirect to='/'>Marca: Canon</LinkRedirect>
            </div>
            <TypographyStyled variant='body2' component='h2' className={classes.flexText}>
                <span>
                    Precio: 
                </span>
                <MarkPrice>${modal.precio}</MarkPrice>
                <p><b>Envio GRATIS.</b></p>
                <LinkRedirect to='/'>Detalles</LinkRedirect>
            </TypographyStyled>
            <TypographyStyled component='h2' variant='body2'>
                Hasta 
                <b> 18 meses sin intereses </b>
                de $5.592.76.
                <LinkRedirect to='/'>
                    {' '}Ver Mensualidades
                </LinkRedirect>
            </TypographyStyled>
            <TypographyStyled component='h2' variant='body2'>
                <LinkRedirect to='/'>
                    Solicita tu tarjeta Amazon Recargable {' '}
                </LinkRedirect>
                y obten $100 de descuento en tu primera compra mayor a $500
            </TypographyStyled>
            <TypographyStyled variant='body2'>
                Precio: <b>Negro</b>
            </TypographyStyled>
            <TypographyStyled variant='body2'>
                Estilo: <b>24-105mm USM Kit</b>
            </TypographyStyled>
            <Typography variant='body1' mb='2'>
                <b>Acerca de este artículo</b>
            </Typography>
            <div className='classes.list'>
            <TypographyStyled variant='body2'>
                - Alta calidad de imagen con un nuevo
                sensor CMOS de marco completo de 20 megapixeles.
            </TypographyStyled>
            <TypographyStyled variant='body2'>
                - Alta calidad de imagen con un nuevo
                sensor CMOS de marco completo de 20 megapixeles.
            </TypographyStyled>
            <TypographyStyled variant='body2'>
                - Alta calidad de imagen con un nuevo
                sensor CMOS de marco completo de 20 megapixeles.
            </TypographyStyled>
            <TypographyStyled variant='body2'>
                - Alta calidad de imagen con un nuevo
                sensor CMOS de marco completo de 20 megapixeles.
            </TypographyStyled>
            </div>
        </div>
        {/* Card Info */}

        {/* Pay Info */}
        <div className={classes.pay__info}>
                <MarkPrice>${modal.precio}</MarkPrice>
                <TypographyStyled><b>Envio GRATIS</b>. </TypographyStyled>
                <TypographyStyled>Llega: <b>dic 15 - 28</b></TypographyStyled>
                <TypographyStyled>Puede que los recibas después de Navidad</TypographyStyled>
                <div className={classes.pay__infoButtons}>
                <SignInButton type='button' onClick={() => addToCart(modal)}>Agregar al Carrito</SignInButton>
                <SignUpButton type='button'>Comprar ahora</SignUpButton>
                </div>
                <LinkRedirect to='/'>Transacción segura</LinkRedirect>
        </div>
        {/* Pay Info */}

    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '98%',
        margin: '0 auto',
        height: '600px',
        display: 'grid',
        gridTemplateColumns: '60px 1.5fr 1.5fr .8fr',
        gap: theme.spacing(2),
        overflowY: 'hidden',
        marginBottom: theme.spacing(2)
    },
    flexText: {
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
    },
    card__options: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(.4),
        zIndex: 100
    },
    card__optionImage: {
        width: '60px',
        height: '60px',
        border: '1px solid #c4c4c4',
        cursor: 'pointer',
        objectFit: 'content'
    },

    card__detail: {
        width: '100%',
        maxHeight: '480px',
    },
    card__detailImage: {
        width: '100%',
        maxHeight: '480px',
        objectFit: 'content',
       overflowY: 'visible'  
    },

    card__info: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    pay__info: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(1),
        border: '1px solid #CCC',
        height: '60%',
        gap: theme.spacing(.8)
    },
    pay__infoButtons: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(.4)
    }

}));

export default DetailsContainer