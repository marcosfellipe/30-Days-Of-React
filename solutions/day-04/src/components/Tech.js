import React from "react";

export function Tech({ title, src, alt }) {
  return (
    <div style={{ textAlign: "center" }}>
      <p>{title}</p>
      <img src={src} alt={alt} style={{ width: "200px" }} />
    </div>
  );
}
