const CHANGE_MODE = "CHANGE_MODE";
const VIEW = "VIEW";
const EDIT = "EDIT";

export const changeMode = (view) => {
  return {
    type: CHANGE_MODE,
    view,
  };
};

export default (state = VIEW, action) => {
  switch (action.type) {
    case CHANGE_MODE:
      return action.view;
    default:
      return state;
  }
};
