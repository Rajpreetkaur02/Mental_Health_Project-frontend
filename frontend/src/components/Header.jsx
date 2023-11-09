// import React from 'react'
import classes from "../styles/Header.module.css";

import {
  BsFillBellFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ sidebarHandler }) {
  return (
    <header className={classes.header}>
      <div className={classes["menu-icon"]}>
        <BsJustify className={classes.icon} onClick={sidebarHandler} />
      </div>
      <div className={classes["header-left"]}>
        <input type="text" placeholder="Search here..." name="" />
        <BsSearch className={classes.icon} />
      </div>
      <div className={classes["header-right"]}>
        <BsFillBellFill className={classes.icon} />
        <BsPersonCircle className={classes.icon} />
      </div>
    </header>
  );
}

export default Header;
