import React from "react";
import Experience from "../shared/components/Experience";
import Education from "../shared/components/Education";
import Skill from "../shared/components/Skill";
import Certification from "../shared/components/Certification";
import stackTech from "../shared/images/stackTech.png";

const MyCv = () => {
  return (
    <div>
      <div className="header-cv">
        <h1>container fluid</h1>
        <h1>container fluid</h1>
        <div className="presentation-card">
          <p>
            just q text to test if it is centered test yes it may work and i
            know it will work, just q text to test if it is centered test yes it
            may work and i know it will work, just q text to test if it is
            centered test yes it may work and i know it will work just q text to
            test if it is centered test yes it may work and i know it will work
          </p>
        </div>
        <img className="presentation-picture" src={stackTech} alt="stackTech" />
      </div>

      <div className="container-cv">
        <div className="flex-container">
          <div className="flex-item-left">
            <h2>Experience</h2>
            <Experience />
            <Experience />
            <Experience />
            <Experience />
          </div>

          <div className="flex-item-right">
            <h2>Education</h2>
            <Education/>
            <Education/>

            <h2>Licenses and certifications</h2>
            <div className="container-experiences">1</div>
            <Certification/>
            <Certification/>
            <Certification/>

            <h2>Skills and endorsements</h2>
            <div className="skill-container">
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
              <Skill />
            </div>
          </div>
        </div>
      </div>

      <div className="options">
        <button>
          <i className="bi bi-envelope-plus-fill"></i>
        </button>
        <button>
          <i className="bi bi-download"></i>
        </button>
        <button>
          <i className="bi bi-arrow-up-circle-fill"></i>
        </button>
      </div>

      <div className="footer">
        <a href="https://github.com/ajlif"><i className="bi bi-github social-footer"></i></a>
        <a href="https://www.linkedin.com/in/ala-jlif"><i className="bi bi-linkedin social-footer"></i></a>
        <a href="https://twitter.com/ala_j"><i className="bi bi-twitter social-footer"></i></a>
        <a href="https://it-it.facebook.com/partir.P75"><i className="bi bi-facebook social-footer"></i></a>

      </div>
    </div>
  );
};

export default MyCv;
