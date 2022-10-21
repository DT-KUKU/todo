export const APPEND_WORK = 'APPEND_WORK';
export const DELETE_WORK = 'DELETE_WORK';
export const UPDATE_WORK = 'UPDATE_WORK';
export const GET_WORK = 'GET_WORK';
const dummy = {
  todo: [
    { id: 1, title: 'first Work' },
    { id: 2, title: 'second Work' },
  ],
};

export const WorkReducer = (state = dummy, action) => {
  switch (action.type) {
    case GET_WORK:
      return { ...state };
    case APPEND_WORK:
      return {
        ...state,
        todo: [
          ...state.todo,
          { id: action.payload.id, title: action.payload.title },
        ],
      };
    case DELETE_WORK:
      return {
        ...state,
        todo: state.todo.filter((value) => value.id !== action.payload.id),
      };
    case UPDATE_WORK:
      return {
        ...state,
        todo: state.todo.map((value) => {
          if (value.id === action.payload.id) {
            value.title = action.payload.title;
          }
          return value;
        }),
      };
  }

  return state;
};
