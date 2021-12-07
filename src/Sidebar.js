import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { Search, Home, LibraryMusic, Add, Favorite } from "@material-ui/icons";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log("Playlists, with dispatch", playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"
        alt=""
      />
      <SidebarOption Icon={Home} title="Home" />
      <SidebarOption Icon={Search} title="Search" />
      <SidebarOption Icon={LibraryMusic} title="Your Library" />
      <br />
      <SidebarOption Icon={Add} title="Create Playlist" />
      <SidebarOption Icon={Favorite} title="Liked Songs" />
      <br />
      <strong className="sidebar_title">PLAYLISTS</strong>
      <hr />
      {/* this line not work */}
      {playlists?.items?.map((play) => (
        <SidebarOption title={play.name} />
      ))}
      {/* this line not work */}
    </div>
  );
}

export default Sidebar;
