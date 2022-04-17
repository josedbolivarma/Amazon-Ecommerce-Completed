import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { useForm } from '../Hooks/useForm';

import { registerAsync } from '../redux/actions/actionRegister';
//Material UI
import { makeStyles } from '@material-ui/core';
import { LinkRedirect } from '../styled/styledComponents';

const Register = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, handleInputChange, reset] = useForm({
      nombre: '',
      email: '',
      pass1: '',
      pass2: ''
  })

  const { nombre, email, pass1, pass2 } = values;

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('/REGISTER.JS ',values);
      dispatch(registerAsync(email, pass1, nombre));
      reset();
      navigate('/');
  }


  

  return (
    <div className={classes.root}>
        <Link to='/'>
        <img 
        className={classes.login__logo}
        src='https://topeuniversity.com/wp-content/uploads/2021/12/amazon-gran.png'
        alt='Logo'
        />
        </Link>

        <div className={classes.login__container}>
            <h1>Sign Up</h1>

            <form onSubmit={handleSubmit} className={classes.form}>
                <h5>E-mail</h5>
                <input type='email' 
                name='email'
                value={email}
                onChange={handleInputChange}
                />

                <h5>Password</h5>
                <input type='password'
                name='pass1'
                value={pass1}
                onChange={handleInputChange}
                /> 
                  <h5>Repeat Password</h5>
                <input type='password'
                name='pass2'
                value={pass2}
                onChange={handleInputChange}
                /> 

                <button 
                type='submit'
                className={classes.login__signUpButton}>Sign Up</button>
            </form>
            
            <p>
                AMAZON CLONE Conditions of Use and Terms.
            </p>
            <LinkRedirect to='/login'>
                Login
            </LinkRedirect>

         
        </div>
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    login__logo: {
        marginTop: '20px',
        marginBottom: '20px',
        objectFit: 'contain',
        width: '100px',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    login__container: {
        width: '300px',
        height: 'fit-content',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '5px',
        border: '1px solid lightgray',
        padding: '20px',
        '& h1': {
            fontWeight: '500',
            marginBottom: '20px',
        },
        '& p': {
            marginTop: '15px',
            fontSize: '12px'
        }
    },

    form: {
        '& h5': {
            marginBottom: '5px'
        },
        '& input': {
            height: '30px',
            marginBottom: '10px',
            backgroundColor: 'white',
            width: '98%'
        }
    },
    login__signInButton: {
        
        cursor: 'pointer'
    },
    login__signUpButton: {
        background: '#f0c14b',
        borderRadius: '2px',
        width: '100%',
        height: '30px',
        border: '1px solid',
        marginTop: '10px',
        borderColor: '#a88734 #9c7e31 #846a29',
        cursor: 'pointer'
    }
   
}))

export default Register;