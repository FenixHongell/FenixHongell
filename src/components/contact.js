import "../custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";

function Contact() {
  return (
    <div className="height-screen txt-center txt-white bg-dark">
      <h2 id="contact" className="f-size-2 m-top-5 ">
        Contact & Languages
      </h2>
      <div className="dis-flex">
        <div className="flex-1 p-top-50 ">
          <h3>Languages</h3>
          <p>Swedish A</p>
          <p>English A</p>
          <p>Finnish B</p>
          <p>German C</p>
        </div>
        <div className="flex-1 p-top-50 ">
          <h3>Contact</h3>
          <p>Email: fenixhongell.business@gmail.com</p>
          <p>Phone Number: +358 40 0380192</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
