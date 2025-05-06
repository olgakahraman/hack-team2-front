
import React from "react";
import '../styles/Navbar.css'


function Navbar(){
    return(
        <nav className="nav">
            <div className="logo"><img src="../src/images/match-3.jpg" alt="" /></div>
            <div className="nav-dev">
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/VolunteersPage">Volunteers</a></li>
                <li><a href="/OrganizationsPage">Organizations</a></li>
                {/* <li><a href="/" className="">Login</a></li> */}
            </ul>
            <button className="login">Login</button>
            </div>
        </nav>
    )

}


export default Navbar