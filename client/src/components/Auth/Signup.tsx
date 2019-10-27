import React, { useState } from 'react';
import { useQuery, useMutation } from 'urql';
import { RouteProps } from '../../App';
import Button from '../ui/Button/Button';
import FormGroup from '../ui/FormGroup/FormGroup';
import * as Input from '../ui/Input';
import './auth.scss';
import { Link, navigate } from '@reach/router';
import { setToken } from '../../token';

interface IProps {}

const Register = `mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!){
  createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    id
    firstName
    lastName
    email
  }
}`;

const Signup = (props: RouteProps) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [registerMutation, executeRegisterMutation] = useMutation(Register);

  function register() {
    executeRegisterMutation({ email, firstName, lastName, password })
    .then(({ data }) => {
      const token = data.token
      if(token) {
        setToken(token)
        navigate('/')
      }
    });
    // setEmail('');
  }

  return (
    <div className="Auth">
      <form className="AuthForm">
        <p className="AuthForm__header">Sign up</p>
        <p className="AuthForm__sub-header">Create your account to get started</p>
        <FormGroup label="first name">
          <Input.Text value={firstName} onChange={value => setFirstName(value)} type="text" />
        </FormGroup>
        <FormGroup label="last name">
          <Input.Text value={lastName} onChange={value => setLastName(value)} type="text" />
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
