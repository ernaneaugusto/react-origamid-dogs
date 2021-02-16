import React from "react";
import styles from "./FeedPhotosItem.module.scss";

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className={`${styles.photo} anime-bottom`}>
      <img src={photo.src} alt={photo.title} title={photo.title} />
      <span className={styles.photoInfo}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
