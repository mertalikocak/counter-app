import React from "react";
import { useSelector } from "react-redux";

function Counter() {
  const countValue = useSelector((state) => state);
  console.log(countValue);
  return (
    <div>
      <h1>1</h1>
    </div>
  );
}

export default Counter;
