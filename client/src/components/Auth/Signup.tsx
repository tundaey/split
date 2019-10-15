import React from 'react';
import { RouteProps } from '../../App';
import Button from '../ui/Button/Button';
import './auth.scss';

interface IProps {}

const Signup = (props: RouteProps) => {
  return (
    <div className="Auth">
      <form className="AuthForm">
        <p>Sign up</p>
        <p>Create your account to get started</p>
        <div>
          <label>Email</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <input type="checkbox" />
        <Button>Sign up</Button>
      </form>
    </div>
  );
};

export default Signup;
