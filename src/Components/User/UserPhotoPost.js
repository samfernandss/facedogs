import React, { useEffect, useState } from 'react';
import styles from './UserPhotoPost.module.css';
import Input from '../Form/Input';
import Button from '../Form/Button';
import Error from '../Helper/Error';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_POST } from '../../api';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const name = useForm();
  const weight = useForm('number');
  const age = useForm('number');
  const [img, setImg] = useState({});
  const { data, loading, error, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate('/account');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', name.value);
    formData.append('peso', weight.value);
    formData.append('idade', age.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options).then(res => console.log(res));
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Name" type="text" id="name" {...name} />
        <Input label="Weight" type="number" id="weight" {...weight} />
        <Input label="Age" type="number" id="age" {...age} />
        <input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange} />
        {loading ? <Button disabled>Senting...</Button> : <Button>Sent</Button>}
        <Error error={error} />
      </form>
      <div>
        {img.preview && <div className={styles.preview} style={{ backgroundImage: `url('${img.preview}')` }}></div>}
      </div>
    </section>
  )
}

export default UserPhotoPost;