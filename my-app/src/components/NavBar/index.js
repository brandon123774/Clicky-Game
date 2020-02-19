import React from "react";

function Navbar({ message, score, highScore }) {
  return (
    <nav className="nav">
      <ul className="nav-name">
        <li className="nav-next">
          <a
            className="nav-game"
            href="/"
          >
            Digimon <br />
            Memory Game
          </a>
        </li>
        <li
          id="animation-here"
          className="animate"
        >
          {message}
        </li>
        <li className="score">
          Score: {score} | High Score: {highScore}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;