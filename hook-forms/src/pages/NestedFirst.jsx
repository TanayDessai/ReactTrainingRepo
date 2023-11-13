import React from "react";
import { useParams } from "react-router-dom";

const NestedFirst = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>NestedFirst</h1>
      <h2>id : {id}</h2>
    </div>
  );
};

export default NestedFirst;
