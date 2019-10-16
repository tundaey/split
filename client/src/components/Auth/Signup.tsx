import React, { useState } from 'react';
import { useQuery, useMutation } from 'urql';
import { RouteProps } from '../../App';
import Button from '../ui/Button/Button';
import FormGroup from '../ui/FormGroup/FormGroup';
import * as Input from '../ui/Input';
import './auth.scss';
import { Link } from '@reach/router';

interface IProps {}

const Register = `mutation($name: String, $email: String, $password: String){
  createUser(name: $name, email: $email, password: $password) {
    id
    text
    complete
  }
}`;

const Signup = (props: RouteProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [registerMutation, executeRegisterMutation] = useMutation(Register);

  function register() {
    executeRegisterMutation({ email, name, password });
    setEmail('');
  }

  return (
    <div className="Auth">
      <form className="AuthForm">
        <p className="AuthForm__header">Sign up</p>
        <p className="AuthForm__sub-header">Create your account to get started</p>
        <FormGroup label="name">
          <Input.Text value={name} onChange={value => setName(value)} type="text" />
        </FormGroup>
        <FormGroup label="email">
          <Input.Text value={email} onChange={value => setEmail(value)} type="email" />
        </FormGroup>
        <FormGroup label="password">
          <Input.Text value={password} onChange={value => setPassword(value)} type="password" />
        </FormGroup>
        <Button disabled={registerMutation.fetching || email.length === 0} onClick={register}>
          Sign up
        </Button>
        <p className="AuthForm__sub-link">
          Have an account already? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
