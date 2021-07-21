import React from "react";

function ColorizedNumber({ numero }) {
  const isPrime = (numero) => {
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }

    return numero >= 2;
  };

  const isEven = (numero) => {
    return numero % 2 === 0;
  };

  const pickColor = () => {
    if (isPrime(numero)) {
      return "#ff5454";
    }

    if (isEven(numero)) {
      return "#64dc64";
    }

    return "#ecdb0a";
  };

  const color = pickColor(numero);
  const style = {
    backgroundColor: color,
    color: "#FFF",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "3em",
  };

  return <div style={style}>{numero}</div>;
}

export default ColorizedNumber;
