import React from 'react';
import Feed from './../Components/Feed/Feed';

const Home = () => {
  return (
    <section className={`container main-container`}>
      <h1 className="title">Home</h1>
      <Feed />
    </section>
  )
}

export default Home;