import React from 'react';
import styles from './Loader.module.scss';
import { Hash } from 'react-feather';

function Loader() {
  return (
    <div className='fixed loader-container inset-0 bg-black text-white z-[15] grid place-items-center'>
      <div className='w-[80vw] max-w-sm loader-content flex flex-col gap-4 items-center'>
        
        <h2 className={styles.loaderText} title='Cracking the safe'>
          Cracking the safe
        </h2>
        <div className='w-full h-[1px] rounded-full relative overflow-hidden'>
          <span className='loader-indicator scale-x-0 origin-left absolute inset-0 bg-white' />
        </div>
      </div>
    </div>
  );
}

export default Loader;
