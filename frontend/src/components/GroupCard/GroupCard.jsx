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
          <div className="cardbox"><span><IoLocationOutline/>{data.location}</span></div>
          <div className="cardbox"><span><MdOutlinePublic/>public</span></div>
          <div className="cardbox"><span><GrGroup/><span id='grpmembers'>{data.members}</span></span></div>
        </div>
        {/* <div className="groupcardmembers"><MdOutlineGroupAdd size={20}/>{data.members} members</div> */}
        <div className="groupcardorganizer">Organized by <span id='grporganizer'>{data.organizer}</span></div>
        <div className="groupcardtopics">{data.topics}</div>
        {/* <div className="groupcarddesc" dangerouslySetInnerHTML={{__html: data.about.slice(0,20)}}></div> */}
        <Link className="groupcardbutton" to={`/groupdesc/${data._id}`}>
          <button>Find out more</button>
        </Link>
      </div>
    </div>
  )
}

export default GroupCard
