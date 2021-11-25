import React from 'react';
import stackTech from "../../shared/images/stackTech.png";


const Education = () => {

    return (
        <div className="education-card">
            <div className="experience-header">
                <img className="experience-picture" src={stackTech} alt="stackTech" loading="lazy" />
                <div className="experience-details">
                    <h6><i className="bi bi-geo-alt-fill"></i>University of Modena and Reggio Emilia</h6>
                    <h6><i className="bi bi-mortarboard-fill"></i>Master in Computer Science</h6>
                    <h6><i className="bi bi-calendar-range-fill"></i>2017 - 2020</h6>
                </div>
            </div>
        </div>
    );
}

export default Education;