import React from "react";
import { Helmet } from "react-helmet";
import { NavbarAlt } from "../components/Navbar";
import TableOfContentsBlog from "../components/TableOfContentsBlog";
import Background from "../components/SVGsBackground";
import "../style/App.scss";

export default () => (
  <div>
    <Helmet>
      <title>Archive</title>
      <meta name="description" content="Archive of all my blog posts" />
    </Helmet>

    <NavbarAlt />
    <Background>
      <div className="table-of-projects">
        <TableOfContentsBlog all={true} />
      </div>
    </Background>
  </div>
);
