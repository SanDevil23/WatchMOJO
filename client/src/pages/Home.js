import React from "react";
import Login from "../components/Login";
import { useState } from "react";
import TopBar from "../components/TopBar";
import MiddleComp from "../components/MiddleComp";
import Footer from "../components/Footer";
const Home = () => {
  const [pop, setPop] = useState(false);

  return (
    <div className="vh-100">
      <TopBar setPop={setPop} pop={pop} />
      {pop ? <Login></Login> : <MiddleComp />}
      <Footer />
    </div>
  );
};

export default Home;
