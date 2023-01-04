import React from "react";
import Chats from "./Chats";
import Navbar from "./Navbar";
import Search from "./Search";
import { useState } from "react";
const Sidebar = () => {
     

  return (
    <div className="sidebar">
      <Navbar />

      <Search />
      <div className="scroll">
        <Chats />
      </div>
    </div>
  );
};

export default Sidebar;
