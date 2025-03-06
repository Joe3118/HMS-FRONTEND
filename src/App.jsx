import { useEffect, useState } from "react";
import "./App.css";
import Appointment from "./components/Patient/Appointment";
import ContactUs from "./components/Patient/ContactUs";
import AboutUs from "./components/Patient/AboutUs";
import Login from './components/Shared/Login.jsx'
import { BrowserRouter,Routes ,Route} from "react-router-dom";
import HomePage from "./page/HomePage.jsx";
import SignUp from "./components/Shared/SignUp.jsx";
import ForgotPassword from "./components/Shared/ForgotPassword.jsx";
import Footer from "./components/Patient/Footer.jsx";

function App() {
  const[user,setUser]=useState(null);
  useEffect(()=>{console.log("user ",user)},[user]);
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage setUser={setUser} user={user}/>} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/log-in" element={<Login setUser={setUser}/>} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password"  element={<ForgotPassword />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;



