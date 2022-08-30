import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, id, value, onChange, error, onBlur}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}> {label} </label>
      <input id={id} className={styles.input} type={type} value={value} onChange={onChange} onBlur={onBlur} />
      {error && <p className={styles.error}>{ error }</p>}
    </div>
  )
}

export default Input;