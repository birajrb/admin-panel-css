import styles from "./Sidebar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import GroupIcon from "@mui/icons-material/Group";
import WidgetsIcon from "@mui/icons-material/Widgets";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import { useHistory, useLocation } from "react-router-dom";
import useWindowDimensions from "../cusom_hooks/useWindowDimensions";
import { useEffect, useRef } from "react";
import { ArrowBack } from "@mui/icons-material";
import cx from "classnames";
import { sliderClasses } from "@mui/material";

function Sidebar({ isOpen, setIsOpen }) {
  const history = useHistory();
  const location = useLocation();
  const { width } = useWindowDimensions();

  const sidebar = useRef(null);

  useEffect(() => {
    if (width >= 1390) setIsOpen(false);
  }, [width]);

  const menuItems = [
    { title: "Home", icon: <HomeIcon />, path: "/" },
    { title: "Create", icon: <CreateIcon />, path: "/create" },
    { title: "User", icon: <GroupIcon />, path: "/user" },
    { title: "Widgets", icon: <WidgetsIcon />, path: "/widgets" },
    { title: "Graph", icon: <ShowChartIcon />, path: "/graph" },
    { title: "Tables", icon: <TableChartIcon />, path: "/table" },
  ];

  const handleFade = (status) => {
    if (width <= 1390) {
      if (status) {
        sidebar.current.style.display = "block";
      } else {
        sidebar.current.style.transform = "translate(-250px,0)";
        let timer = setTimeout(() => {
          sidebar.current.style.display = "none";
          sidebar.current.style.transform = "translate(0,0)";
        }, 500);
        // timer();
        return () => clearTimeout(timer);
      }
    }
  };

  useEffect(() => {
    handleFade(isOpen);
  }, [isOpen]);

  return (
    <div className={cx(styles.sidebar)} ref={sidebar}>
      <div className={styles.titleContainer}>
        <div className={styles.spacing}></div>
        <div className={styles.title}>Admin Panel</div>
        <ArrowBack
          style={width <= 1390 ? { display: "block" } : { display: "none" }}
          onClick={() => setIsOpen(false)}
          className={styles.icons}
        />
      </div>
      <div className={styles.sidebarItems}>
        <ul className={styles.itemsList}>
          {menuItems.map((item, key) => (
            <li
              key={key}
              className={location.pathname === item.path ? styles.active : null}
              onClick={() => {
                history.push(item.path);
                // setIsOpen(false);
              }}
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
