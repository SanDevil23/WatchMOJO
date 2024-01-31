import React from "react";
import "./css/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="background"></div>
      <div className="home-landing">
        <div className="topbar">
          <h1 id="brand">WatchMOJO</h1>
          <div className="btn-med">
            <button>Subscribe</button>
            <button>Login</button>
          </div>
        </div>
        <div className="msg-box">
          <p id="msg1">Unlimited Entertainment</p>
          <p id="msg2">Binge Watch your favorite shows and movies </p>
          <button id="prv"><a href="/trial">Get Started</a></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
