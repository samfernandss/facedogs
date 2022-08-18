import React, { useState } from 'react';

const useForm = () => {
  const [value, setValue] = useState('');

  function onChange(event) {
    event.preventDefault();
    setValue(event.target.value);
  }

  return {
    value, setValue, onChange
  }
}

export default useForm;