import React from "react";
import '../styles/HeroSection.css'

function HeroSection (){

    return(
        <section className="hero-section">
            <h1>Connect Volunteers with<br/>
             Meaningful Causes</h1>
            <p> A fast and simple way to match people who want to help with organizations that need them.</p>
            <div className="hero-buttons">
                <a href="./VolunteersPage"><button className="hero-btn" >Join as Volunteer</button></a>
                <a href="./OrganizationsPage"><button className="hero-btn">Register Organization</button></a>
            </div>
        </section>
    )

}

export default HeroSection