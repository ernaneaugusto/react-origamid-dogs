import React from "react";
import styles from "./FeedModal.module.scss";
import useFetch from "./../../Hooks/useFetch";
import { PHOTO_GET } from "./../../config/api/api";
import ErrorMessage from "./../Shared/ErrorMessage";
import Loading from "./../Shared/Loading";
import PhotoContent from "../Photo/PhotoContent";

const FeedModal = (props) => {
  const { photo, setModalPhoto } = props;
  const { data, error, loading, request } = useFetch();

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  };

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  return (
    <section className={`${styles.modal}`} onClick={handleOutsideClick}>
      {error && <ErrorMessage message={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </section>
  );
};

export default FeedModal;
