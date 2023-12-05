import React, { useState, useEffect } from 'react';
import './Success.css';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {Link} from 'react-router-dom';
import { useCallback, useRef} from "react";
import ReactCanvasConfetti from "react-canvas-confetti";

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  const canvasStyles = {
    position: "fixed",
    pointerEvents: "none",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0
  };
  
  function getAnimationSettings(originXA, originXB) {
    return {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      particleCount: 150,
      origin: {
        x: randomInRange(originXA, originXB),
        y: Math.random() - 0.2
      }
    };
  }

const Success = () => {
    const refAnimationInstance = useRef(null);
  const [intervalId, setIntervalId] = useState();

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const nextTickAnimation = useCallback(() => {
    if (refAnimationInstance.current) {
      refAnimationInstance.current(getAnimationSettings(0.1, 0.3));
      refAnimationInstance.current(getAnimationSettings(0.7, 0.9));
    }
  }, []);
window.onload = () => {
    if (!intervalId) {
      setIntervalId(setInterval(nextTickAnimation, 400));
    }
}

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);


  return (
    <>
        <div className="successwrapper">
            <div className="success">
            <p className="icon">
                <span className="material-symbols-outlined">
                    <ShoppingBagIcon fontSize="large"/>
                </span>
            </p>
            <h2>Thank you for your purchasing our membership!</h2>
            <p className="emailmsg">Your membership details will be sent on your registered email.</p>
            <p className="description">
                If you have any questions, please email
                <a className="mailToEmail" href="mailto:mindwell@gmail.com">
                mindwell@gmail.com
                </a>
            </p>

            <Link to={'/'}>
                <button type="button" className="btn">
                Go to Home
                </button>
            </Link>
            </div>
        </div>
        <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </>
  )
}

export default Success