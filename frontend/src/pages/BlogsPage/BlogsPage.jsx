import React, {useState, useEffect} from "react";
import BlogCard from "../../components/BlogsPage/BlogCard";
import classes from "./BlogsPage.module.css";
import Navbar from "../../components/Navbar/Navbar";
// import blogs from "../../blogs.json";
import { useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";


function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log(blogs);
  const navigate = useNavigate();

  function handleClick(){
    navigate('/uploadBlog')
  }

  const fetchData = () => {
    fetch('http://localhost:8080/blog/allPosts',{
        crossDomain: true,
        headers: {
            'Content-Type':'application/json',
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",  
            'Authorization': `Bearer ${localStorage.getItem('token')}`       
        },    
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setBlogs(data);
    });
}

useEffect(() => { 
  fetchData();
  setLoading(true);
  setTimeout(() => {
      setLoading(false);
  }, 1000);
},[]) 

  console.log(blogs)
  return (
    <>
      <Navbar />
      {loading ? (
      <div className="loader-container">
          <div className="spinner"></div>
      </div>) : (
        <>
        <div className={classes.newBlogbtn}>
          <button onClick={handleClick}><MdAdd size={30}/> New Blog</button>
        </div>
        <div className={classes.blogsWrapper}>
          {blogs.map((blog) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              image={blog.img}
              title={blog.title}
              content={blog.content}
              date={blog.date}
              upvoteCount={blog.upvoteCount}
            />
          ))}
      </div>
        </>
      )}
    </>
  );
}

export default BlogsPage;
