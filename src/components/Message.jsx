import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import image from "../img/shbucket.jpeg";

export const Message = ({Message}) => {
  const {currentUser}= useContext(AuthContext)
  const {data}= useContext(ChatContext)
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src={image} alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src={image} alt="" />
      </div>
    </div>
  );
};
export default Message;
