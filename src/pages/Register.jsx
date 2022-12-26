import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faImage} />

const Register = () => {
return (
  <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Naples Chat</span>
      <span className="title">Register</span>
      <form>
        <input type="text" placeholder="display name" />
        <input type="email" placeholder="email" />
        <input type="password" placeholder="password" />
        <input style={{ display: "none" }} type="file" id="file" />
        <label htmlFor="file">{element}
        <span> Add an avatar</span></label>
        <button>Sign Up</button>
      </form>
      <p>Already have an account? Login</p>
    </div>
  </div>
);

}


export default Register