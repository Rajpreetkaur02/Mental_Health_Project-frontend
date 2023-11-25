import React from "react";
import classes from "./BlogCard.module.css";
import image1 from "../../assets/blogImage.jpg";
import { Link } from "react-router-dom";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function BlogCard({id, image, title, upvoteCount, date}) {
  return (
    <div className={classes.blogCard}>
      <img src={image1} alt="blog" />
      <div className={classes.cardBottom}>
        <p>{date}</p>
        <p>
          <ThumbUpIcon fontSize="small" /> {upvoteCount} upvotes
        </p>
      </div>
      <h4>{title}</h4>

      <Link >
        Read <KeyboardDoubleArrowRightIcon />
      </Link>

    </div>
  );
}

export default BlogCard;
