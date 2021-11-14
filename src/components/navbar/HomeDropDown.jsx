import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function HomeDropDown({ homeIsActive, setHomeIsActive }) {
  const homeRef = useRef(null);
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (homeRef.current !== null && !homeRef.current.contains(e.target)) {
        setHomeIsActive(!homeIsActive);
      }
    };

    if (homeIsActive) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [homeIsActive]);
  return (
    <nav
      className={`menu ${homeIsActive ? "active" : "inactive"}`}
      ref={homeRef}
    >
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Home</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HomeDropDown;
