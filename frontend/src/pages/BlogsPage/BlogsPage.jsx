import React from "react";
import BlogCard from "../../components/BlogsPage/BlogCard";
import classes from "./BlogsPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import blogs from "../../blogs.json";

function BlogsPage() {
  console.log(blogs);

  return (
    <>
      <Navbar />
      <div className={classes.blogsWrapper}>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            image={blog.image}
            title={blog.title}
            content={blog.content}
            date={blog.date}
            upvoteCount={blog.upvoteCount}
          />
        ))}
      </div>
    </>
  );
}

export default BlogsPage;
