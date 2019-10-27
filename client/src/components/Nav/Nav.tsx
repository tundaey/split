import React from 'react';
import { Link, navigate } from '@reach/router';
import { getToken, deleteToken } from '../../token';
import Button from '../ui/Button/Button';
import userImg from '../../tee.jpeg';
import logo from './splitlogo.png';
import './_nav.scss';

const Nav = () => {
  const isLoggedIn = !!getToken();
  return (
    <nav className="Nav">
      <div className="Nav__logo">
        <img src={logo} />
      </div>
      <ul className="Nav__center">
        {/* <li>Dashboard</li> */}
        <Link to="/">Dashboard</Link>
        <li>Providers</li>
        <li>Users</li>
        <li>Settings</li>
        { isLoggedIn && <li onClick={() => {
          deleteToken();
          navigate('/login')
        }}>
          Log out
        </li> }
      </ul>
      <div className="Nav__action">
        {/* <Link to="/provider">New Provider</Link> */}
        <Button onClick={() => navigate('/provider')}>New Provider</Button>
      </div>
      <div className="Nav__user">
        <img className="Nav__user-photo" src={userImg} />
      </div>
    </nav>
  )
};

export default Nav;
