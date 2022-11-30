import React, { Component } from 'react';
import "../images/javascript.png"
import { experiences } from "../data/experiences.js"

class Experiences extends Component {
    render() {
        return(
            <div className='iconPadding'>
                {experiences.map((experiencesData, index) => (
                    <div key={experiencesData.name} className="iconDiv">
                        <h3>{experiencesData.name}</h3>
                        <br/>
                        <p1>{experiencesData.description}</p1>
                        <div className='displayTag'>
                            {experiencesData.experience.map((exper, index) =>(
                                <div className='tag'>
                                <p>{exper}</p>
                                </div>
                            ))}
                        </div>
                    </div> 
                ))} 
            </div>

        )
    }
}

export default Experiences;