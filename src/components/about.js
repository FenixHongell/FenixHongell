import { TypeAnimation } from "react-type-animation";
import "../custom.css";
import * as React from "react";

function About() {
  return (
    <div className="flex-1 p-top-50 txt-center">
      <TypeAnimation
        sequence={[
          "Developer",
          1000,
          "Student",
          1000,
          "Problem Solver",
          1000,
          "Smart-ass",
          1000,
        ]}
        wrapper="div"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: "2em" }}
      />
      <article className="p-r-10 p-l-10">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper
          auctor congue. Ut vitae imperdiet diam. Maecenas vitae turpis ut orci
          euismod posuere sed non orci. Vivamus pretium arcu nibh, nec consequat
          ante tristique at. Vivamus finibus dignissim erat, in maximus nibh
          ornare posuere. Pellentesque vehicula tempus elementum. Aliquam erat
          volutpat. Sed ac massa quis nulla fermentum tristique ac nec purus.
          Duis at dui suscipit, ornare ex eget, ultrices purus.
        </p>
      </article>
    </div>
  );
}

export default About;
