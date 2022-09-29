import React from 'react';
import { PASSWORD_LOST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Form/Button';
import Input from '../Form/Input';
import Error from '../Helper/Error';

const LoginPasswordLost = () => {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('lost', 'reset')
      });
      const { json } = await request(url, options);
      console.log(json);
    }
  }

  return (
    <section>
      <h1 className="title">Lost your password?</h1>
      {data
        ? <p style={{color: '#4c1'}}>{data}</p>
        : (<form onSubmit={handleSubmit}>
          <Input label="Email or User" type="text" id="login" {...login} />
          {loading ? <Button disabled>Sending...</Button> : <Button>Sent Email</Button>}
          </form>)
      }
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost;