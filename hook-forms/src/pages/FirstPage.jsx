import React from "react";
import { Link, useNavigate } from "react-router-dom";

const FirstPage = () => {
  const navigate = useNavigate();

  const handleNestedFirst = () => {
    // some code here
    const id = "1331";
    navigate(`/firstPage/nestedFirst/${id}`);
  };
  return (
    <div>
      <h1>FirstPage</h1>
      <Link className="Link" to="/firstPage/nestedFirst">
        Nested First
      </Link>
      <div>
        <button onClick={handleNestedFirst}>Go to nested with name</button>
      </div>
    </div>
  );
};

export default FirstPage;
