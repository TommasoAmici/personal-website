import React from "react";

import gihtubLogo from "./images/github.png";
import inLogo from "./images/linkedin.png";
import emailLogo from "./images/email.png";

export default () => (
  <div>
    <a
      href="https://github.com/TommasoAmici"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={gihtubLogo} className="logo" alt="github logo" />
    </a>
    <a
      href="mailto:tommaso.amici@me.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={emailLogo} className="logo" alt="email logo" />
    </a>
    <a href="https://www.linkedin.com/in/tommasoamici/">
      <img src={inLogo} className="logo" alt="linkedin logo" />
    </a>
  </div>
);
