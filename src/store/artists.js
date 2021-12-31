import axios from "axios";
import { getSkills } from "./skills";

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

export const deleteArtistSkill = (artistId, skillId) => {
  return async (dispatch) => {
    await axios.delete(`/api/artists/${artistId}/${skillId}`);
    const { data: artists } = await axios.get("/api/artists");
    dispatch(_getArtists(artists));
  };
};

export const addArtistSkill = (artistId, skillId) => {
  return async (dispatch) => {
    await axios.put(`/api/artists/${artistId}/${skillId}`);
    const { data: artists } = await axios.get("/api/artists");
    dispatch(_getArtists(artists));
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
