import React, { Component } from "react";
import { deleteArtistSkill } from "../store/artists";
import { connect } from "react-redux";
import { X, PlusCircle } from "react-feather";
import SkillsSelect from "./SkillsSelect";

const VIEW = "VIEW";
const EDIT = "EDIT";

const ArtistSkills = ({ artist, currArtist, deleteArtistSkill, mode }) => {
  return (
    <div className="p-5 flex flex-row gap-3 justify-center flex-wrap">
      {artist.skills.map((skill) => {
        return (
          <div
            key={skill.id}
            className="bg-blue-700 flex flex-row rounded-full text-white text-sm self-center p-3"
          >
            {skill.name}
            {currArtist === artist.id && mode === EDIT ? (
              <button onClick={() => deleteArtistSkill(currArtist, skill.id)}>
                <X className="flex self-center ml-1" size={15} />
              </button>
            ) : (
              ""
            )}
          </div>
        );
      })}
      {currArtist === artist.id && mode === EDIT ? (
        <SkillsSelect artist={artist} />
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = ({ artists, currArtist, mode }) => {
  return { artists, currArtist, mode };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteArtistSkill: (artistId, skillId) => {
      dispatch(deleteArtistSkill(artistId, skillId));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ArtistSkills);
