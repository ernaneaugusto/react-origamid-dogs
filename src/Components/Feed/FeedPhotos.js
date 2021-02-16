import React from "react";
import useFetch from "./../../Hooks/useFetch";
import FeedPhotosItem from "./FeedPhotosItem";
import ErrorMessage from "./../Shared/ErrorMessage";
import { PHOTOS_GET } from "../../config/api/api";
import Loading from "../Shared/Loading";
import styles from "./FeedPhotos.module.scss";

const FeedPhotos = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const fetchPhotos = async () => {
      const { url, options } = PHOTOS_GET({
        page: 1,
        total: 6,
        user: 0,
      });

      const { response, json } = await request(url, options);
    };

    fetchPhotos();
  }, [request]);

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (loading) {
    return <Loading />;
  }

  if (data) {
    return (
      <ul className={`${styles.feed} anime-bottom`}>
        {data.map((photo) => {
          return <FeedPhotosItem key={photo.id} photo={photo} />;
        })}
      </ul>
    );
  } else {
    return null;
  }
};

export default FeedPhotos;
