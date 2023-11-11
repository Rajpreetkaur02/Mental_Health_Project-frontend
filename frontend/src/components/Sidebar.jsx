//import React from 'react'
import classes from "../styles/Sidebar.module.css";

import {
  BsGrid1X2Fill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill
} from "react-icons/bs";
import {TbMoodPlus} from "react-icons/tb";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function Sidebar({ openSidebar, sidebarHandler }) {
  return (
    <aside id={classes.sidebar} className={openSidebar ? classes["sidebar-responsive"] : ""}>
      <div className={classes["sidebar-title"]}>
        <div className={classes["sidebar-brand"]}>
          <VolunteerActivismIcon className={classes["icon_header"]} /> BeatIT
        </div>
        <span className={`${classes.icon} ${classes["close_icon"]}`} onClick={sidebarHandler}>
          <ArrowBackIosNewIcon />
        </span>
      </div>

      <ul className={classes["sidebar-list"]}>
        <li className={classes["sidebar-list-item"]}>
          <a href="">
            <BsGrid1X2Fill className={classes.icon} /> Dashboard
          </a>
        </li>
        {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Products
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Categories
                </a>
            </li> */}

        <li className={classes["sidebar-list-item"]}>
          <a href="">
            <BsListCheck className={classes.icon} /> Your Plan
          </a>
        </li>
        
        <li className={classes["sidebar-list-item"]}>
          <a href="">
            <TbMoodPlus className={classes.icon} /> Mood Tracker
          </a>
        </li>

        <li className={classes["sidebar-list-item"]}>
          <a href="">
            <BsPeopleFill className={classes.icon} /> Support Groups
          </a>
        </li>

        <li className={classes["sidebar-list-item"]}>
          <a href="">
            <BsMenuButtonWideFill className={classes.icon} /> Reports
          </a>
        </li>
        <li className={classes["sidebar-list-item"]}>
          <a href="">
            <BsFillGearFill className={classes.icon} /> Settings
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
