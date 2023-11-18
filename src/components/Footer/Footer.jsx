import React from 'react'
import styles from '../Footer/Footer.module.css';


import footer from '../../assets/footer.svg'


export const Footer = (props) => {
  return(
    <>
        <div className={styles.container}>
            <img className={styles.container__footer} src={footer} alt="" />

        </div>
    </>
   )
  }
