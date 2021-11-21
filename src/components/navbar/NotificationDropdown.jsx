import React, { useEffect } from "react";
import cx from "classnames";
import styles from "./Navbar.module.css";

function NotificationDropdown({
  notificationRef,
  isNotificationActive,
  setIsNotificationActive,
  notiNavigation,
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
        isNotificationActive ? styles.active : null,
        styles.menu,
        styles.menuNotifications
      )}
    >
      <ul>
        {console.log(notiNavigation)}
        {notiNavigation
          ? notiNavigation.map((value) => (
              <li>{value.fname} has joined the crew</li>
            ))
          : null}
        <li>Through and let's do</li>
        <li>What we do in our imagination</li>
      </ul>
    </nav>
  );
}

export default NotificationDropdown;
