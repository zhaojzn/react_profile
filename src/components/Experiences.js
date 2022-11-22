import React, { Component } from 'react';
import experiences from "../data/experiences.json"
class Experiences extends Component {
    render() {
        return(
            <div>
                {experiences.map((experiencesData, index) =>{
                    return(
                        <div className='iconDiv'><p>{experiencesData.name}</p></div>
                    )
                })}
            </div>
        )
    }
}

export default Experiences;