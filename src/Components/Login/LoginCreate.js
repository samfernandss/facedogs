import React, { useContext } from 'react';
import { USER_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../Form/Button';
import Error from '../Helper/Error';
import Input from '../Form/Input';

const LoginCreate = () => {

  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = useContext(UserContext);
  const { loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Register</h1>
      <form onSubmit={handleSubmit}>
        <Input label="User" type="text" id="username" {...username} />
        <Input label="Email" type="email" id="email" {...email} />
        <Input label="Password" type="password" id="password" {...password} />
        {loading ? <Button disabled>Saving...</Button> : <Button>Save</Button>}
        <Error error={error}/>
      </form>
    </section>
  )
}

export default LoginCreate;