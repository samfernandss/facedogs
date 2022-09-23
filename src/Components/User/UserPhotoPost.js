import React, { useState } from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api';

const UserPhotoPost = () => {
  const name = useForm();
  const weight = useForm('number');
  const age = useForm('number');
  const [img, setImg] = useState({});
  const { data, loading, error, request } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('name', name.value);
    formData.append('weight', weight.value);
    formData.append('age', age.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Name" type="text" id="name" {...name} />
        <Input label="Weight" type="number" id="weight" {...weight} />
        <Input label="Age" type="number" id="age" {...age} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        <Button>Sent</Button>
      </form>
    </section>
  )
}

export default UserPhotoPost;