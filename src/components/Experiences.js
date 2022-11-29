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
                            <h3>{experiencesData.name}</h3>
                            <br/>
                            <p1>{experiencesData.description}</p1>
                        </div>
                    )
                })} 
            </div>
        )
    }
}

export default Experiences;