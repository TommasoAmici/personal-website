import React from "react";
import { Helmet } from "react-helmet";
import TableOfContents from "../components/TableOfContents";
import { NavbarAlt } from "../components/Navbar";
import Background from "../components/SVGsBackground";
import "../style/App.scss";

export default () => (
  <div>
    <Helmet>
      <title>Projects Archive</title>
      <meta name="description" content="Archive of all my projects" />
    </Helmet>

    <NavbarAlt />
    <Background>
      <div className="table-of-projects">
        <TableOfContents all={true} />
      </div>
    </Background>
  </div>
);
