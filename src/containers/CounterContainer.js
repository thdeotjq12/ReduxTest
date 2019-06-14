import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { INCREMENT, DECREMENT } from "../modules/counter";
import { dispatch } from "rxjs/internal/observable/range";

const CounterContainer = () => {
  const counter = useSelector(state => state.counter, []);

  //   const [onIncrease, onDecrease] = useActions([increment, decrement], []);
  const dispatch = useDispatch();

  const Inc = e => {
    e.preventDefault();
    dispatch({
      type: INCREMENT
    });
  };

  const Dec = e => {
    e.preventDefault();
    dispatch({
      type: DECREMENT
    });
  };

  // import 에서 increment 불러오면 increment(); 이러면 위 디스패치와 동일함 (함수실행)
  return <Counter number={counter} onIncrease={Inc} onDecrease={Dec} />;
};

export default CounterContainer;
