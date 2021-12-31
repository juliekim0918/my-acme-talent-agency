import React, { Component } from "react";
import { PhoneCall, Inbox, Edit, Check, X } from "react-feather";
import { connect } from "react-redux";
import { changeMode } from "../store/mode";
import { Link } from "react-router-dom";
import { deleteArtistSkill } from "../store/artists";
import { changeCurrArtist } from "../store/currArtist";
const VIEW = "VIEW";
const EDIT = "EDIT";

class ArtistCard extends Component {
  constructor() {
    super();
  }
  componentDidUpdate(prevProps, prevState) {
    // if (
    //   this.props.mode === VIEW &&
    //   prevProps.mode !== VIEW &&
    //   prevProps.currArtist === this.props.currArtist
    // ) {
    //   this.props.changeCurrArtist(-1);
    //   console.log("COMPONENT UPDATED");
    // }
  }

  render() {
    const { changeMode, deleteArtistSkill, currArtist, artist, mode } =
      this.props;
    console.log(currArtist, "this is the currentArtist!!!!");
    return (
      <div className="relative text-center border-2 border-neutral-200 rounded-md">
        <button
          className="absolute right-0 bg-light-grey rounded-md max-w-max p-2 m-3 h-fit"
          onClick={() => {
            if (currArtist === -1 || currArtist === artist.id) {
              changeMode(mode === VIEW ? EDIT : VIEW);
            }
            changeCurrArtist(artist.id);
          }}
        >
          {currArtist === artist.id && mode === EDIT ? (
            <Link to="/">
              <Check />
            </Link>
          ) : (
            <Link to={`/clients/${artist.id}`}>
              <Edit />
            </Link>
          )}
        </button>

        <img src={artist.avatarUrl} className="w-32 m-auto my-5" alt="" />
        <div className="text-2xl">{artist.name}</div>
        <div className="p-5 flex flex-row gap-3 justify-center flex-wrap">
          {artist.skills.map((skill) => {
            return (
              <div
                key={skill.id}
                className="bg-blue-700 flex flex-row rounded-full text-white text-sm self-center p-3"
              >
                {skill.name}
                {currArtist === artist.id && mode === EDIT ? (
                  <button
                    onClick={() => deleteArtistSkill(currArtist, skill.id)}
                  >
                    <X className="flex self-center ml-1" size={15} />
                  </button>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
        <div className="border-t-2 border-neutral-200 mt-5">
          <div className="flex flex-row justify-around">
            <div className="flex flex-row p-5 w-full ">
              <PhoneCall className="mr-2" />
              Call
            </div>
            <div className="flex flex-row p-5 w-full border-l-2">
              <Inbox className="mr-2" />
              Email
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ artists, currArtist, mode }) => {
  return { artists, currArtist, mode };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeMode: (view) => {
      dispatch(changeMode(view));
    },
    deleteArtistSkill: (artistId, skillId) => {
      dispatch(deleteArtistSkill(artistId, skillId));
    },
    changeCurrArtist: (id) => {
      dispatch(changeCurrArtist(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ArtistCard);
