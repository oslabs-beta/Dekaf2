import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  const photoURL = localStorage.getItem("PhotoURL") || null;
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="/dekaf-high-resolution-logo-transparent.png"
        alt=""
      />
      {/* <img src={photoURL} /> */}
      <div className={styles.userInfo}> User Info</div>
    </div>
  );
};

export default Header;
