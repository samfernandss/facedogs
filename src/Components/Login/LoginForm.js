import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="User" type="text" id="user" {...username} />
        <Input label="Password" type="password" id="password" {...password} />
        {loading ? (<Button disabled>Loading...</Button>) : (<Button>Login</Button>)}
        { error && <p>{error}</p>}
      </form>
      <Link to="/login/create">Create Account</Link>
    </div>
  )
}

export default LoginForm;