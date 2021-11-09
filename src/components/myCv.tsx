import React from "react";
import Experience from "../shared/components/Experience"

const MyCv = () => {
  return (
    <div>
      <div className=" header-cv">
        <h1>container fluid</h1>
        <h1>container fluid</h1>
        <div className="presentation-card">
          <p>just q text to test if it is centered</p>
          <h1>kksks</h1>
        </div>
      </div>
      <div className="container">
        <h1>My Cv component</h1>
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
    </div>
  );
};

export default MyCv;
