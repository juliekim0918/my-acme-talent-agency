import React, { Component } from "react";
import { connect } from "react-redux";
import { getArtists } from "../store/artists";
import ArtistCard from "./ArtistCard";
import { changeCurrArtist } from "../store/currArtist";

class Artists extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getArtists();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.match.params.id
        ? this.props.changeCurrArtist(this.props.match.params.id * 1)
        : this.props.changeCurrArtist(-1);
    }
  }

  render() {
    const { artists } = this.props;
    return (
      <div className="md:grid md:grid-cols-3 flex flex-col my-10 gap-10">
        {artists.map((artist) => {
          return <ArtistCard artist={artist} key={artist.id} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ artists, currArtist }) => {
  return { artists, currArtist };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArtists: () => {
      dispatch(getArtists());
    },
    changeCurrArtist: (id) => {
      dispatch(changeCurrArtist(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
