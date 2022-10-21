import { APPEND_WORK, GET_WORK, DELETE_WORK, UPDATE_WORK } from './reducer';

export const getWork = (id, work) => {
  return {
    type: GET_WORK,
  };
};

export const appendWork = (id, work) => {
  return {
    type: APPEND_WORK,
    payload: {
      id,
      title: work,
    },
  };
};

export const deleteWork = (id) => {
  return {
    type: DELETE_WORK,
    payload: {
      id,
    },
  };
};

export const updateWork = (id, work) => {
  return {
    type: UPDATE_WORK,
    payload: {
      id,
      title: work,
    },
  };
};
