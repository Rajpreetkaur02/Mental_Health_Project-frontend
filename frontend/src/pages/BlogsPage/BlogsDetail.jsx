import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { formatISO9075, formatISO } from 'date-fns';
import { differenceInMinutes, formatDistanceToNow } from 'date-fns';

function BlogsDetail() {
  const [blogDetails, setblogdetails] = useState([]);
  const id = useParams();

  const formatTimestamp = (timestamp) => {
    console.log(timestamp);
    const difference = differenceInMinutes(new Date(), new Date(timestamp));
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
        fetch(`http://localhost:8080/blog/post/${id.id}`, {
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data.timestamp);
                setblogdetails(data);
            });
    }
}, []);

  return (
    <div>
      <h1>{blogDetails.title}</h1>
      <img src={`data:image/png;base64,${blogDetails.img.data}`} alt="blog" />
      <h3>{formatTimestamp(blogDetails.timestamp)}</h3>
    </div>
  )
}

export default BlogsDetail