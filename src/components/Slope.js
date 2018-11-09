import React from "react";
import classNames from "classnames";
import { ParallaxLayer } from "react-spring/dist/addons";

export default ({ offset, gradient, id }) => (
  <>
    <ParallaxLayer offset={offset} speed={0.2}>
      <div className="slopeBegin" id={id} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={-0.2}>
      <div className={classNames("slopeEnd", gradient)} />
    </ParallaxLayer>
  </>
);
