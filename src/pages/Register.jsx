import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
 import {createUserWithEmailAndPassword } from "firebase/auth";
 import {auth } from '../firebase'

const element = <FontAwesomeIcon icon={faImage} />

const Register = () => {

   const handleSubmit = (e) =>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value
    const file = e.target[3].files[0];
   

    createUserWithEmailAndPassword(auth,email,password).then((userCredential) => {
      //Signed in 
      const user = userCredential.user
    }).catch((error)=> {
      const errorCode = error.code
      const errorMessage = error.messasge

    })
   }
return (
  <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">Naples Chat</span>
      <span className="title">Register</span>
      <form onSubmit={handleSubmit}>
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