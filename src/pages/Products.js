import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listAsync } from '../redux/actions/actionProducts';
import Product from '../components/Product';

//Material UI
import { makeStyles, Typography } from '@material-ui/core';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import { CustomAlert, SignUpButton } from '../styled/styledComponents';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const WithoutProducts = () => {
  const navigate = useNavigate();
  return (
    <CustomAlert>
        <MoodBadIcon></MoodBadIcon>
        <Typography>LO SENTIMOS</Typography>
        <Typography>No tenemos productos agregados a está categoría</Typography>
        <SignUpButton onClick={() => navigate('/order')}>Agrega un producto</SignUpButton>
    </CustomAlert>
  )
}

const Products = () => {
  const classes = useStyles();
  const { products } = useSelector(store => store.products);
  const [selected, setSelected] = useState('otros');

  const dispatch = useDispatch();

  const datosFiltrados = products.filter(item => item.categoria === selected);


  useEffect(() => {
    dispatch(listAsync());
  }, []);

 

  return (
  
    <div className={classes.products}>
        <div className={classes.products__content}>
            <h2>TRENDING PRODUCTS</h2>
            <div className={classes.products__contentFlex}>
              <h4 className={classes.products__option} onClick={() => setSelected('otros')}>OTROS</h4>
              <h4 className={classes.products__option} onClick={() => setSelected('camaras')}>CÁMARAS</h4>
              <h4 className={classes.products__option} onClick={() => setSelected('games')}>VIDEO JUEGOS</h4>
            </div>
        </div>
    
        
        {/*  */}
        {datosFiltrados.length === 0?
         <WithoutProducts /> :
         <div className={classes.products__container}>
           { datosFiltrados.map((item, index) => (
            <Product key={index} item={item} />
           ))}
         </div>
        }
        {/*  */}
       
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    products: {
      width: '100%',
      minHeight: '100vh',
      padding: '2rem 0',
      position: 'relative'
    },
    products__container: {
      width: '94%',
      margin: '4rem auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: 'auto',
      gap: theme.spacing(4)
    },
    products__content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    products__contentFlex: {
      display: 'flex',
      gap: theme.spacing(6),
      margin: '1.4rem 0',
      textAlign: 'center',
    },
    products__option: {
      fontWeight: '400',
      color: '#666',
      cursor: 'pointer',
    }
}))

export default Products