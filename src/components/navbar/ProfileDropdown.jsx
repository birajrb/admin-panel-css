import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./Navbar.module.css";
import cx from "classnames";

function ProfileDropdown({
  profileDropdownRef,
  isProfileActive,
  setIsProfileActive,
}) {
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        profileDropdownRef.current !== null &&
        !profileDropdownRef.current.contains(e.target)
      ) {
        setIsProfileActive(!isProfileActive);
      }
    };
    if (isProfileActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isProfileActive]);
  const history = useHistory();
  const handleNavigation = (path) => {
    setIsProfileActive(false);
    history.push(path);
  };

  return (
    <nav
      ref={profileDropdownRef}
      className={cx(isProfileActive ? styles.active : "inactive", styles.menu)}
    >
      {console.log(isProfileActive)}
      <ul>
        <li onClick={() => handleNavigation("/profile")}>
          {/* <Link to="/profile">Profile</Link> */}Profile
        </li>
        <li>
          <Link to="/settings">Settings</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default ProfileDropdown;
