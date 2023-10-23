import React from 'react'
import Search from '../assets/search.png'
import Plan from '../assets/plan.png'
import Group from '../assets/group.png'
import Reward from '../assets/reward.png'
import { FaArrowRight } from 'react-icons/fa'

const AboutSection = () => {
  return (
    <div>
      <div className="aboutcontainer">
        <div className="aboutheading"><span>How It Works</span></div>
        <div className="howitworkscontainer">
          <div className="workscard">
            <img src={Search} id='workcardimg' />
            <span>Take a Mental Health test</span>
            <p>Online screening is one of the quickest and easiest ways to determine whether you are experiencing symptoms of a mental health condition.</p>
            <button>learn more <FaArrowRight /></button>

          </div>
          <div className="workscard">
            <img src={Plan} id='workcardimg' />
            <span>Follow the Plan</span>
            <p>Online screening is one of the quickest and easiest ways to determine whether you are experiencing symptoms of a mental health condition.</p>
            <button>learn more <FaArrowRight /></button>
          </div>
          <div className="workscard">
            <img src={Group} id='workcardimg' />
            <span>Join Support Groups</span>
            <p>Online screening is one of the quickest and easiest ways to determine whether you are experiencing symptoms of a mental health condition.</p>
            <button>learn more <FaArrowRight /></button>
          </div>
          <div className="workscard">
            <img src={Reward} id='workcardimg' />
            <span>Complete the Plan and get rewarded</span>
            <p>Online screening is one of the quickest and easiest ways to determine whether you are experiencing symptoms of a mental health condition.</p>
            <button>learn more <FaArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection

