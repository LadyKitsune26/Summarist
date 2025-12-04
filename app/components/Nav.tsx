"use client";
import React from "react";

type NavProps = {
  onLogin?: () => void;
};

export default function Nav({ onLogin }: NavProps) {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <figure className="nav__img--mask">
          {/* Replace src with /assets/logo.png when you have the file */}
          <img className="nav__img" src="/logo.png" alt="logo" />
        </figure>

        <ul className="nav__list--wrapper">
          <li
            className="nav__list nav__list--login"
            onClick={() => { if (onLogin) onLogin(); }}
          >
            Login
          </li>
          <li className="nav__list nav__list--mobile">About</li>
          <li className="nav__list nav__list--mobile">Contact</li>
          <li className="nav__list nav__list--mobile">Help</li>
        </ul>
      </div>
    </nav>
  );
}
