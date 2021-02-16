import React from "react";
import styles from "./FeedPhotosItem.module.scss";

const FeedPhotosItem = (props) => {
  const { photo, setModalPhoto } = props;

  const handleClick = () => {
    setModalPhoto(photo);
  }

  return (
    <li className={`${styles.photo} anime-bottom`} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} title={photo.title} />
      <span className={styles.photoInfo}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
