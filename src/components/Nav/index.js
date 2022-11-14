import React from "react";
// import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
// import { Container, Row, Col } from "react-bootstrap";

function Nav() {


  return (
    <header className="flex-row px-1">
     <nav>
      <h1>
        <Link to="/">
          <h1>ROSKI JEWLRY</h1>
        </Link>
      </h1>

      
      </nav>
    </header>
  );
}

export default Nav;
