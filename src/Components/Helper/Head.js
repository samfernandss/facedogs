import React from 'react';
import { useEffect } from 'react';

const Head = (props) => {
  useEffect(() => {
    document.title = props.title + ' | Facedogs';
    // document.querySelector("meta[name='description']").setAttribute('content', props.description || '');
  }, [props]);

  return (
    <>Head</>
  )
}

export default Head;