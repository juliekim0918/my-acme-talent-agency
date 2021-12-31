import axios from "axios";

const GET_ARTISTS = "GET_ARTISTS";

const _getArtists = (artists) => {
  return {
    type: GET_ARTISTS,
    artists,
  };
};

export const getArtists = () => {
  return async (dispatch) => {
    const { data } = await axios.get("/api/artists");
    dispatch(_getArtists(data));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_ARTISTS:
      return action.artists;
    default:
      return state;
  }
};
