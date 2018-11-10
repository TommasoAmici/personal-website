import React from "react";
import { NavbarAlt } from "../components/Navbar";
import TableOfContentsBlog from "../components/TableOfContentsBlog";

export default () => (
  <>
    <NavbarAlt />
    <div className="table-of-projects">
      <TableOfContentsBlog all={true} />
    </div>
  </>
);
