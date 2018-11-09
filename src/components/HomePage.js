import React from "react";
import classNames from "classnames";
import { ParallaxLayer } from "react-spring/dist/addons";
import SocialLogos from "./SocialLogos";
import Slope from "./Slope";

import pic from "./images/pic.png";

export default ({
  offset,
  title,
  caption,
  first,
  second,
  gradient,
  gradient2,
  id
}) => (
  <>
    <Slope offset={offset} gradient={gradient} />

    <ParallaxLayer offset={offset} speed={0.2}>
      <div className="slopeBegin2" id={id} />
    </ParallaxLayer>
    <ParallaxLayer offset={offset} speed={-0.2}>
      <div className={classNames("slopeEnd2", gradient2)} />
    </ParallaxLayer>

    <ParallaxLayer className="text title" offset={offset} speed={0.3}>
      <span>{title}</span>
    </ParallaxLayer>

    <ParallaxLayer className="text header" offset={offset} speed={0.6}>
      <span>
        <p className="caption">{caption}</p>
        <div className={classNames("stripe", gradient)} />
        <p>{first}</p>
        <p className="second">{second}</p>
        <SocialLogos />
      </span>
    </ParallaxLayer>

    <ParallaxLayer className="pro-pic-layer" offset={offset} speed={0.5}>
      <img className="pro-pic" src={pic} alt="portrait of me" />
    </ParallaxLayer>
  </>
);
