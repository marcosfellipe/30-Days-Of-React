import React from "react";
import asabenehImage from "../images/asabeneh.jpg";

export function UserCard({ skills }) {
  return (
    <section className="user-card">
      <img
        src={asabenehImage}
        alt="asabeneh avatar"
        className="user-card__avatar"
      />
      <p className="user-card__name">Asabeneh Yetayeh</p>
      <p>Senior Developer, Finland</p>
      <h2 className="user-card__skills-title">Skills</h2>
      <ul className="user-card__skills-list">
        {skills.map((skill) => (
          <li key={skill} className="user-card__skill">
            {skill}
          </li>
        ))}
      </ul>
      <p>Joined on Aug 30, 2020</p>
    </section>
  );
}
