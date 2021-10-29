import { INCREMENT, DECREMENT } from "../actions/counterActions";

export const getIncrementedValue = () => ({
  type: INCREMENT,
});

export const getDecrementedValue = () => ({
  type: DECREMENT,
});
