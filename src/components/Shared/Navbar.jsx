import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo.png";

function Navbar() {
 
    const navLinkStyle = ({ isActive }) => {
        return {
          fontWeight: isActive ? '700' : '400',
        };
      }; 
     

  return (
    <div className='bg-[#FEFAE0] h-[80px] w-full fixed z-20 p-8'>
        <div className='flex max-w-8l items-center justify-between m-auto h-full'>
            <div >
              <img src={logo} height={100} width={100}  className='mt-14 '/>
            </div>
            <div className=' justify-center items-center gap-6 text-xl hidden md:flex'>
                <NavLink style={navLinkStyle} to="/">Home</NavLink>
                <NavLink style={navLinkStyle} to="/appointment">Appointment</NavLink>
                <NavLink style={navLinkStyle} to="/about-us">About Us</NavLink>
                <NavLink style={navLinkStyle} to="/contact-us">Contact Us</NavLink>
                <NavLink style={navLinkStyle} to="/log-in">Login</NavLink>

            </div>
        </div>
    </div>     
  )
}

export default Navbar