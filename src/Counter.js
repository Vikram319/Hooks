import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDecrementedValue,
  getIncrementedValue,
} from "./actionCreators/counterActionCreators";

export const Counter = () => {
  const {
      counter: { count },
    } = useSelector((state) => state),
    dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(getIncrementedValue());
  };
  const handleDecrement = () => {
    dispatch(getDecrementedValue());
  };
  return (
    <>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
    </>
  );
};

export default Counter;
