import { ADD_TODO } from "./types";
import { DELETE_TODO } from "./types";
import { CHANGE_TODO } from "./types";

export const addTodo = newTodo => {
  return {
    type: ADD_TODO,
    payload: newTodo
  };
};



export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const changeTodo = id => {
  return {
    type: CHANGE_TODO,
    payload: id
  };
};