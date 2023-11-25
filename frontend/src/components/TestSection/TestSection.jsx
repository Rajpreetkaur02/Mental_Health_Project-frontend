import React from 'react'
import { Link } from 'react-router-dom'

const TestSection = () => {
  return (
    <div>
      <div className="testcontainer">
        <div className="testheading"><span>Take A Mental Health Test</span></div>
        <div className='testsubheading'>
          <span>Online screening is one of the quickest and easiest ways to determine whether you are experiencing symptoms of a mental health condition.</span>
          <span id='testsubheadingbold'>Mental health conditions, such as depression or anxiety, are real, common and treatable. And recovery is possible.</span>
          <button>
              <Link to={{pathname: "/categories"}} style={{textDecoration:"none", color:"#fff"}}><span>Take a Test</span></Link>
          </button>
        </div>
        <div className='testcards'>
          <div className="testcard">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestSection
