import uuid from "uuid";
import { ADD_TODO } from "../actions/types";
import { DELETE_TODO } from "../actions/types";
import { CHANGE_TODO } from "../actions/types";

const initialState = [
];

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.payload);
    case DELETE_TODO:
      return state.filter(el => el.id !== action.payload) ;
    case CHANGE_TODO:
      return state.map(el => el.id ===  action.payload ? { ...el, complete: !el.complete } : el) ;
    default:
      return state;
  }
};

export default todosReducer;
