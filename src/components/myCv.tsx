import React from "react";
import Experience from "../shared/components/Experience"
import Skill from "../shared/components/Skill";
import stackTech from "../shared/images/stackTech.png";

const MyCv = () => {
  return (
    <div>
      <div className="header-cv">
        <h1>container fluid</h1>
        <h1>container fluid</h1>
        <div className="presentation-card">
          <p>just q text to test if it is centered test yes it may work and i know it will work,
           just q text to test if it is centered test yes it may work and i know it will work,
             just q text to test if it is centered test yes it may work and i know it will work
             just q text to test if it is centered test yes it may work and i know it will work
          </p>
        </div>
          <img className="presentation-picture" src={stackTech} alt="stackTech" />
        
      </div>

      <div className="container-cv">
        <h2>Experience</h2>
        <Experience/>
        <Experience/>
        <Experience/>
        <Experience/>
        <Experience/>

        <h2>Education</h2>
        <div className="container-experiences">1</div>
        <div className="container-experiences">2</div>

        <h2>Licenses and certifications</h2>
        <div className="container-experiences">1</div>
        <div className="container-experiences">2</div>
        <div className="container-experiences">3</div>

        <h2>Skills and endorsements</h2>
        <div className="skill-container">
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        <Skill/>
        </div>
        
      </div>

      <div className="options">
        <button><i className="bi bi-envelope-plus-fill"></i></button>
        <button><i className="bi bi-download"></i></button>
        <button><i className="bi bi-arrow-up-circle-fill"></i></button>
      </div>

      <div className="footer">
        <h2>footer</h2>
        <h2>icons</h2>
      </div>
    </div>
  );
};

export default MyCv;
