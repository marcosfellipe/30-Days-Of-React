import React from "react";
import { Color } from "./Color";

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

export function ColorList({ quantity }) {
  return (
    <ul className="color-list">
      {new Array(quantity).fill(null).map(() => {
        const hex = hexaColor();

        return (
          <li
            key={hex}
            className="color-list__item"
            style={{ backgroundColor: hex }}
          >
            <Color hex={hex} />
          </li>
        );
      })}
    </ul>
  );
}
