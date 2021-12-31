const CHANGE_CURR_ARTIST = "CHANGE_CURR_ARTIST";

export const changeCurrArtist = (id) => {
  return {
    type: CHANGE_CURR_ARTIST,
    id,
  };
};

export default (state = -1, action) => {
  switch (action.type) {
    case CHANGE_CURR_ARTIST:
      return action.id;
    default:
      return state;
  }
};
