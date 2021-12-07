import { Grid, Slider } from "@material-ui/core";
import {
  PlayCircleOutline,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
  PlaylistPlay,
  VolumeDown,
} from "@material-ui/icons";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_left">
        <img
          className="footer_allogo"
          src="https://www.thelist.com/img/gallery/the-stunning-transformation-of-justin-bieber/l-intro-1630424593.jpg"
          alt=""
        />
        <div className="footer_songInfo">
          <h4>Year!</h4>
          <p>User</p>
        </div>
      </div>
      <div className="footer_center">
        <Shuffle className="footer_green" />
        <SkipPrevious className="footer_icon" />
        <PlayCircleOutline fontSize="large" className="footer_icon" />
        <SkipNext className="footer_icon" />
        <Repeat className="footer_green" />
      </div>
      <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
