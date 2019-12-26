import * as React from 'react';
import './styles/styles.scss';

const Home = () => {
  return <section className="hero is-fullheight is-primary">
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          Hello from
        </h1>
        <h2 className="subtitle">
          React, Yoga, Prisma
          <a href="https://github.com/rIIh/prisma-yoga-react-template" style={{marginLeft: '20px'}}><span className="tag is-link is-normal">Github</span></a>
        </h2>
      </div>
    </div>
    <div className="hero-foot">
      <div className="container">
      </div>
    </div>
  </section>;
};

export default Home;
