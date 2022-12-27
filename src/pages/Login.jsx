import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faImage} />;

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Naples Chat</span>
        <span className="title">Register</span>
        <form>
        
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          
          <button>Sign In</button>
        </form>
        <p>Dont have an account? Register</p>
      </div>
    </div>
  );
};

export default Login;
