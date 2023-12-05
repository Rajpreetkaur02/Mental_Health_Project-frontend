import React from "react";
import BlogCard from "../../components/BlogsPage/BlogCard";
import classes from "./BlogsPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
import blogs from "../../blogs.json";
import { useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";


function BlogsPage() {
  console.log(blogs);
  const navigate = useNavigate();

  function handleClick(){
    navigate('/uploadBlog')
  }

  return (
    <>
      <Navbar />
      <div className={classes.newBlogbtn}>
        <button onClick={handleClick}><MdAdd size={30}/> New Blog</button>
      </div>
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
