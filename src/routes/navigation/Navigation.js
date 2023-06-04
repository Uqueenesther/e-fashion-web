import { Fragment } from 'react';
import {  Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../crown.svg';
import './Navigation.scss'

const Navigation = () =>{

    return(
      <Fragment>
        <div className='navigation'>
            <Link to='/' className='logo-container'>
                 <CrwnLogo  className='logo'/>
            </Link>
            <div className='nav-links-container'>
                 <Link to="/Shop" className='nav-link'>SHOP</Link>
                 <Link to="/SignIn" className='nav-link'>SIGN IN</Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;