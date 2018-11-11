import React from "react";
import { NavbarAlt } from "../components/Navbar";
import TableOfContentsBlog from "../components/TableOfContentsBlog";
import TableOfContents from "../components/TableOfContents";
import Background from "../components/SVGsBackground";

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
