import React, { useState } from 'react';
import banner from "../../assets/hero.png";
import human1 from "../../assets/human1.jpg";
import human4 from "../../assets/human4.jpg";
import human6 from "../../assets/human6.jpg";
import doct1 from "../../assets/doct1.jpg";
import doct2 from "../../assets/doct2.jpg";
import doct3 from "../../assets/doct3.jpg";
import doct4 from "../../assets/doct4.jpg";
import doct5 from "../../assets/doct5.jpg";
import './Home.css'; 
import { useSearchParams } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container">
                <div className="hero-section">
                    <div className="hero-text">
                        <p className="hero-title">The Power to Heal</p>
                        <p className="hero-description">
THE HOSPITAL IS THE PLACE OF HOPE AND HEALING AND MIRACLES CAN HAPPEN HERE...!!
                        </p>
                    </div>
                    <div className="hero-image">
                        <img src={banner} alt="hero" className="hero-img" />
                    </div>
                </div>
                <div className="specialists-section">
                    <p className="section-title">Meet Our Specialist</p>
                    <div className="specialists-grid">
                        <div className="specialist-card">
                            <img src={human1} alt="Dr.Sophia" />
                            <h5>Dr.Sophia</h5>
                            <span>Gynecologist</span>
                            <a href="/appointment">Book Appointment</a>
                        </div>
                        <div className="specialist-card">
                            <img src={doct1} alt="Dr.Naresh Trehan " />
                            <h5>Dr.Naresh Trehan</h5>
                            <span>Urologist</span>
                            <a href="/appointment">Book Appointment</a>
                        </div>
                        <div className="specialist-card">
                            <img src={doct3} alt="Dr. Robert" />
                            <h5>Dr. Robert</h5>
                            <span>Skincare specialist</span>
                            <a href="/appointment">Book Appointment</a>
                        </div>
                        <div className="specialist-card">
                            <img src={human4} alt="Aishwarya" />
                            <h5>Dr.Aishwarya</h5>
                            <span>Neuro-specialist</span>
                            <a href="/appointment">Book Appointment</a>
                        </div>
                        <div className="specialist-card">
                            <img src={doct2} alt="Dr.Jhon mathew " />
                            <h5>Dr. Jhon mathew</h5>
                            <span>Surgeon</span>
                            <a href="/appointment">Book Appointment</a>
                        </div>
                        <div className="specialist-card">
                            <img src={human6} alt="Dr.Martin" />
                            <h5>Dr. Martin</h5>
                            <span>Cardiologist</span>
                            <a href="/appointment">Book Appointment</a>
                        </div>
                        <div className="specialist-card">
                            <img src={doct4} alt="Dr. Xavier" />
                            <h5>Dr. Xavier</h5>
                            <span>Dentist</span>
                            <a href="/appointment">Book Appointment</a>
                        </div>
                        <div className="specialist-card">
                            <img src={doct5} alt="Dr.Victoria" />
                            <h5>Dr.Victoria</h5>
                            <span>Radiologist</span>
                            <a href="/appointment">Book Appointment</a>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default Home;