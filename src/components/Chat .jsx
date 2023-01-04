import React from 'react'
import Messages from './Messages';
import Input from './Input'
import { ChatContext } from '../context/ChatContext';
import { useContext } from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
export const Chat  = () => {
  const {data} = useContext(ChatContext)
  

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>

         <button onClick={()=>signOut(auth)}>logout</button>
      </div>
      <Messages />
      <Input />
    </div>
  );
}

export default Chat
