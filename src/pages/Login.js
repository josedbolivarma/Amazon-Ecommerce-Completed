import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from '../Hooks/useForm';
import {  loginWithEmailPassAsync } from '../redux/actions/actionLogin';
import { loginGoogle } from '../redux/actions/actionLogin';
import googleIcon from '../assets/google.png';
import facebookIcon from '../assets/facebook.png';

//Material UI
import { makeStyles } from '@material-ui/core';
import { ButtonFacebook, ButtonGoogle, LinkRedirect } from '../styled/styledComponents';

const Login = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, handleInputChange, reset] = useForm({
      email: '',
      password: '',
  })

  const { email, password } = values;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginWithEmailPassAsync(email, password));
    reset();
    navigate('/');
  }

  const handleGoogle = () => {
      dispatch(loginGoogle());
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
            <h1>Sign In</h1>

            <form onSubmit={handleSubmit} className={classes.form}>
                <h5>E-mail</h5>
                <input type='email'
                name='email' 
                value={email}
                placeholder="Enter email"
                onChange={handleInputChange}
                />

                <h5>Password</h5>
                <input type='password'
                name='password'
                value={password}
                onChange={handleInputChange}
                /> 

                <button 
                type='submit'
                className={classes.login__signInButton}>Sign In</button>

            <ButtonGoogle 
                type='button'
                onClick={handleGoogle}
                >
                    <img width='20px' height='20px' src={googleIcon} alt='Google Icon'/>
                    Sign with Google</ButtonGoogle>
                   
                   <ButtonFacebook 
                type='button'
                onClick={handleGoogle}
                >
                    <img width='20px' height='20px' src={facebookIcon} alt='Facebook Icon'/>
                    Sign with Facebook</ButtonFacebook>
            </form>
            
            <p>
                AMAZON CLONE Conditions of Use and Terms.
            </p>
            <LinkRedirect to='/register'>
                Register
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
        background: '#f0c14b',
        borderRadius: '2px',
        width: '100%',
        height: '30px',
        border: '1px solid',
        marginTop: '10px',
        borderColor: '#a88734 #9c7e31 #846a29',
        cursor: 'pointer',
        '&:hover': {
            opacity: '.9'
        }
    },
    login__registerButton: {
        borderRadius: '2px',
        width: '100%',
        height: '30px',
        border: '1px solid',
        marginTop: '10px',
        borderColor: 'darkgray'
    },

   
}))

export default Login