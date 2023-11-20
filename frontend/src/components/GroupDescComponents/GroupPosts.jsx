import React from 'react'
import { useState } from 'react';
import '../../styles/Groupdesc.css'
import { FaComment } from "react-icons/fa6";
import { IoIosHeartEmpty,  IoIosHeart } from "react-icons/io";
import Cat from '../../assets/cat.png'

const GroupPosts = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleIconClick = () => {
    setIsLiked(prevState => !prevState);
  };


  return (
    <div>
      <div className="grppostcontainer">
        <div className="newpostcontainer">
          <span id='postheading'>Join the Conversation: Where Thoughts Take Flight and Ideas Find Home! 🚀✨  #CommunityChatter</span>
          <span>Share your stories, coping mechanisms or just anything that you feel like sharing!</span>
          <textarea placeholder='How are you feeling today?'/>
        </div>
        <div className="allpostscontainer">
          <div className="postcontainer">
            <div className="postheader">
              <div className="postimg"><img src={Cat}/></div>
              <div className="postname">
                <div className="postusername">Rajpreet Kaur</div>
                <div className="postTime">25 minutes ago</div>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At minima harum, tenetur molestiae, aliquid voluptas aspernatur neque natus, ullam commodi obcaecati! Atque numquam sunt iure accusamus soluta asperiores nobis cum?</p>
            <div className="likecomment">
              <span onClick={handleIconClick}>  {isLiked ? <IoIosHeart color='red'/> : <IoIosHeartEmpty color='red'/>} 100 </span>
              <span>         <FaComment color='grey'/>  23 comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupPosts
