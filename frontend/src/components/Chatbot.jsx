import React, { useState } from 'react'
import '../styles/HomePage.css'
import {TbMessageChatbot } from 'react-icons/tb'
import Chatboticon from '../assets/chatbot.png'
import {AiOutlineClose} from 'react-icons/ai'

const Chatbot = () => {
    const[openchat, setopenchat] = useState(false);
  return (
    <div>
        {!openchat && (
            <div className="chatbot-container" onClick={() => {setopenchat(true)}}>
                <TbMessageChatbot className='chatboticon' size={50}/>
            </div>
        )
        }
        {openchat && (
            <div className="chatbot-container" onClick={() => {setopenchat(false)}}>
                <AiOutlineClose className='chatboticon' size={35}/>
            </div>
        )
        }
        {openchat && (
        <div className="chatbot-chat-container">
            <div className="chatbot-top">
                <div className='chatbot-avatar'><img src={Chatboticon} /></div>
                <div className="chatbot-heading">Hello! how are you feeling today!</div>
            </div>
        </div>
        )
        }
      
    </div>
  )
}

export default Chatbot
