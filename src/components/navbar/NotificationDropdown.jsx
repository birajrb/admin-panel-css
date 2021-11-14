import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import styles from "./Navbar.module.css";

function NotificationDropdown({
  notificationRef,
  isNotificationActive,
  setIsNotificationActive,
}) {
  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        notificationRef.current !== null &&
        !notificationRef.current.contains(e.target)
      ) {
        setIsNotificationActive(!isNotificationActive);
      }
    };

    if (isNotificationActive) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isNotificationActive]);

  return (
    <nav
      ref={notificationRef}
      className={cx(
        `menu ${isNotificationActive ? "active" : "inactive"}`,
        styles.menuNotifications
      )}
    >
      <ul>
        <li>
          <Link>This is notificLinktion</Link>
        </li>
        <li>
          <Link>This is Settings</Link>
        </li>
        <li>
          <Link>This is Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NotificationDropdown;
