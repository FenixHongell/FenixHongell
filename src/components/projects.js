import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../custom.css";
import Carousel from "react-bootstrap/Carousel";
import Education from "../education.jpg";
import Site from "../site.jpg";

function Projects() {
  return (
    <div>
      <h1 className="txt-center m-top-5">My work</h1>
      <Carousel
        className="height-screen txt-black border-up m-top-5"
        variant="dark"
        id="projects"
      >
        <Carousel.Item>
          <img src={Site} className="scaleToScreen"></img>
          <Carousel.Caption>
            <h2>Little Lemon Cafe Capstone</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nunc tortor, sagittis eu imperdiet sit amet, lacinia non est.
              Mauris erat arcu, varius nec justo eu, vestibulum viverra orci.
              Aenean molestie lorem eget lectus dignissim, vel mollis arcu
              luctus.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Education} className="scaleToScreen"></img>
          <Carousel.Caption>
            <h2>Programming tutor</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              nunc tortor, sagittis eu imperdiet sit amet, lacinia non est.
              Mauris erat arcu, varius nec justo eu, vestibulum viverra orci.
              Aenean molestie lorem eget lectus dignissim, vel mollis arcu
              luctus.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Projects;
