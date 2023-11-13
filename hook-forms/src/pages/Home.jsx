import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ justifyContent: "center", alignItems: "center" }}>
      <h1>Home</h1>
      <div>
        <Link className="Link" to="/firstPage">
          First Page
        </Link>
      </div>
      <div>
        <Link className="Link" to="/secondPage">
          Second Page
        </Link>
      </div>
    </div>
  );
};

export default Home;
