import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../Shared/Navbar";
import './Login.css';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [collection, setCollection] = useState({ email: "", newpassword: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollection((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    alert("Password Changed Successfully")
    navigate('/log-in');
  }

  return (
    <div className='navbar'>
      <Navbar />
      <div className="login-container">
        <h2 className="form-title">Forgot Password</h2>
        <form className="login-form" onSubmit={handleResetPassword}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              value={collection.email}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              name="newpassword"
              className="form-control"
              placeholder="Enter your new password"
              onChange={handleChange}
              value={collection.newpassword}
              required
            />
          </div>
          <button className="but" style={{backgroundColor:"#007bff",width:"100%",padding:"10px 15px",fontWeight:"bold"}}  type="submit">
            Reset Password
          </button>
        </form>
        <div className="additional-options">
          <p>Remember your password? <a href="/log-in">Login</a></p>
        </div>
      </div>
    </div>
  );
}
