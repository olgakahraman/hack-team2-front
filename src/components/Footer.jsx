
import React from "react";
import '../styles/Footer.css'

function Footer (){
    return(
        <div className="footer">
            <p className="footer-p">Ready to make a difference</p>
            <button className="hero-btn">Get Started</button>
            <p>&copy; {new Date(). getFullYear()} <b>Match</b>. All rights reserved</p>
        </div>
    )
}


export default Footer