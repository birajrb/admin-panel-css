import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import cx from "classnames";

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
      className={cx(homeIsActive ? styles.active : "inactive", styles.menu)}
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
