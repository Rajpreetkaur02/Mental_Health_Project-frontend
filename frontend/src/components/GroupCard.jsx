import React from 'react'
import '../styles/Community.css'
import { Link } from 'react-router-dom'

const GroupCard = (data) => {
  return (
    <div>
      <div className="groupcardcontainer">
        <div className="groupcardtitle">{data.title}</div>
        <div className="groupcardmembers">{data.members} members</div>
        <div className="groupcardorganizer">Organized by {data.organizer}</div>
        <div className="groupcarddesc">{data.desc}</div>
        <Link className="groupcardbutton" to={`/groupdesc/${data.id}`}>
          <button>find out more</button>
        </Link>
      </div>
    </div>
  )
}

export default GroupCard
