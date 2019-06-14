import { Action } from "rxjs/internal/scheduler/Action"; // 자동으로 임포트 되었네?

// 액션 타입 선언
export const INCREMENT = "counter/INCREMENT";
export const DECREMENT = "counter/DECREMENT";
// 액션 함수 선언
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

const initalState = 0;

// 액션 함수 기능 구현
const counter = (state = initalState, Action) => {
  switch (Action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counter;
