import axios from "axios";

const GET_SKILLS = "GET_SKILLS";
const EDIT_SKILL = "EDIT_SKILL";

const _getSkills = (skills) => {
  return {
    type: GET_SKILLS,
    skills,
  };
};

export const getSkills = () => {
  return async (dispatch) => {
    const { data: skills } = await axios.get("/api/skills");
    dispatch(_getSkills(skills));
  };
};

export const editSkill = (skillId, name) => {
  return async (dispatch) => {
    await axios.put(`/api/skills/${skillId}`, { name });
    const { data: skills } = await axios.get("/api/skills");
    dispatch(_getSkills(skills));
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
