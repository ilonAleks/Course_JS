import { createSlice } from "@reduxjs/toolkit";
import todosService from "../services/todos.service";

const initialState = [];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    set(state, action) {
      return action.payload;
    },
    update(state, action) {
      const elementIndex = state.findIndex((el) => el.id === action.payload.id);

      state[elementIndex] = { ...state[elementIndex], ...action.payload };
    },
    remove(state, action) {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

const { actions, reducer: taskReducer } = taskSlice;
const { set, update, remove } = actions;

export const getTasks = () => async (dispatch) => {
  try {
    const data = await todosService.fetch();
    dispatch(set(data));
    console.log(data);
  } catch (error) {}
};

export const completeTask = (id) => (dispatch, getState) => {
  dispatch(update({ id, completed: true }));
};

export function titleChanged(id) {
  return update({ id, title: `New title for ${id}` });
}

export function taskDeleted(id) {
  return remove({ id });
}

export default taskReducer;
