import React, { Component } from 'react';
import "../images/javascript.png"
import { experiences } from "../data/experiences.js"

class Experiences extends Component {
    render() {

        return(
            <div className='iconPadding'>
                {experiences.map((experiencesData, index) =>{
                    return(
                        <div key={experiencesData.name} className="iconDiv">
                            <p>{experiencesData.name}</p>
                            <img src={experiencesData.image} className="iconImage" alt={experiencesData.name}></img>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Experiences;