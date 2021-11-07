import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Dashboard</h2>
      </div>
      <ul className={styles.listItems}>
        <li>Home</li>
        <li>Avatar</li>
      </ul>
    </div>
  );
}

export default Navbar;
