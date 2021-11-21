import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import cx from "classnames";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/details")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((data) => setData(data));

    console.log(data);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <div className={styles.cardRow}>
          <div className={cx(styles.card, styles.cardFirst)}>
            <div className={styles.description}>
              <div className={cx(styles.icon, styles.iconOne)}>
                <StorageOutlinedIcon fontSize="large" />
              </div>
              <p className={styles.descPara}>Used Space</p>
              <p className={styles.descDetail}>50 GB</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.description}>
              <div className={cx(styles.icon, styles.iconTwo)}>
                <HomeOutlinedIcon fontSize="large" />
              </div>
              <p className={styles.descPara}>Revenue</p>
              <p className={styles.descDetail}>$34500</p>
            </div>
          </div>
        </div>
        <div className={styles.cardRow}>
          <div className={styles.card}>
            <div className={styles.description}>
              <div className={cx(styles.icon, styles.iconThree)}>
                <ReportGmailerrorredOutlinedIcon fontSize="large" />
              </div>
              <p className={styles.descPara}>Fixed Issues</p>
              <p className={styles.descDetail}>75</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.description}>
              <div className={cx(styles.icon, styles.iconFour)}>
                <EmojiPeopleOutlinedIcon fontSize="large" />
              </div>
              <p className={styles.descPara}>Followers</p>
              <p className={styles.descDetail}>+245</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tableContainer}>
        <div className={styles.tableTitle}>
          <h2 className={styles.tableHeader}>Details</h2>
        </div>
        <div className={styles.wrapper}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.tr}>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Username</th>
                <th className={styles.th}>Email</th>
              </tr>
            </thead>
            {data.map((item) => (
              <tr className={styles.tr} key={item.id}>
                <td className={styles.td}>
                  {item.fname} {item.lname}
                </td>
                <td className={styles.td}>{item.username}</td>
                <td className={styles.td}>{item.email}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
