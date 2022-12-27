import React from 'react'
import image from '../img/shbucket.jpeg'

export const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={image} alt="" />
        <div className="userChatInfo">
          <span>Jan</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={image} alt="" />
        <div className="userChatInfo">
          <span>Jan</span>
          <p>hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={image} alt="" />
        <div className="userChatInfo">
          <span>Jan</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
export default Chats