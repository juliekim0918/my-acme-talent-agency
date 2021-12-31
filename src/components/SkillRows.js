import React, { Component } from "react";
import { connect } from "react-redux";
import { getSkills, editSkill } from "../store/skills";
import { changeMode } from "../store/mode";
const VIEW = "VIEW";
const EDIT = "EDIT";

class SkillRows extends Component {
  constructor() {
    super();
    this.state = {
      currSkillId: 0,
      currSkillName: "",
    };
  }
  componentDidMount() {
    this.props.getSkills();
  }

  updateCurrSkill = (id, name) => {
    this.setState({
      currSkillId: id,
      currSkillName: name,
    });
  };

  handleKey = (evt) => {
    if (evt.key === "Enter") {
      changeMode(VIEW);
      this.props.editSkill(this.state.currSkillId, this.state.currSkillName);
      this.setState({
        currSkillId: 0,
        currSkillName: "",
      });
    }
  };

  render() {
    const { skills, mode, changeMode, editSkill } = this.props;
    const { updateCurrSkill, handleKey } = this;
    const { currSkillId, currSkillName } = this.state;
    return (
      <tbody className="bg-white divide-y divide-gray-200">
        {skills.map((skill) => (
          <tr key={skill.name}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm font-medium text-gray-900">
                {currSkillId === skill.id && mode !== VIEW ? (
                  <input
                    type="text"
                    value={currSkillName}
                    className="px-5 py-2 rounded-full border-gray-300"
                    onChange={(evt) => {
                      this.setState({ currSkillName: evt.target.value });
                    }}
                    onKeyDown={handleKey}
                  />
                ) : (
                  skill.name
                )}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-900">
                {skill.artists.length}
              </div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                className="text-blue-700 hover:text-blue-900"
                onClick={() => {
                  if (mode === VIEW || currSkillId !== skill.id) {
                    changeMode(EDIT);
                    updateCurrSkill(skill.id, skill.name);
                  } else {
                    changeMode(VIEW);
                    editSkill(currSkillId, currSkillName);
                  }
                }}
              >
                {currSkillId === skill.id && mode !== VIEW ? "Save" : "Edit"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

const mapStateToProps = ({ skills, mode }) => {
  return { skills, mode };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSkills: () => {
      dispatch(getSkills());
    },
    editSkill: (skillId, name) => {
      dispatch(editSkill(skillId, name));
    },
    changeMode: (view) => {
      dispatch(changeMode(view));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SkillRows);
