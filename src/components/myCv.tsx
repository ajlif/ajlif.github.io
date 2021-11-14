import React from "react";
import Experience from "../shared/components/Experience"

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
        <div className="presentation-picture">
          <p>AAA</p>
          </div>
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
        <p>test skill</p>
        <p>test skill</p>
        <p>test skill</p>
      </div>

      <div className="footer">
        <h2>footer</h2>
        <h2>icons</h2>
      </div>
    </div>
  );
};

export default MyCv;
