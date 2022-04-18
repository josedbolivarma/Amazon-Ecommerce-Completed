import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import DashboardRoute from './DashboardRoute';
import PrivateRouters from './PrivateRouters';
import PublicRouters from './PublicRouters';
import logo from '../assets/Amazon-logo.png';

const AppRoutes = () => {
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user)=>{
        if(user?.uid){
          setIsLoggedIn(true);
        }
        else{
            setIsLoggedIn(false)
        }
        setChecking(false)
    })

  
 }, [setIsLoggedIn, setChecking]);

  
  if(checking) {
    return (
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgb(238,127,55)',
        background: 'linear-gradient(90deg, rgba(238,127,55,1) 0%, rgba(245,113,0,1) 48%, rgba(244,176,53,1) 87%, rgba(245,113,0,1) 100%)',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0'
      }}>
        <div 
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
        <img width='200px' height='100px' src={logo} alt='Loader'/>
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={
                    <PublicRouters isAuth={isLoggedIn}>
                        <Login/>
                    </PublicRouters>
            }/>


            <Route path='/register' element={
              <PublicRouters isAuth={isLoggedIn}>
                  <Register />
              </PublicRouters>
            }/>

            <Route path='/*' element={
              <PrivateRouters isAuth={isLoggedIn}>
                  <DashboardRoute />
              </PrivateRouters>
            }/>
        </Routes>

    </BrowserRouter>
  )
}



export default AppRoutes;


