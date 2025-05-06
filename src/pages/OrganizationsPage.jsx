
import React from "react";
import Card from "../components/Card";
import '../styles/VolunteersPage.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function OrganizationsPage (){

    const orgs = [
        {
            id: 1,
            image: 'src/images/male-1.png' ,
            name: 'TCC',
            location: 'USA, OK',
            area: ['Tech'],
            desc: 'An organization where giving you the opportunity to level up your skills.',
            avalibility:'weekend',
        },
        {
            id: 2,
            image: 'src/images/female-1.jpg' ,
            name: 'Texas A&M',
            location: 'USA, TX',
            area: ['Adminstration', 'IT Support'],
            desc: 'An organization where giving you the opportunity to gain experiance as a fresh graduated.',
            avalibility:'weekdays',
        },
        {
            id: 3,
            image: 'src/images/male-1.png' ,
            name: 'Google',
            location: 'USA, LA',
            area: ['IT'],
            desc: 'A organization where giving you the opportunity to hire after the volunteer position.',
            avalibility:'flexable',
        },
        {
            id: 1,
            image: 'src/images/female-1.jpg' ,
            name: 'Microsoft',
            location: 'USA, WA',
            area: ['Software Engineering'],
            desc: 'A organization where giving you the opportunity to hire after the volunteer position.',
            avalibility:'flexable',
        }
    
    ]
        return(
            
        
            <div>
                <Navbar />
                <h1>Organizations</h1>
                <div className="card-info">
                    {orgs.map((org) =>(
                        <Card 
                         key = {org.id}
                         image = {org.image}
                         name = {org.name}
                         location = {org.location}
                         area = {org.area}
                         desc = {org.desc}
                         avalibility = {org.avalibility}
                         btnText = "Connect"
                        />

                        
                    ))}
    
                </div>
                <Footer />
            </div>
        
        )

}


export default OrganizationsPage



