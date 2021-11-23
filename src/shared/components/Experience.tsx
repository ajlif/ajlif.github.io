import React from 'react';
import stackTech from "../../shared/images/stackTech.png";



const Experience = () => {

    return (
        <div className="experience-card">
            <div className="experience-header">
                <img className="experience-picture" src={stackTech} alt="stackTech" />
                <div className="experience-details">
                        <h6><i className="bi bi-person-workspace"></i>Junior Software engineer - Alten</h6>
                        <h6><i className="bi bi-geo-alt-fill"></i>Milan, Italy [Oct 2021 - Now[ 2 months</h6>
                </div>
            </div>
            <div className="experience-description">
                
            <hr/>
            <p><i className="bi bi-stack"></i>IDENTY: implementation of a session management console used for video recognition of new customers.
               test test test testtest test test test test test test test
               test test test testtest test test test test test test test
               test test test testtest test test test test test test test
            </p>
            </div>
        </div>
    );
}

export default Experience;