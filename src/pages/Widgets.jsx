import React, { useState } from "react";
import styles from "./Widgets.module.css";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import cx from "classnames";
import Modal from "./Modal";

function Widgets() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  // const [context, setCOntext] = useState()
  const menuItems = [
    {
      style: styles.cardOne,
      header: "26K",
      percent: "(-12.4%)",
      text: "Users",
      icon: <MoreVertOutlinedIcon />,
    },
    {
      style: styles.cardTwo,
      header: "$6.200",
      percent: "(40.9%)",
      text: "Income",
      icon: <MoreVertOutlinedIcon />,
    },
    {
      style: styles.cardThree,
      header: "12.49%",
      percent: "(84.7%)",
      text: "Conversion Ratio",
      icon: <MoreVertOutlinedIcon />,
    },
    {
      style: styles.cardFour,
      header: "$6.200",
      percent: "(40.9%)",
      text: "Sessions",
      icon: <MoreVertOutlinedIcon />,
    },
  ];

  const progressItems = [
    {
      style: styles.progressOne,
      header: "89.9%",
      details: "Widget title",
      text: "Widget helper text",
    },
    {
      style: styles.progressTwo,
      header: "$6.200",
      details: "Widget title",
      text: "Widget helper text",
    },
    {
      style: styles.progressThree,
      header: "12.49%",
      details: "Widget title",
      text: "Widget helper text",
    },
    {
      style: styles.progressFour,
      header: "$6.200",
      details: "Widget title",
      text: "Widget helper text",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.graphContainer}>
        <Modal
          open={modalOpen}
          setOpen={setModalOpen}
          modalPosition={modalPosition}
        />
        {menuItems.map((menuItem) => (
          <div
            key={menuItem.text}
            className={cx(styles.cardContainer, menuItem.style)}
          >
            <div className={styles.cardContent}>
              <div className={styles.details}>
                <h2 className={styles.detailHeader}>
                  {menuItem.header}
                  <p className={styles.percent}>{menuItem.percent}</p>
                </h2>
                <p className={styles.detailText}>{menuItem.text}</p>
              </div>
              <div
                className={styles.icon}
                onMouseDown={(e) => {
                  let x = e.clientX - 30;
                  let y = e.clientY + 10;
                  setModalPosition({ x, y });
                }}
                onClick={(e) => {
                  setModalOpen(true);
                }}
              >
                {menuItem.icon}
              </div>
            </div>
            <div className={styles.graphContent}></div>
          </div>
        ))}
      </div>
      <div className={styles.progressContainer}>
        {progressItems.map((menuItem) => (
          <div key={menuItem.header} className={styles.progressCardContainer}>
            <h2 className={styles.progressHeader}>{menuItem.header}</h2>
            <p className={styles.progressDetails}>{menuItem.details}</p>
            <div className={styles.progressBar}>
              <div className={cx(styles.progress, menuItem.style)}></div>
              <div className={styles.noProgress}></div>
            </div>
            <p className={styles.progressText}>{menuItem.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Widgets;
