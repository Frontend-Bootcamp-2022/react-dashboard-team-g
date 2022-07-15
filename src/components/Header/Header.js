import React from "react";
import HeaderTitle from "./HeaderItemTitle";
import Search from "../../components/Search/Search";
import NotificationBar from "../../components/NotificationBar/NotificationBar";
import Profile from "../../components/Profile/Profile";
import Button from "../../components/Button/Button";
import Filter from "../../components/Filter/Filter";
import styles from "./header.module.scss";

const Header = ({ value }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__top}>
        <HeaderTitle styles={styles} />
        <Search styles={styles} value={value} />
        <div className={styles.user}>
          <NotificationBar styles={styles} />
          <Profile styles={styles} />
        </div>
      </div>
      <div className={styles.header__bottom}>
        <Button styles={styles} />
        <Filter styles={styles} value={value} />
      </div>
    </div>
  );
};

export default Header;
