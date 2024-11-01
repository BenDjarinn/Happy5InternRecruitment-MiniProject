import React from 'react';
import styles from '../Button/ButtonStyle.module.css';
import PlusIcon from '../../assets/plus - purple.svg'

function Button({ buttonText }) { 
  return (
    <button className={styles.button}>
        <img src={PlusIcon} className="plus icon" />
        {buttonText}
    </button>
  );
}

export default Button;


