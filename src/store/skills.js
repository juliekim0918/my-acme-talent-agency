import axios from "axios";

const GET_SKILLS = "GET_SKILLS";

const _getSkills = (skills) => {
  return {
    type: GET_SKILLS,
    skills,
  };
};

export const getSkills = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/skills");
    dispatch(_getSkills(data));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_SKILLS:
      return action.skills;

    default:
      return state;
  }
};
