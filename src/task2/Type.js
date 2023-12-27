import React, { useEffect } from 'react';
import Typed from 'typed.js';
import '../assets/Type.css'
function Type() {
  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["WELCOME !!", "to my", "PORTFOLIO."],
      typeSpeed: 200,
      backSpeed: 10,
      showCursor: true
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typewriter">
      <h1><span className="auto-type"></span></h1>
    </div>
  );
}

export default Type;
