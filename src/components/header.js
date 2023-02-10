import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar"; //Importing like this because docs said it is more efficent
import Image from "react-bootstrap/Image";
import "../custom.css";
import Nav from "react-bootstrap/Nav";

function Header({ destinations, show }) {
  return (
    <Navbar
      variant="dark"
      fixed="top"
      className={`bg-blur ${show ? "phase-in" : "phase-out"}`}
    >
      <Navbar.Brand href={destinations.Main} className="p-l-10">
        Fenix Hongell
      </Navbar.Brand>
      <div className="lr p-r-10 font-s txt-white ">
        <Nav.Item className="m-r-1">
          <Nav.Link href={destinations.Contact}>Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item className="m-r-1">
          <Nav.Link href={destinations.Projects}>Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item className="m-r-1">
          <Nav.Link href={destinations.About}>About</Nav.Link>
        </Nav.Item>
      </div>
    </Navbar>
  );
}

export default Header;
