
import React from "react";
import '../styles/Steps.css'

function Steps(){
    return(
    < section className="steps-container">
        <h2>How It Works</h2>
        <div className="steps-info">
            <div className="steps-details">
                <img src="../src/images/join.jpeg" alt="" />
                <h3>Join</h3>
                <p>Sign up and create your profile</p>
            </div>
            <div className="steps-details">
                <img src="../src/images/match-4.jpg" alt="" />
                <h3>Match</h3>
                <p>Find volunteers opportunites or volunters</p>
            </div>
            <div className="steps-details">
                <img src="../src/images/connect.jpg" alt="" />
                <h3>Connect</h3>
                <p>Collaborate and make a difference</p>
            </div>
        </div>

    </section>

    )


}


export default Steps