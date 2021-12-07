import { Avatar } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import React from "react";
import { useDataLayerValue } from "./DataLayer";
import "./Header.css";
function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header_left">
        <Search />
        <input
          placeholder="Search for Artists if you like so plases.."
          type="text"
        />
      </div>
      <div className="header_right">
        {/* https://yt3.ggpht.com/yti/APfAmoFNZ9Dg8xH3Z_Ls7p7fs0oBxyMA0GZPVSQDCULs_A=s88-c-k-c0x00ffffff-no-rj-mo */}
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
