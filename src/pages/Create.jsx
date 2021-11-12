import React, { useState } from "react";
import { useHistory } from "react-router";
import styles from "./Create.module.css";
import "./custom.css";
import cx from "classnames";

export default function Create() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postal, setPostal] = useState("");

  const [error, setError] = useState({});

  const history = useHistory();

  const handleSubmit = (e) => {
    console.log(fname, lname, username, email);
    setError({});
    e.preventDefault();
    var err = {};
    if (fname === "") {
      err["fname"] = true;
    }
    if (lname === "") {
      err["lname"] = true;
    }
    if (username === "") {
      err["username"] = true;
    }
    if (email === "") {
      err["email"] = true;
    }
    if (city === "") {
      err["city"] = true;
    }
    if (country === "") {
      err["country"] = true;
    }
    if (postal === "") {
      err["postal"] = true;
    }
    setError(err);
    console.log(err);
    if (Object.keys(err).length === 0) {
      console.log("submitted");
      fetch("http://localhost:8000/details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          username,
          email,
          city,
          country,
          postal,
        }),
      })
        .then((res) => {
          console.log(res);
          history.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleFollow = (e) => {
    const button = document.getElementById("btnTwo");

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    button.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);

    // const win = window.open("https://twitter.com/birajrb23", "_blank");
    // win.focus();
  };

  const handleAnimation = (e) => {
    const buttons = document.getElementById("btn", "btnTwo");

    let x = e.clientX - e.target.offsetLeft;
    let y = e.clientY - e.target.offsetTop;

    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";
    buttons.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.editProfile}>
          <h2 className={styles.editHeader}>Edit Profile</h2>
          <p className={styles.editPara}>Complete your profile</p>
        </div>
        <form
          className={styles.forms}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className={styles.formWrapper}>
            <div className={styles.formGroup}>
              <input
                className={cx(styles.inputs, error.fname ? styles.error : null)}
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
            <div className={cx(styles.formGroup, styles.formGroupRight)}>
              <input
                className={cx(styles.inputs, error.lname ? styles.error : null)}
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
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.formGroup}>
              <input
                className={cx(
                  styles.inputs,
                  error.username ? styles.error : null
                )}
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
            <div className={cx(styles.formGroup, styles.formGroupRight)}>
              <input
                className={cx(styles.inputs, error.email ? styles.error : null)}
                type="email"
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
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.formGroup}>
              <input
                className={cx(styles.inputs, error.city ? styles.error : null)}
                type="text"
                id="city"
                name="city"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              ></input>
              <label for="city" className={styles.labels}>
                City
              </label>
            </div>
            <div className={cx(styles.formGroup, styles.formGroupRight)}>
              <input
                className={cx(
                  styles.inputs,
                  error.country ? styles.error : null
                )}
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              ></input>
              <label for="country" className={styles.labels}>
                Country
              </label>
            </div>
            <div className={cx(styles.formGroup, styles.formGroupRight)}>
              <input
                className={cx(
                  styles.inputs,
                  error.postal ? styles.error : null
                )}
                type="text"
                id="postal"
                name="postal"
                placeholder="Postal"
                value={postal}
                onChange={(e) => setPostal(e.target.value)}
              ></input>
              <label for="postal" className={styles.labels}>
                Postal
              </label>
            </div>
          </div>

          <button id="btn" className={styles.btn} onClick={handleAnimation}>
            Submit
          </button>
        </form>
      </div>
      <div className={styles.card}>
        <div className={styles.cardImg}>
          <img
            className={styles.img}
            src="https://c4.wallpaperflare.com/wallpaper/754/541/105/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg"
            alt="user-image"
          ></img>
        </div>
        <p className={styles.title}>CEO/ CO-Founder</p>
        <p className={styles.titleName}>Biraj Rajbhandari</p>
        <p className={styles.quote}>
          I love heroes, but I don’t want to be one. Do you even know what a
          hero is!? For example, you have some meat. Pirates will feast on the
          meat, but the hero will distribute it among the people! I want to eat
          meat!
        </p>
        <button id="btnTwo" className={styles.btnTwo} onClick={handleFollow}>
          Follow
        </button>
      </div>
    </div>
  );
}
