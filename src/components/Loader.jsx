import React, { useState, useEffect } from "react";
import logo from "../assets/GIFs/animation_640_l4npvalm.gif";
const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <section
      className={`loading-overlay ${loading === false && "hideLoading"}`}
    >
      <img src={logo} alt="loading..." className={`${loading === false && "stopgif"}`}/>
    </section>
  );
};

export default Loader;
