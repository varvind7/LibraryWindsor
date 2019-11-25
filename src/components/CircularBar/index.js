import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularBar = props => {
  let txt = `${props.percentage}%  ` + `${props.emotion}`;
  return (
    <span>
      <CircularProgressbar
        value={props.percentage}
        text={txt}
        styles={{
          // Customize the root svg element
          root: {
            width: "110px",
            padding: "7.5px"
          },
          // Customize the path, i.e. the "completed progress"
          path: {
            // Path color
            stroke: `rgba(62, 152, 199, ${props.percentage / 100})`,
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Customize transition animation
            transition: "stroke-dashoffset 0.5s ease 0s",
            // Rotate the path
            transform: "rotate(0.25turn)",
            transformOrigin: "center center"
          },

          // Customize the text
          text: {
            // Text color
            fill: "#f88",
            // Text size
            fontSize: "14px"
          },
          // Customize background - only used when the `background` prop is true
          background: {
            fill: "#3e98c7"
          }
        }}
      />
    </span>
  );
};

export default CircularBar;
