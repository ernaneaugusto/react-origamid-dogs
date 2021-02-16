import React from "react";
import FeedPhotos from "./FeedPhotos";
import FeedModal from "./FeedModal";

const Feed = () => {
  return <section className={`anime-bottom`}>
    <FeedModal />
    <FeedPhotos />
  </section>;
};

export default Feed;
