import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import styles from './LoginForm.module.css';
import stylesBtn from '../Form/Button.module.css';

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
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="User" type="text" id="user" {...username} />
        <Input label="Password" type="password" id="password" {...password} />
        {loading ? (<Button disabled>Loading...</Button>) : (<Button>Login</Button>)}
        <Error error={error} />
      </form>
      <Link className={styles.perdeu} to="/login/resetPassword">Did you forget the password?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Create Your Own Account</h2>
        <p>Join our community</p>
        <Link className={stylesBtn.button} to="/login/create">Create Account</Link>
      </div>
    </section>
  )
}

export default LoginForm;