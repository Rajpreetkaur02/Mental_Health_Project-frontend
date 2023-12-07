import React from 'react'
import './GroupCard.css'
import { Link } from 'react-router-dom'
import { IoLocationOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { MdOutlinePublic } from "react-icons/md";

const GroupCard = (data) => {
  return (
    <div>
      <div className="groupcardcontainer">
        <div className="groupcardtitle">{data.title}</div>
        <div className="groupcardsubtitle">
          <div className="cardbox"><IoLocationOutline/>{data.location}</div>
          <div className="cardbox"><MdOutlinePublic/>Public</div>
          <div className="cardbox"><GrGroup/>{data.members}</div>
        </div>
        <div className="groupcardorganizer">Organized by <span id='grporganizer'>{data.organizer}</span></div>
        <div className="groupcardtopics">{data.topics}</div>
        <Link className="groupcardbutton" to={`/groupdesc/${data._id}`}>
          <button>Find out more</button>
        </Link>
      </div>
    </div>
  )
}

export default GroupCard
