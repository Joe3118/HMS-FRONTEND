import  { useState } from "react";
import Navbar from "../Shared/Navbar";
import appoint from "../../assets/appoint.png";
import "./Appointment.css";
import Footer from "./Footer";


function Appointment() { 
  const [appointment ,setAppointment] = useState({
    patient: "",
    phone: "",
    appointmentDate: "",
    date: new Date(),
    time: "",
    doctor: "",
    reason: "",
    email: "",
    city: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setAppointment((prev) => ({
      ...prev, [name]: value
    }));
    
  }
    

  const handleSubmit = async(e) => {
    e.preventDefault(); 
  const { patient, phone, appointmentDate, time, doctor, reason, email, city } = appointment;

  if (!patient.trim()) {
    alert("Please enter your name.");
    return;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phone.match(phonePattern)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  if (!appointmentDate) {
    alert("Please select an appointment date.");
    return;
  }

  if (!time) {
    alert("Please select an appointment time.");
    return;
  }

  if (doctor === "Choose your Consultant") {
    alert("Please select a doctor.");
    return;
  }

  if (!reason.trim()) {
    alert("Please enter a reason for the appointment.");
    return;
  }

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!city.trim()) {
    alert("Please enter your city.");
    return;
  }
alert("Appointment Successfull!!")

  console.log("Appointment Details:",appointment);
};
  return (
    <>
    <div className="appointment-section">
      <Navbar />
      <div className="appointment-container">
        <div className="appointment-content">
          <div className="appointment-image">
            <img src={appoint} alt="nurse" />
          </div>
          <div className="appointment-form">
            <form className="form" onSubmit={handleSubmit}>
              <p className="form-title">Book Appointment</p>
              <div className="form-row">
                <div className="form-group">
                  <label>Name:</label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="patient"
                    onChange={handlechange}
                    value={appointment.patient}                      
          
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number:</label>
                  <input
                    type="number"
name="phone"
                    placeholder="Phone/Mobile"
                    onChange={handlechange}
                    value={appointment.phone}                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Date Of Appointment:</label>
                  <input
                    type="date"
                    placeholder="Date"
                    name="appointmentDate"
                    onChange={handlechange}
                    value={appointment.appointmentDate}                  />
                </div>
                <div className="form-group">
                  <label>Time Of Appointment:</label>
                  <input
                    type="time"
                    placeholder="Time"
                    name="time"
                    onChange={handlechange}
                    value={appointment.time}                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Choose Doctor Name:</label>
                  <select
                    id="doctors"
                    name="doctor"
                    onChange={handlechange}
                    value={appointment.doctor}                  >
                    <option value="Choose your Consultant">Choose your Consultant</option>
                    <option value="Dr.Sophia">Dr.Sophia</option>
                    <option value="r.Naresh Trehan">Dr.Naresh Trehan</option>
                    <option value="Dr. Robert">Dr. Robert</option>
                    <option value="Dr.Aishwarya">Dr.Aishwarya</option>
                    <option value="Dr.Jhon mathew">Dr.Jhon mathew</option>
                    <option value="Dr. Martin">Dr. Martin</option>
                    <option value="Dr.Xavier ">Dr.Xavier </option>
                    <option value="Dr. Victoria">Dr. Victoria</option>
                    
                  </select>
                </div>
                <div className="form-group">
                  <label>Enter Reason:</label>
                  <textarea
                    rows="4"
                    placeholder="Reason"
                    name="reason"
                    onChange={handlechange}
                    value={appointment.reason}                   ></textarea>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={handlechange}
                    value={appointment.email}                  />
                </div>
                <div className="form-group">
                  <label>City:</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    onChange={handlechange}
                    value={appointment.city}                  />
                </div>
              </div>
              <button type="submit" className="submit-button" style={{backgroundColor:"white"}}>
                Submit
              </button>
            </form>
          </div>
        </div>
       
      </div>
   
    </div>
     <Footer/>
     </>
  );
}

export default Appointment;