import React from 'react'

// Material UI
import { makeStyles } from '@material-ui/core';

const NavFilter = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <h2>Electrónicos</h2>
        <h2>Los Más Vendidos</h2>
        <h2>Televisión y Video</h2>
        <h2>Cómputo y Tabletas</h2>
        <h2>Audio y Equipos de Sonido</h2>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f8f8f8',
        padding: theme.spacing(1),
        fontSize: '.45rem',
        color: '#000',
        display: 'flex',
        gap: theme.spacing(3)
    }
}))

export default NavFilter