import React from "react";
import "./css/home.css";
import Login from "../components/Login";
import { useState } from 'react'
const Home = () => {

  const [pop, setPop] = useState(false);

  const togglePop = () => {
    setPop(!pop)
    console.log(pop)
  }

  return (
    <div className="home">
      <div className="background"></div>
      <div className="home-landing">
        <div className="topbar">
          <h1 id="brand">WatchMOJO</h1>
          <div className="btn-med">
            <button>Subscribe</button>
            <button onClick={togglePop}>Login</button>
          </div>
        </div>
        {pop ? (<Login></Login>) : (null)}
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
