import React, { useState } from 'react';
import { RouteProps } from '../../App';
import Button from '../ui/Button/Button';
import FormGroup from '../ui/FormGroup/FormGroup';
import * as Input from '../ui/Input';
import './auth.scss';

interface IProps {}

const Signup = (props: RouteProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="Auth">
      <form className="AuthForm">
        <p>Sign up</p>
        <p>Create your account to get started</p>
        <FormGroup label="email">
          <Input.Text value={email} onChange={value => setEmail(value)} type="email" />
        </FormGroup>
        <FormGroup label="password">
          <Input.Text value={password} onChange={value => setPassword(value)} type="password" />
        </FormGroup>
        <Button>Sign up</Button>
      </form>
    </div>
  );
};

export default Signup;
