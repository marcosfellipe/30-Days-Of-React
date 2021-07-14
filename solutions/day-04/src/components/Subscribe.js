import React from "react";

export function Subscribe() {
  return (
    <section className="subscribe">
      <h1 className="subscribe__title">Subscribe</h1>
      <p className="subscribe__instruction">
        Sign up with your email address to receive news and updates.
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="subscribe__form">
        <input
          type="text"
          placeholder="First name"
          className="subscribe__input"
        />
        <input
          type="text"
          placeholder="Last name"
          className="subscribe__input"
        />
        <input type="email" placeholder="Email" className="subscribe__input" />
        <button type="submit" className="subscribe__submit">
          Subscribe
        </button>
      </form>
    </section>
  );
}
