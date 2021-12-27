import React from 'react';
import stackTech from "../../shared/images/stackTech.png";


const Certification = () => {

    return (
        <div className="certification-card">
            <div className="experience-header">
            <div className="certification-content">
                <h6>IELTS - (B2) </h6>
                <h6>Britsh Council</h6>
                <h6>Issued 2017 </h6>
                <img className="certification-picture" src={stackTech} alt="stackTech" loading="lazy" />
            </div>
            <div className="certification-content">
                <h6>IELTS - (B2) </h6>
                <h6>Britsh Council</h6>
                <h6>Issued 2017 </h6>
                <img className="certification-picture" src={stackTech} alt="stackTech" loading="lazy" />
            </div>
            <div className="certification-content">
                <h6>IELTS - (B2) </h6>
                <h6>Britsh Council</h6>
                <h6>Issued 2017 </h6>
                <img className="certification-picture" src={stackTech} alt="stackTech" loading="lazy" />
            </div>
            </div>
        </div>
    );
}

export default Certification;