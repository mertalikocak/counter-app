import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/counter/counterSlice";

function Counter() {
  const [amount, setAmount] = useState(0);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(countValue);
  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by Amount
      </button>
    </div>
  );
}

export default Counter;
