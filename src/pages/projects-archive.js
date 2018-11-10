import React from "react";
import TableOfContents from "../components/TableOfContents";
import { NavbarAlt } from "../components/Navbar";

export default () => (
  <>
    <NavbarAlt />
    <div className="table-of-projects">
      <TableOfContents all={true} />
    </div>
  </>
);
