import React from 'react';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({id}) => {
  return (
    <div>
      <button className={styles.delete}>Delete</button>
    </div>
  )
}

export default PhotoDelete;