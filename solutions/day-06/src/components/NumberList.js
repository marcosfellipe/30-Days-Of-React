import React from "react";
import ColorizedNumber from "./ColorizedNumber";

function NumberList({ numeros }) {
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(8, 8em)",
    gridTemplateRows: "repeat(4, 8em)",
    gridGap: "2px",
    listStyle: "none",
    justifyContent: "center",
    padding: "3em 0",
  };

  const styleItem = {
    width: "100%",
  };
  return (
    <ul style={style}>
      {numeros.map((n) => (
        <li style={styleItem}>
          <ColorizedNumber numero={n} />
        </li>
      ))}
    </ul>
  );
}

export default NumberList;
