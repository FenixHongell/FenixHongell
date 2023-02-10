//#region imports
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Header from "../components/header";
import "../custom.css";
import headImage from "../headImage.jpg";
import About from "../components/about";
import placeHolderPerson from "../placeholder-person.jpg";
import Projects from "../components/projects";
import Contact from "../components/contact";
import BehindImg from "../behind.jpg";
import Behind from "../components/behind";
//#endregion

const paths = {
  About: "#about",
  Contact: "#contact",
  Projects: "#projects",
  Main: "#main",
};

const IndexPage = () => {
  const [showHeader, setShowHeader] = React.useState(false);
  const updateScrollDirection = () => {
    const newScrollY = window.pageYOffset;
    if (newScrollY > 100) {
      setShowHeader(true);
      console.log("scroll");
    } else {
      setShowHeader(false);
    }
  };

  window.addEventListener("scroll", updateScrollDirection);

  return (
    <div>
      <Header destinations={paths} show={showHeader} />
      <div>
        <Image id="main" fluid={true} src={headImage}></Image>
      </div>
      <div className="dis-flex height-screen">
        <div className="flex-1 d-none d-lg-block">
          <Image id="about" fluid={true} src={placeHolderPerson}></Image>
        </div>
        <About />
      </div>
      <Projects />
      <Contact />
      <div className="dis-flex height-screen ">
        <div className="flex-1 d-none d-lg-block ">
          <Image fluid={true} src={BehindImg}></Image>
        </div>
        <Behind />
      </div>
      <p className="m-top-5">Copyright © 2203 Fenix Hongell</p>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
