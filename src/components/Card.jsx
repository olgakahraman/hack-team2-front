import React from "react";
import '../styles/Card.css'

function Card ({image,name, location, area =[], desc, avalibility, btnText} ){

    return(

        <div className="card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{location}</p>
            {/* <p>{area}</p> */}
            <div className="skills" >
                {area.map((skill) =>(
                   <span className="skill">{skill}</span>
                ))}

            </div>
            <p>{desc}</p>
            <p>{avalibility}</p>
            <button>{btnText}</button>
        </div>

    )
}


export default Card