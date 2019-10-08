import React from 'react';
import Button from '../ui/Button/Button';
import userImg from '../../tee.jpeg';
import logo from './splitlogo.png';
import './_nav.scss'

const Nav = () => (
  <nav className="Nav">
      <div className="Nav__logo">
        <img src={logo} />
      </div>
      <ul className="Nav__center">
        <li>Dashboard</li>
        <li>Providers</li>
        <li>Users</li>
        <li>Settings</li>
      </ul>
      <div className="Nav__action">
        <Button>
          New Provider
        </Button>
      </div>
      <div className="Nav__user">
        <img className="Nav__user-photo" src={userImg}/>
      </div>
    </nav>
);

export default Nav;