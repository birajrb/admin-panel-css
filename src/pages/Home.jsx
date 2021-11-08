import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";

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
    <div>
      <div>
        <table className={styles.table}>
          <thead className={styles.headerDetails}>
            <tr>
              <td className={styles.details} rowspan="4">
                Details
              </td>
            </tr>
          </thead>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Home;
