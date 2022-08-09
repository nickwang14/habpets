import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderButton from "./HeaderButton";
import "./Header.css";

function Header(props) {
  return (
    <div className="Header">
      <h1>{props.title}</h1>
      <nav>
        <Link to="/p1">
          <HeaderButton txt={"page 1"} />
        </Link>
        <Link to="/p2">
          <HeaderButton txt={"page 2"} />
        </Link>
        <Link to="/p3">
          <HeaderButton txt={"page 3"} />
        </Link>
      </nav>
    </div>
  );
}

export default Header;
