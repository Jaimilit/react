
import React from "react";


export default function Header() {
    return (
      <nav className="nav"> 
        <img src="./kettlebell.jpeg" alt="CrossFit Logo" className="title-image" />
        <h1 className ="title">Jaimi's CrossFit Box</h1>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        </nav>
    );
  }

