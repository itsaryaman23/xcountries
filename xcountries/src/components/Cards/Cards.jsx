import React from "react";
import styles from './Cards.module.css';

const Cards = ({title, url, abb}) => {
  return <>
  <div className={styles.card}>
    <div className={styles.imgCont}>
      <img className={styles.flag} src={url} alt={`${title}-flag`}/>
    </div>
    <h5>{title}</h5>
  </div>
  </>;
};

export default Cards;
