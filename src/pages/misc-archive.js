import React from "react";
import { NavbarAlt } from "../components/Navbar";
import TableOfContentsBlog from "../components/TableOfContentsBlog";
import Background from "../components/SVGsBackground";
import "../style/App.scss";

export default () => (
  <>
    <NavbarAlt />
    <Background>
      <div className="table-of-projects">
        <TableOfContentsBlog all={true} />
      </div>
    </Background>
  </>
);
