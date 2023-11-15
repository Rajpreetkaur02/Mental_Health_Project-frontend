import React from 'react'
import '../styles/Community.css'

const GroupCard = (data) => {
  return (
    <div>
      <div className="groupcardcontainer">
        <div className="groupcardtitle">{data.title}</div>
        <div className="groupcardmembers">{data.members} members</div>
        <div className="groupcardorganizer">Organized by {data.organizer}</div>
        <div className="groupcarddesc">{data.desc}</div>
        <div className="groupcardbutton"><button>find out more</button></div>
      </div>
    </div>
  )
}

export default GroupCard
