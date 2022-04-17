import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import DashboardRoute from './DashboardRoute';
import PrivateRouters from './PrivateRouters';
import PublicRouters from './PublicRouters';

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
      <h1>Espere...</h1>
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


