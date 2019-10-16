import React, { useState } from 'react';
import { RouteProps } from '../../App';
import Button from '../ui/Button/Button';
import FormGroup from '../ui/FormGroup/FormGroup';
import * as Input from '../ui/Input';
import './auth.scss';
import { Link } from '@reach/router';

interface IProps {}

const Login = (props: RouteProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="Auth">
      <form className="AuthForm">
        <p className="AuthForm__header">Login</p>
        {/* <p className="AuthForm__sub-header">Create your account to get started</p> */}
        <FormGroup label="email">
          <Input.Text value={email} onChange={value => setEmail(value)} type="email" />
        </FormGroup>
        <FormGroup label="password">
          <Input.Text value={password} onChange={value => setPassword(value)} type="password" />
        </FormGroup>
        <Button>Sign up</Button>
        <p className="AuthForm__sub-link">
          No account? <Link to="/register">Get started for free</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
