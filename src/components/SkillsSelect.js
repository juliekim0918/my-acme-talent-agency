import React, { Component } from "react";
import { getSkills } from "../store/skills";
import { connect } from "react-redux";
import { PlusCircle } from "react-feather";
import { addArtistSkill } from "../store/artists";

class SkillsSelect extends Component {
  constructor() {
    super();
    this.state = {
      selectedSkill: 0,
    };
  }
  componentDidMount() {
    this.props.getSkills();
  }

  handleChange = (evt) => {
    this.setState({
      selectedSkill: evt.target.value * 1,
    });
  };
  handleSubmit = async (evt) => {
    evt.preventDefault();
    const { selectedSkill } = this.state;
    await this.props.addSkill(this.props.artist.id, selectedSkill);
  };

  render() {
    const { artist, skills } = this.props;
    const { handleChange, handleSubmit } = this;
    const { selectedSkill } = this.state;
    return (
      <div className="basis-full flex flex-row gap-4 px-8 mt-3">
        <select
          className="grow px-4 py-3 rounded-full"
          onChange={(evt) => handleChange(evt)}
        >
          <option value="">Add a skill</option>
          {skills
            .filter(
              (skill) =>
                !artist.skills.map((skill) => skill.id).includes(skill.id)
            )
            .map((skill) => {
              return (
                <option value={skill.id} key={skill.id}>
                  {skill.name}
                </option>
              );
            })}
        </select>
        <button
          onClick={(evt) => handleSubmit(evt)}
          disabled={!selectedSkill}
          className="self-center bg-blue-700 p-3 rounded-full text-white disabled:bg-gray-200"
        >
          <PlusCircle />
        </button>
      </div>
    );
  }
}
const mapStateToProps = ({ skills }) => {
  return { skills };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSkills: () => {
      dispatch(getSkills());
    },
    addSkill: (artistId, skillId) => {
      dispatch(addArtistSkill(artistId, skillId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SkillsSelect);
