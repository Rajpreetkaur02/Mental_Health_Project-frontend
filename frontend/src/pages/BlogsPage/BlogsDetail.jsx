import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { formatISO9075, formatISO } from 'date-fns';
import { differenceInMinutes, formatDistanceToNow } from 'date-fns';
import Navbar from '../../components/Navbar/Navbar';
import "./BlogDetails.css"

function BlogsDetail() {
  const [blogDetails, setblogdetails] = useState([]);
  const [imageSrc, setImageSrc] = useState(null);
  const id = useParams();

  const formatTimestamp = (timestamp) => {
    const difference = differenceInMinutes(new Date(), new Date(timestamp));
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/blog/post/${id.id}`, {
          crossDomain: true,
          headers: {
            'Content-Type':'application/json',
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",  
            'Authorization': `Bearer ${localStorage.getItem('token')}`       
          },
        });
        const data = await response.json();
        setblogdetails(data)
        if (data.img) {
          data.timestamp = formatTimestamp(data.timestamp)
          const imageUrl = `data:image/png;base64,${data.img.data}`;
          setImageSrc(imageUrl);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

console.log(blogDetails)
  return (
    <>
    <Navbar/>
    <div>
    <div className="banner">
        <img src={imageSrc}/>
    </div>
    <div class="blog">
        <h1 class="postTitle">{blogDetails.title}</h1>
        <p class="published"><span>{blogDetails.author}</span></p>
        <p class="published"><span>{blogDetails.timestamp}</span></p>
        <div class="article" dangerouslySetInnerHTML={{__html: blogDetails.content}} />
    </div>
    </div>
    </>
  )
}

export default BlogsDetail