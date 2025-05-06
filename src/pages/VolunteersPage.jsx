
import React from "react";
import Card from "../components/Card";
import '../styles/VolunteersPage.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


function VolunteersPage(){

const vols = [
    {
        id: 1,
        image: 'src/images/female-1.jpg' ,
        name: 'Sarah Joseph',
        location: 'USA, TX',
        area: ['Tech', 'Marketing'],
        desc: 'A web developer who is passionate about solving probles in a easy way.',
        avalibility:'weekdays',
    },
    {
        id: 2,
        image: 'src/images/male-1.png',
        name: 'John Lee',
        location: 'USA, LA',
        area: ['Engineering', 'Art'],
        desc: 'An Engineer who is passionate about remodling houses.',
        avalibility:'weekends',
    },
    {
        id: 3,
        image: 'src/images/female-1.jpg',
        name: 'Mike',
        location: 'USA, VA',
        area: ['Writing', 'Public Speaking'],
        desc: 'A Writer who is passionate about writing the history.',
        avalibility:'weekends',
    },
    {
        id: 4,
        image: 'src/images/male-1.png',
        name: 'Mike',
        location: 'USA, VA',
        area: ['Writing', 'Public Speaking'],
        desc: 'A Writer who is passionate about writing the history.',
        avalibility:'weekends',
    }

]
    return(
    
        <div>
            <Navbar />
            <h1>Volunteers</h1>
            <div className="card-info">
                {vols.map((vol) =>(
                    <Card 
                     key = {vol.id}
                     image = {vol.image}
                     name = {vol.name}
                     location = {vol.location}
                     area = {vol.area}
                     desc = {vol.desc}
                     avalibility = {vol.avalibility}
                     btnText = "Connect"
                    />
                ))}

            </div>
          <Footer />
        </div>
    
    )


}

export default VolunteersPage