import React, { useEffect } from "react";
import { Link } from "react-router-dom";

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

  return (
    <nav
      ref={profileDropdownRef}
      className={`menu ${isProfileActive ? "active" : "inactive"}`}
    >
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
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
