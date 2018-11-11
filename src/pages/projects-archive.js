import React from "react";
import TableOfContents from "../components/TableOfContents";
import { NavbarAlt } from "../components/Navbar";
import Background from "../components/SVGsBackground";
import "../style/App.scss";

export default () => (
  <>
    <NavbarAlt />
    <Background>
      <div className="table-of-projects">
        <TableOfContents all={true} />
      </div>
    </Background>
  </>
);
