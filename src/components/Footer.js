import React from 'react';
import logo from '../assets/logo-amazon.png';

//Material UI
import { makeStyles } from '@material-ui/core';
import { TypographyStyled } from '../styled/styledComponents';
import { Link } from 'react-router-dom';

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.footer__container}>
            <div className={classes.footer__box}>
              <h4>Conócenos</h4>
              <TypographyStyled>Trabajar en Amazon</TypographyStyled>
              <TypographyStyled>Información corporativa</TypographyStyled>
              <TypographyStyled>Departamento de prensa</TypographyStyled>
            </div>
            <div className={classes.footer__box}>
              <h4>Gana dinero con nosotros</h4>
              <TypographyStyled>Vender en Amazon</TypographyStyled>
              <TypographyStyled>Vender en Amazon Handmade</TypographyStyled>
              <TypographyStyled>Publica tu libro en Kindle</TypographyStyled>
              <TypographyStyled>Programa de afiliados</TypographyStyled>
              <TypographyStyled>Anuncia tus productos</TypographyStyled>

            </div>
            <div className={classes.footer__box}>
              <h4>Podemos ayudarte</h4>
              <TypographyStyled>Amazon y COVID-19</TypographyStyled>
              <TypographyStyled>Devolver o reemplazar productos</TypographyStyled>
              <TypographyStyled>Gestionar contenido y dispositivos</TypographyStyled>
              <TypographyStyled>Ayuda</TypographyStyled>
            </div>
            <div className={classes.footer__box}>
              <h4>Métodos de pago</h4>
              <TypographyStyled>Tarjetas de crédito y débito</TypographyStyled>
              <TypographyStyled>Tarjetas de regalo</TypographyStyled>
              <TypographyStyled>Meses sin intereses</TypographyStyled>
              <TypographyStyled>Amazon Crash</TypographyStyled>
              <TypographyStyled>Amazon Recargable</TypographyStyled>
            </div>
        </div>
        <div className={classes.footer__logo}>
          <Link to='/'>
            <img className={classes.footer__logoImage} src={logo} alt='Logo'/>
          </Link>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%', 
        padding: theme.spacing(6),
        backgroundColor: '#131921'
    },
    footer__container: {
      width: '90%',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    footer__box: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      '& h4': {
        color: '#F8F8F8',
        fontWeight: 500

      },
      '& p': {
        color: '#F8F8F8'
      }
    },
    footer__logo: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    footer__logoImage: {
      marginTop: theme.spacing(2.8),
      width: '100px'
    }
}));

export default Footer;