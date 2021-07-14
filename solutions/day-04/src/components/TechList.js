import React from "react";
import { Tech } from "./Tech";

export function TechList({ techs }) {
  return (
    <ul style={{ display: "flex" }}>
      {techs.map((tech) => (
        <li key={tech.title}>
          <Tech {...tech} />
        </li>
      ))}
    </ul>
  );
}
