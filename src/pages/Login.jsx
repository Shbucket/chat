import { React, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;


    try {
await signInWithEmailAndPassword(auth, email, password);
navigate('/')
      } catch (err) {
      const errCode = err.code;
      const errMessage = err.message;
      console.log(errCode, errMessage);
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Naples Chat</span>
        <span className="title">Log In</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
{err && <span>Something Went Wrong</span>}
          <button>Sign In</button>

        </form>
        <p>Dont have an account? <Link to='/register'>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
