import React from "react";
import "../../styles/HomePage.css";
//import HeroArrow from '../../assets/heroArrow.png'
// import Article from '../assets/article.png'
import Hand from "../../assets/hand.png";
import Heroimg from "../../assets/heroimg.png";
// import Happy from '../assets/happy.jpg'
// import Support from '../assets/herosupport.jpg'
import Chatbot from "../Chatbot/Chatbot";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div className="Hero">
        <div className="herocontainer">
          <div className="heroleft">
            <div className="heroheading">
              Elevate your mind, <br /> Embrace your wellness!
            </div>

            <div className="herotext">
              <div className="herospan">
                In mental care, there is no one-size-fits-all approach to mental
                health. We tailor our care plans to fit each individual's unique
                needs. Join us in fostering a mentally healthier tomorrow!
              </div>
              <div className="heroboxes">
                <div className="herobox">
                  <div>
                    <img src={Hand} className="handicon" />
                  </div>
                  <div className="testboxtext">
                    <span id="boxnum">10+</span>
                    <span>Support groups</span>
                  </div>
                </div>
                <div className="herobox">
                  <div>
                    <img src={Hand} className="handicon" />
                  </div>
                  <div className="testboxtext">
                    <span id="boxnum">100+</span>
                    <span>Articles</span>
                  </div>
                </div>
                <div className="herobox">
                  <div>
                    <img src={Hand} className="handicon" />
                  </div>
                  <div className="testboxtext">
                    <span id="boxnum">20+</span>
                    <span>Therapists</span>
                  </div>
                </div>
              </div>
              <button>
                <Link
                  to={{ pathname: "/categories" }}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <span>Take a Test</span>
                </Link>
                <span></span>
              </button>
            </div>
          </div>
          <div className="heroright">
            <img src={Heroimg} className="heroimg" />
          </div>
        </div>
        <Chatbot />
      </div>
    </div>
  );
};

export default HeroSection;
