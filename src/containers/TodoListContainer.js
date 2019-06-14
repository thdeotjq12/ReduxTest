import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CHANGE_INPUT,
  changeInput,
  insert,
  INSERT,
  TOGGLE_CHECK,
  toggleCheck,
  REMOVE,
  remove
} from "../modules/todos";
import TodoList from "../components/TodoList";

const TodoListContainer = () => {
  //   const input = useSelector(state => state.input, []);
  const { input, todos } = useSelector(state => state.todos, []);
  // 중괄호 > 구조분해 문법
  // 객체에서 타겟 하나만 가져올때 사용
  // [] 을 넣으면 컴포넌트 처음 만들어질때 state => state.todos 만들고
  // 그다음부턴 state => state.todos 를 재사용 안넣으면 랜더링 할때마다 다시만듬

  const dispatch = useDispatch();

  const onChange = e => {
    e.preventDefault();
    // dispatch({
    //   type: CHANGE_INPUT
    // });
    dispatch(changeInput(e.target.value));
  };

  const onSubmit = useCallback(e => {
    e.preventDefault();
    dispatch(insert(input));
    dispatch(changeInput(""));
  });

  const onToggle = id => {
    dispatch({
      type: TOGGLE_CHECK,
      payload: id
    });
  };

  const onRemove = id => {
    dispatch({
      type: REMOVE,
      payload: id
    });
  };

  return (
    <TodoList
      input={input}
      todos={todos}
      onChange={onChange}
      onSubmit={onSubmit}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default TodoListContainer;
