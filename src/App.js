import "./App.css";
import React, { useEffect } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  //const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const _hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = _hash.access_token;
    if (_token) {
      //setToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("The user", user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify
        .getUserPlaylists("31ril7qdmg7cj4wvnh7t6covfin4")
        .then((playlists) => {
          dispatch({
            type: "SET_PLAYLISTS",
            playlists: playlists,
          });
        });
      // change by id of playlists
      spotify.getPlaylist("6Oa8IhtqgdrOo8zgZybIlB?si").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
    console.log(token);
  }, [token, dispatch]);
  console.log("User", user);
  console.log("UserA", token);
  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
