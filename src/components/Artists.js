import React, { Component } from "react";
import { connect } from "react-redux";
import { getArtists } from "../store/artists";
import { PhoneCall, Inbox } from "react-feather";

class Artists extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getArtists();
  }

  render() {
    const { artists } = this.props;
    return (
      <div className="absolute top-0 right-0 left-0 ml-40 p-10">
        <div className="text-5xl font-semibold">Acme Talent Agency</div>
        <div className="md:grid md:grid-cols-3 flex flex-col my-10 gap-10">
          {artists.map((artist) => {
            return (
              <div
                className="text-center border-2 border-neutral-200 rounded-md"
                key={artist.id}
              >
                <img
                  src={artist.avatarUrl}
                  className="w-32 m-auto my-5"
                  alt=""
                />
                <div className="text-2xl">{artist.name}</div>
                <div className="p-5 flex flex-row gap-3 justify-center flex-wrap">
                  {artist.skills.map((skill) => {
                    return (
                      <div
                        key={skill.id}
                        className="bg-violet-200 rounded-full text-sm self-center p-3"
                      >
                        {skill.name}
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
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArtists: () => {
      dispatch(getArtists());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
