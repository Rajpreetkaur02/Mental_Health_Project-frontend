import React from 'react'
import Planner from '../assets/planner.jpg'
import Article from '../assets/artcles.jpg'
import Support from '../assets/supportgrp.jpg'

const ResourcesSection = () => {
  return (
    <div>
      <div className="resources-container">
      <div class="containerr">
          <div className="resources-left">
            <span id='leftheading'>We Are Here To Help</span>
            <div className='helpbox'>
              <div id='help-button'>Heal With Us:</div>
              <div id='go-button'>Go</div>
            </div>
          </div>
          <div class="palette">
            <div class="color">
              <img src={Planner}/>
              <h3 id='color-heading'>Plans</h3>
            </div>
            <div class="color">
              <img src={Article}/>
              <h3 id='color-heading'>Resources</h3>
            </div>
            <div class="color">
              <img src={Support}/>
              <h3 id='color-heading'>Support Groups</h3>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default ResourcesSection
