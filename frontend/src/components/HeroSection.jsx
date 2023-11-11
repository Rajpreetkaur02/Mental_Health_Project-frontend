import React from 'react'
import '../styles/HomePage.css'
import HeroArrow from '../assets/heroArrow.png'
import Article from '../assets/article.png'
import Hand from '../assets/hand.png'
import Heroimg from '../assets/heroimg.jpg'
import Happy from '../assets/happy.jpg'
import Support from '../assets/herosupport.jpg'
import Chatbot from './Chatbot'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <div>
      <div className="Hero">
        <div className="Herotop">
            <div className="herotopleft">
                <div className="herotext">Maintain a healthy <br/> mental state <img src={HeroArrow} className='arrowicon'/></div>
            </div>
            <div className="herotopright">
                <div className="articlesbox">
                    <div><img src={Article} className='articleicon'/></div>
                    <div className="articleboxtext">
                        <span id='boxnum'>100+</span>
                        <span>Mental Health Articles</span>
                    </div>
                </div>
                <div className="testbox">
                    <div><img src={Hand} className='handicon'/></div>
                    <div className="testboxtext">
                        <span id='boxnum'>10+</span>
                        <span>Support groups</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="Herobottom">
            <div className="herobottomleft">
                <div className="herospan">In mental care, there is no one-size-fits-all approach to mental health. We tailor our care plans to fit each individual's unique needs. Mental health should always be good</div>
                <div>
                    <button>
                        <Link to={{pathname: "/categories"}} style={{textDecoration:"none", color:"#026fff"}}><span>Take a Test</span></Link>
                        <span></span>
                    </button>
                </div>
            </div>
            <div className="herobottomright">
                <div id='herosmallimg'>
                    <img src={Happy} className='happyimg'/>
                    <img src={Support} className='supportimg'/>
                </div>
                <div id='herolargeimg'>
                    <img src={Heroimg} className='heroimg'/>
                </div>       
            </div>
        </div>
        <Chatbot/>
      </div>
    </div>
  )
}

export default HeroSection
