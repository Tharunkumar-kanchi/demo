import React from "react";
import { Link } from "react-router-dom";
export function Links() {
  return (
    <div className="links">
      <b>Pages</b>
      <br />
      <Link className="linkStyle" to="/Calculator">
        Calculator
      </Link>
      <br />
      <Link className="linkStyle" to="/Movies">
        Movies
      </Link>
      <br />
      <Link className="linkStyle" to="/parentToChildComponent">
        parentToChildComponent
      </Link>
      <br />
      <Link className="linkStyle" to="/ChildToParentComponent">
        ChildToParentComponent
      </Link>
      <br />
      <Link className="linkStyle" to="/childToChildComponent">
        childToChildComponent
      </Link>
      <br />
      <Link className="linkStyle" to="/events">
        events
      </Link>
      <br />
      <Link className="linkStyle" to="/Counters">
        Counters
      </Link>
      <br />
      <Link className="linkStyle" to="/Login">
        login
      </Link>
      <br />
      <Link className="linkStyle" to="/get-api">
        Get Api Call
      </Link>
      <br />
      {/* <Link className="linkStyle" to="/slider">
        slider
      </Link>
      <br /> */}
    </div>
  );
}
