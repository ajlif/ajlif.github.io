import React from "react";
import Experience from "../shared/components/Experience";
import Education from "../shared/components/Education";
import Skill from "../shared/components/Skill";
import Certification from "../shared/components/Certification";
import ajlif from "../shared/static/ajlif.jpeg";
import {getExperiences, getProfileInformations} from "../services/cv.service";
import Skeleton from '@material-ui/lab/Skeleton';

const MyCv = () => {


  const [presentations, setPresentations] = React.useState("");
  const [experiences, setExperiences] = React.useState([]);

  React.useEffect(() => {

    getProfileInformations().then((response: any) => {
      setPresentations(response)
    }).catch((error) => {
      console.log(error);
    });
    
  }, []);

    
    getExperiences().then((response: any) => {
      setExperiences(response)
    }).catch((error) => {
      console.log(error);
    }).finally(() => {
      //remove loading
    });
    

  return (
    <div>
      <div className="header-cv">
        <h1>container fluid</h1>
        <h1>container fluid</h1>
        <div className="presentation-card">
          <h4>
            {presentations ?
              presentations
              :
              (<>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" width="50%" />
              </>
              )}
          </h4>
        </div>
        <img className="presentation-picture" src={ajlif} alt="stackTech" />
      </div>

      <div className="container-cv">
        <div className="flex-container">
          <div className="flex-item-left">
            <h2>Experience</h2>
            {experiences ?
            (experiences.map(function(object){
              return <Experience content={object} />;
            }))
            :
            (<> 
            <Experience content={undefined}/>
            <Experience content={undefined}/>
            </>)
            }
          </div>

          <div className="flex-item-right">
            <h2>Education</h2>
            <Education/>
            <Education/>

            <h2>Licenses and certifications</h2>
            <div className="container-experiences">1</div>
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
