import React, { useRef, useState } from "react";
import styles from "./Navbar.module.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import "./custom.css";
import ProfileDropdown from "./ProfileDropdown";
import NotificationDropdown from "./NotificationDropdown";
import HomeDropDown from "./HomeDropDown";
import cx from "classnames";

function Navbar({ notiNavigation }) {
  const profileDropdownRef = useRef(null);
  const [isProfileActive, setIsProfileActive] = useState(false);

  const notificationRef = useRef(null);
  const [isNotificationActive, setIsNotificationActive] = useState(false);

  const homeRef = useRef(null);
  const [homeIsActive, setHomeIsActive] = useState(false);

  const handleProfile = () => {
    setIsProfileActive(!isProfileActive);
  };

  const handleNotification = () => {
    setIsNotificationActive(!isNotificationActive);
  };

  const handleHome = () => {
    setHomeIsActive(!homeIsActive);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Dashboard</h2>
      </div>
      <ul className={styles.listItems}>
        <li className={styles.listElements}>
          <HomeIcon
            className={cx(
              styles.icons,
              homeIsActive ? styles.clickActive : null
            )}
            fontSize="large"
            onClick={handleHome}
          />
          <HomeDropDown
            homeIsActive={homeIsActive}
            setHomeIsActive={setHomeIsActive}
          />
        </li>
        <li className={styles.listElements}>
          <NotificationsIcon
            className={cx(
              styles.icons,
              isNotificationActive ? styles.clickActive : null
            )}
            fontSize="large"
            onClick={handleNotification}
          />
          <div className={styles.notify}>{notiNavigation.length}</div>
          <NotificationDropdown
            notiNavigation={notiNavigation}
            notificationRef={notificationRef}
            isNotificationActive={isNotificationActive}
            setIsNotificationActive={setIsNotificationActive}
          />
        </li>
        <li className={styles.listElements}>
          <PersonIcon
            className={cx(
              styles.icons,
              isProfileActive ? styles.clickActive : null
            )}
            fontSize="large"
            onClick={handleProfile}
          />
          <ProfileDropdown
            profileDropdownRef={profileDropdownRef}
            isProfileActive={isProfileActive}
            setIsProfileActive={setIsProfileActive}
          />
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
