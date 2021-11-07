import React, { useRef, useState } from "react";
import styles from "./Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import GroupIcon from "@mui/icons-material/Group";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import { useHistory } from "react-router-dom";

function Sidebar() {
  const history = useHistory();
  const reference = useRef(null);
  const [active, setActive] = useState(0);

  const menuItems = [
    { title: "Home", icon: <HomeIcon />, path: "/" },
    { title: "Create", icon: <CreateIcon />, path: "/create" },
    { title: "User", icon: <GroupIcon />, path: "/user" },
    { title: "Widgets", icon: <WidgetsIcon />, path: "/widgets" },
    { title: "Graph", icon: <ShowChartIcon />, path: "/graph" },
    { title: "Tables", icon: <TableChartIcon />, path: "/table" },
  ];

  const handleClick = (item, key) => {
    setActive(key);
    history.push(item.path);
  };
  return (
    <div className={styles.sidebar}>
      <div className={styles.titleContainer}>
        <div className={styles.spacing}></div>
        <div className={styles.title}>Admin Panel</div>
      </div>
      <div className={styles.sidebarItems}>
        <ul className={styles.itemsList} ref={reference}>
          {menuItems.map((item, key) => (
            <li
              key={key}
              className={active === key ? styles.active : null}
              onClick={() => handleClick(item, key)}
            >
              <div className={styles.spacing}></div>
              <div className={styles.icon}>{item.icon}</div>
              <div className={styles.itemTitle}>{item.title}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
