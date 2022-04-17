import React from 'react'

// Material UI
import { makeStyles } from '@material-ui/core';
import DehazeIcon from '@material-ui/icons/Dehaze';

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.navbar__box}>
            <DehazeIcon />
            <span>List</span>
        </div>
        <div className={classes.navbar__box}>
            <span>Tarjetas de regalo</span>
        </div>
        <div className={classes.navbar__box}>
            <span>Prime</span>
        </div>
        <div className={classes.navbar__box}>
            <span>Los Más Vendidos</span>
        </div>
        <div className={classes.navbar__box}>
            <span>AmazonBasics</span>
        </div>
        <div className={classes.navbar__box}>
            <span>Cómputo y Tabletas</span>
        </div>
        <div className={classes.navbar__box}>
            <span>Los Más Regalados</span>
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        padding: theme.spacing(1),
        backgroundColor: '#242F3E',
        display: 'flex',
        alignItems: 'center',
        gap: theme.spacing(4)
    },
    navbar__box: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '.8rem',
        color: 'white'
    }
}))

export default Navbar