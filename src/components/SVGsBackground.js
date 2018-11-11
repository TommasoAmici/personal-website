import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/dist/addons";

const getColor = () => {
  const colors = [
    "deeppink",
    "coral",
    "rgba(255, 200, 99, 0.925)",
    "rgb(80, 17, 131)",
    "SlateBlue",
    "DeepSkyBlue",
    "tomato",
    "gold",
    "rgb(161, 167, 108)",
    "rgb(54, 179, 54)"
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

const Cross = props => {
  const { size, transX, transY } = props;
  const color = getColor();
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 127 127"
      style={{ transform: `translate(${transX}px,${transY}px)` }}
    >
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M114,13 L13,114" stroke={color} strokeWidth="23" />
        <path d="M114,114 L13,13" stroke={color} strokeWidth="23" />
      </g>
    </svg>
  );
};

const Circle = props => {
  const { size, transX, transY } = props;
  const color = getColor();
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox={`0 0 ${size * 2} ${size * 2}`}
      style={{ transform: `translate(${transX}px,${transY}px)` }}
    >
      <circle cx={size} cy={size} r={size} color={color} fill={color} />
    </svg>
  );
};

const Square = props => {
  const { size, transX, transY } = props;
  const color = getColor();
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox={`0 0 ${size * 2} ${size * 2}`}
      style={{ transform: `translate(${transX}px,${transY}px)` }}
    >
      <rect height={size} width={size} color={color} fill={color} />
    </svg>
  );
};

class Layer extends React.Component {
  randSize = () => Math.floor(Math.random() * 50 + 1);
  randX = () => Math.floor(Math.random() * window.innerWidth + 1);
  randY = () => Math.floor(Math.random() * window.innerHeight + 1);
  render() {
    let layer = [];
    for (let j = 0; j < 3; j++) {
      layer.push(
        <Cross
          key={j + "a"}
          size={this.randSize()}
          transX={this.randX()}
          transY={this.randY()}
        />
      );
      layer.push(
        <Circle
          key={j + "b"}
          size={this.randSize()}
          transX={this.randX()}
          transY={this.randY()}
        />
      );
      layer.push(
        <Square
          key={j + "c"}
          size={this.randSize()}
          transX={this.randX()}
          transY={this.randY()}
        />
      );
    }
    return layer;
  }
}

const createLayers = () => {
  let layers = [];
  for (let i = 0; i < 30; i++) {
    const speed = (i + 1) / 10;
    layers.push(
      <ParallaxLayer offset={speed} speed={speed} key={i + "a"}>
        <Layer />
      </ParallaxLayer>
    );
  }
  return layers;
};

export default props => {
  const layers = createLayers();

  return (
    <div className="background-archive">
      <Parallax pages={1.5} offset={0} horizontal={false}>
        {layers}
        <ParallaxLayer offset={0.5} horizontal={false}>
          {props.children}
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
