import React, { Component } from "react";
import { PhoneCall, Inbox, Edit, Check } from "react-feather";
import { connect } from "react-redux";
import { changeMode } from "../store/mode";
import { Link } from "react-router-dom";
import { changeCurrArtist } from "../store/currArtist";
import ArtistSkills from "./ArtistSkills";
const VIEW = "VIEW";
const EDIT = "EDIT";

class ArtistCard extends Component {
  constructor() {
    super();
  }

  render() {
    const { changeMode, currArtist, artist, mode } = this.props;
    return (
      <div className="relative text-center border-2 border-neutral-200 pb-20 rounded-md">
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
        <div>
          <ArtistSkills artist={artist} />
        </div>
        <div className="border-t-2 absolute left-0 right-0 bottom-0 border-neutral-200 mt-5">
          <div className="flex flex-row justify-around">
            <a
              className="flex flex-row p-5 w-full "
              href={`tel:${artist.phone}`}
            >
              <PhoneCall className="mr-2" />
              Call
            </a>
            <a
              className="flex flex-row p-5 w-full border-l-2"
              href={`mailto:${artist.email}`}
            >
              <Inbox className="mr-2" />
              Email
            </a>
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
    changeCurrArtist: (id) => {
      dispatch(changeCurrArtist(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ArtistCard);
