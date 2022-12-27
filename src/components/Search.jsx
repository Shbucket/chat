import React from "react";
import image2 from '../img/shbucket.jpeg'

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search For User"/>
      </div>
      <div className="userChat">
        <img src={image2} alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
