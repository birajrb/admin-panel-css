import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "./Create.module.css";

export default function Create() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    console.log(fname, lname, username, email);
    e.preventDefault();
    fetch("http://localhost:8000/details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fname, lname, username, email }),
    }).then(() => history.push("/"));
  };

  // const handleAnimation = () => {
  //   const buttons = document.querySelectorAll(".btn");
  //   buttons.addEventListener("click", function (e) {
  //     let x = e.clientX - e.target.offsetLeft;
  //     let y = e.clientY - e.target.offsetTop;

  //     let ripples = document.createElement("span");
  //     ripples.style.left = x + "px";
  //     ripples.style.top = y + "px";
  //     this.appendChild(ripples);

  //     setTimeout(() => {
  //       ripples.remove();
  //     }, 1000);
  //   });
  // };

  return (
    <div className={styles.container}>
      <form className={styles.forms} autoComplete="off" onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            className={styles.inputs}
            type="text"
            id="fname"
            name="firstname"
            placeholder="First Name"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          ></input>
          <label for="fname" className={styles.labels}>
            First Name
          </label>
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.inputs}
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          ></input>
          <label for="lastname" className={styles.labels}>
            Last Name
          </label>
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.inputs}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label for="username" className={styles.labels}>
            Username
          </label>
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.inputs}
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label for="email" className={styles.labels}>
            Email
          </label>
        </div>
        <button className={styles.btn}>Submit</button>
      </form>
    </div>
  );
}
