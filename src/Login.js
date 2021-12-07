import React from "react";
import "./Login.css";
import { loginUrl } from "./Spotify";

function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <img
        src="https://i.pcmag.com/imagery/reviews/042FW7hC9vrGnoDea9LArXI-9.fit_scale.size_760x427.v1570669732.png"
        alt=""
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}
console.log("Click", loginUrl);
export default Login;
