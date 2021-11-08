import React from "react";
import styles from "./Create.module.css";

export default function Create() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
