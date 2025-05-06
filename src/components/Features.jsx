
import React from "react";
import '../styles/Steps.css'

function Features(){
    return(
    < section className="steps-container">
        <h2>Why Use Our Platform</h2>
        <div className="steps-info">
            <div className="steps-details">
                <img src="../src/images/process.jpeg" alt="" />
                <h3>Simple Process</h3>
                <p>Easily join, match and connect</p>
            </div>
            <div className="steps-details">
                <img src="../src/images/impact.jpg" alt="" />
                <h3>Real Impact</h3>
                <p>Make a positive difference in causes that matter</p>
            </div>
            <div className="steps-details">
                <img src="../src/images/free.jpg" alt="" />
                <h3>Free to Use</h3>
                <p>Access all features of the platform at no cost</p>
            </div>
        </div>

    </section>

    )


}


export default Features