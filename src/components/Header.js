import React, { useEffect, useState } from 'react'
import logo from '../assets/logo-amazon.png';
import SearchIcon from "@material-ui/icons/Search";
import { logoutAsync } from '../redux/actions/actionLogin';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'firebase/auth';
import Navbar from './Navbar';
import NavFilter from './NavFilter';

//Material ui
import { makeStyles } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';import { Link, useNavigate } from 'react-router-dom';
import RoomIcon from '@material-ui/icons/Room';


const Header = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    longitude: 0,
    latitude: 0,
  });

  const [user, setUser] = useState(null);
  const { cart } = useSelector(store => store.cart);
 


  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setState({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        })
      },
      function (error) {
        console.log(error);
      },
      {
        enableHighAccuracy: true
      }
    )

    const auth = getAuth().currentUser;
    setUser(auth);
  }, [])
  

  const handleLogout = () => {
    dispatch(logoutAsync());
    navigate('/login');
  }

  return (
  <div>
    <div className={classes.header__container}>
      <Link to='/'>
        <img 
        className={classes.logo}
        src={logo}/>
      </Link>

      <Link 
      to={'/map'}
      state={state}
      >
            <div className={classes.header__option}>
            <span
                className={classes.header__optionLineOne}
                >
                    Hola
                </span>
                <span
                className={classes.header__optionLineTwo}
                >
                  <RoomIcon />
                    Elige tu dirección
                </span>
            </div>
            </Link>

        <div
        className={classes.header__search}
        >
            <input 
            className={classes.header__searchInput}
            type='text'
            />
            <SearchIcon
            className={classes.header__searchIcon}/>
        </div>
        <div
        className={classes.header__nav}
        >
          {/* /login */}
          <Link to='/login'>
          <div
          onClick={handleLogout} 
          className={classes.header__option}>
                <span
                className={classes.header__optionLineOne}
                >
                    Hello {!user ? 'Guest' : user.email}
                </span>
                <span
                className={classes.header__optionLineTwo}
                >
                    { user? 'Sign Out' : 'Sign In'}
                </span>
            </div>
          </Link>
          {/* /login */}
          <Link to='/products'>
          <div className={classes.header__option}>
            <span
                className={classes.header__optionLineOne}
                >
                    Devoluciones
                </span>
                <span
                className={classes.header__optionLineTwo}
                >
                    Y Pedidos
                </span>
            </div>
            </Link>
            <Link to='/order'>
            <div className={classes.header__option}>
            <span
                className={classes.header__optionLineOne}
                >
                    Your
                </span>
                <span
                className={classes.header__optionLineTwo}
                >
                    Prime
                </span>
            </div>
            </Link>

              {/* /checkout */}
               <Link to='/checkout'>
            <div className={classes.header__optionBasket}>
                <ShoppingCartIcon />
                <span
                className={classes.header__basketCount}
                >
                    {cart.length}
                </span>
            </div>
                </Link>
            {/* /checkout */}
        </div>
        <div>
        </div>
    </div>
    <Navbar />
    <NavFilter />
  </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'sticky',
    top: 0,
    zIndex: 100
  },
  header__container: {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#131921',
  
  },
  logo: {
    width: '100px',
    objectFit: 'contain',
    margin: '0 20px',
    marginTop: theme.spacing(1)
  },
  header__search: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    borderRadius: '24px'
  },
  header__searchInput: {
    height: '12px',
    padding: '10px',
    border: 'none',
    width: '100%'
  },
  header__searchIcon: {
    padding: '5px',
    height: '22px !important',
    backgroundColor: '#cd9042'
  },
  header__nav: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  header__option: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px',
    marginRight: '10px',
    color: 'white',
    cursor: 'pointer'
  },
  header__optionLineOne: {
    fontSize: '10px'
  },
  header__optionLineTwo: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '13px',
    fontWeight: '800'
  },
  header__optionBasket: {
    display: 'flex',
    alignItems: 'center',
    color: 'white'
  },
  header__basketCount: {
    fontSize: '13px',
    fontWeight: '800',
    marginLeft: '10px',
    marginRight: '10px'
  }


}))

export default Header
