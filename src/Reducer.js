export const initialState = {
  user: null,
  playlists: [],
  // discover_weekly: [],
  playing: false,
  item: null,
  //remove after finished
  // token:
  // "BQBcdxFkcce5uj3_ZSH-pEEud-y7U81Adw-Hs48xha6pEYv39jYXbb65tT8CxYWDYOeqzego_i8eOIZs2ocVVNUM_nI6GiSN2Xe8sbUB4I5Z4uPLoIn5bVPH-1xhOGPTwYONS1O5lYNDxkiWedLjbnNENDMmyBG51iJHjof_W3hPiIeGArXzs4f1Y-H-tv0",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};
export default reducer;
