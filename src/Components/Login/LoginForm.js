import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  console.log(username, password)

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    }).then(response => response.json())
    .then(json => console.log(json));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="User" type="text" id="user" {...username} />
        <Input label="Password" type="password" id="password" {...password} />
        <Button>Login</Button>
      </form>
      <Link to="/login/create">Create Account</Link>
    </div>
  )
}

export default LoginForm;