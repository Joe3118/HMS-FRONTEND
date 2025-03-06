import {React,useState} from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Shared/Navbar";


export default function Login() {
  const navigate = useNavigate();

      const [collection, setcollection] = useState({ username: "", email: "",password:"" });

      const handlechange = (e) => {
        const { name, value } = e.target;
        setcollection((prev) => ({
          ...prev, [name]: value
        }));
        
      } 

  const handleLogin = async(e) => {
    e.preventDefault(); 
    const{username,email,password}=collection;

    if (!username.trim()) {
      alert("Please enter your username.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    
  if (!password.trim()) {
    alert("Please enter your password.");
    return;
  }

   alert("Login Successfull")
   navigate('/')
   

  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    <div className='navbar'>
      <Navbar />
      <div className="login-container">
        <h2 className="form-title">Login to Your Account</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter your username"
              onChange={handlechange}
              value={collection.username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handlechange}
              value={collection.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter your password"
              onChange={handlechange}
              value={collection.password}
            />
          </div>
          <button type='button'  style={{backgroundColor:"#007bff",width:"100%",padding:"10px 15px",fontWeight:"bold"}}  onClick={handleLogin}>
            Login
          </button>
        </form>
        <div className="additional-options">
          <a  className="forgot-password" onClick={handleForgotPassword}>
            Forgot Password?
          </a>
          <a   onClick={handleSignUp}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}