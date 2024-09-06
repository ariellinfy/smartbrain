import React from "react";
import Logo from "../Logo/Logo";
import "./Navigation.css";

const Navigation = ({ onRouteChange, isSignin }) => {
  if (isSignin) {
    return (
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        <p
          onClick={() => onRouteChange("signout")}
          className="link-btn f3 link white pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <Logo />
        <div style={{ display: "flex" }}>
          <p
            onClick={() => onRouteChange("signin")}
            className="link-btn f3 link white pa3 pointer"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="link-btn f3 link white pa3 pointer"
          >
            Register
          </p>
        </div>
      </nav>
    );
  }
};

export default Navigation;
