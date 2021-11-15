import React from "react";
import styles from "./Table.module.css";
import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import cx from "classnames";

function Table() {
  const [data, setData] = useState([]);
  const handleDelete = (id) => {
    fetch("http://localhost:8000/details/" + id, {
      method: "DELETE",
    });

    const newData = data.filter((datum) => datum.id !== id);
    setData(newData);
  };

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
    <div className={styles.tableContainer}>
      <div className={styles.tableTitle}>
        <h2 className={styles.tableHeader}>Details</h2>
      </div>
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th className={styles.th}>First Name</th>
              <th className={styles.th}>Last Name</th>
              <th className={styles.th}>Username</th>
              <th className={styles.th}>Email</th>
              <th className={styles.th}>City</th>
              <th className={styles.th}>Country</th>
              <th className={styles.th}>Postal Code</th>
            </tr>
          </thead>
          {data.map((item) => (
            <tr className={styles.tr} key={item.id}>
              <td className={styles.td}>
                <div className={styles.overlay}>
                  <div
                    className={styles.deleteIcon}
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteIcon />
                  </div>
                </div>
                {item.fname}
              </td>
              <td className={styles.td}>{item.lname}</td>
              <td className={styles.td}>{item.username}</td>
              <td className={styles.td}>{item.email}</td>
              <td className={styles.td}>{item.city}</td>
              <td className={styles.td}>{item.country}</td>
              <td className={styles.td}>{item.postal}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Table;
