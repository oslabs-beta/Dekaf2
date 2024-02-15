import React from "react";

import styles from "./Header.module.css";

const Header = () => {
  const photoURL = localStorage.getItem("PhotoURL") || '';
  const displayName =  localStorage.getItem("displayName") || '';
  console.log(displayName)
  return (
    <div className={styles.header}>
      <img
        className={styles.logo}
        src="/dekaf-high-resolution-logo-transparent.png"
        alt=""
      />
      
      <div className={styles.userInfo}> <img className={styles.profilePic} src={photoURL} /> </div>
    </div>
  );
};

export default Header;
