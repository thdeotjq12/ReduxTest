// 액션 타입 (파일명/변수명) - 스위치 통해 기능 실행
export const CHANGE_INPUT = "todos/CHANGE_INPUT";
export const INSERT = "todos/INSERT";
export const TOGGLE_CHECK = "todos/TOGGLE_CHECK";
export const REMOVE = "todos/REMOVE";

let id = 0;
// 액션 함수 (파라미터)
export const changeInput = input => ({ type: CHANGE_INPUT, payload: input });
export const insert = text => ({
  type: INSERT,
  payload: {
    id: ++id,
    text
  }
});

export const toggleCheck = id => ({ type: TOGGLE_CHECK, payload: id });
export const remove = id => ({ type: REMOVE, payload: id });

const initialState = {
  input: "",
  todos: []
};
// 리듀서함수 : 액션과 이전 state 를 받아서 새로운 state 를 리턴
// 주의 : 함수내부에서 groval 변수 수정, 랜덤-시간함수 사용 금지
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.payload
      };
    case INSERT:
      return {
        ...state,

        todos: state.todos.concat({ ...action.payload, done: false }) // 배열의 후미에 값 이어붙임
      }; //action.payload 안에 id, text 값 들어있음 + done 을 기존배열에 붙여주는 기능
    case TOGGLE_CHECK:
      console.log("TOGGLE 실행됨");
      return {
        ...state,
        todos: state.todos.map((
          todo // map은 태그에 key 값을 제공해줘야 함, 배열을 통해 새로운배열 만듬
        ) =>
          todo.id === action.payload
            ? {
                ...todo,
                done: !todo.done
              }
            : todo
        )
      }; // todos.done 값을 변경
    case REMOVE:
      console.log("REMOVE 실행됨");
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }; // retrun 조건에 만족하는 요소만 배열로 리턴, 없으면 [] 리턴
    default:
      return state;
  }
};

export default todos;
