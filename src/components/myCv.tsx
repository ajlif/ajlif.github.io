import React, { useState, useEffect } from "react";
import Experience from "../shared/components/Experience";
import Education from "../shared/components/Education";
import Skill from "../shared/components/Skill";
import Certification from "../shared/components/Certification";
import ajlif from "../shared/static/ajlif.jpeg";
import { getExperiences, getProfileInformations, getEducation, getCertifications, getSkills } from "../services/cv.service";
import Skeleton from "@material-ui/lab/Skeleton";
import alten from "../shared/static/alten.png";
import bgiTunis from "../shared/static/bgiTunis.jpg";
import otConsulting from "../shared/static/otConsulting.jpeg";
import unimore from "../shared/static/unimore.jpg";
import britsh from "../shared/static/britsh.png";
import institutfr from "../shared/static/institutfr.png";
import uniprg from "../shared/static/uniprg.jpg";
import fsb from "../shared/static/fsb.png";
import { Education as EducationType, Experience as ExperienceType, Certification as CertificationType, Skill as skillType} from "../shared/interfaces/cv.interfaces";

const MyCv = () : JSX.Element => {
  const [presentations, setPresentations] = useState('');
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [educations, setEducations] = useState<EducationType[]>([]);
  const [certifications, setCertifications] = useState<CertificationType[]>([]);
  const [skills, setSkills] = useState<skillType[]>([]);
  const [showScrollUp, setshowScrollUp] = useState(false);

  useEffect(() => {
    getProfileInformations()
      .then((response: string) => {
        setPresentations(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    getExperiences()
      .then((response: ExperienceType[]) => {
        response.map((experience: ExperienceType) => {
          switch (true) {
            case experience?.company?.toLowerCase().includes('alten'):
              return (experience.companyLogo = alten);
            case experience?.company?.toLowerCase().includes('bgi'):
              return (experience.companyLogo = bgiTunis);
            case experience?.company?.toLowerCase().includes('ot'):
              return (experience.companyLogo = otConsulting);
            default:
              return '';
          }
        });
        setExperiences(response);
      }).catch((error) => {
        console.log(error);
      }).finally(() => {
        //remove loading
      });
  }, []);

  useEffect(() => {
    getEducation()
      .then((response: EducationType[]) => {
        response.map((education: EducationType) => {
          switch (true) {
            case education?.university?.toLowerCase().includes('modena'):
              return (education.uniLogo = unimore);
            case education?.university?.toLowerCase().includes('bizerte'):
              return (education.uniLogo = fsb);
            default:
              return '';
          }
        });
        setEducations(response);
      }).catch((error) => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    getCertifications()
      .then((response: CertificationType[]) => {
        response.map((certif: CertificationType) => {
          switch (true) {
            case certif?.name?.toLowerCase().includes('ielts'):
              return (certif.organizationLogo = britsh);
            case certif?.name?.toLowerCase().includes('tcf'):
              return (certif.organizationLogo = institutfr);
            case certif?.name?.toLowerCase().includes('celi'):
              return (certif.organizationLogo = uniprg);
            default:
              return '';
          }
        });
        setCertifications(response);
      }).catch((error) => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    getSkills()
      .then((response: skillType[]) => {
        setSkills(response || []);
      }).catch((error) => {
        console.log(error);
      })
  }, []);

    function scrollUp(): void {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }

    function handleScroll(): void {
      setshowScrollUp(window.scrollY > 20);
    }

  return (
    <div>
      <div className="header-cv">
        <h1>container fluid</h1>
        <h1>container fluid</h1>
        <img className="presentation-picture" src={ajlif} alt="stackTech" />
        <div className="presentation-card">
          <h4>
            {presentations ? (
              presentations
            ) : (
              <>
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" width="50%" />
              </>
            )}
          </h4>
        </div>
      </div>

      <div className="container-cv">
        <div className="flex-container">

          <div className="flex-item-left">
            <h2>Experience</h2>
            {experiences && experiences.length ? (
              experiences.map(function (object: ExperienceType, i:number) {
                return <div key={i}> <Experience content={object} /> </div>
              })
            ) : (
              <>
                <Experience content={undefined} />
                <Experience content={undefined} />
              </>
            )}
          </div>

          <div className="flex-item-right">
            <h2>Education</h2>
            {educations && educations.length ?(
              educations.map((educationObj: EducationType, i: number) => {
                return <div key={i}>
                    <Education content={educationObj}/>
                </div>
              })
            ):(
              <>
              <Education content={undefined}/>
              <Education content={undefined}/>
              </>
            )}

            <h2>Licenses and certifications</h2>
            {certifications && certifications.length ?(
              <>
                <Certification content={certifications}/>
              </>
            ):(
              <>
              <Certification content={undefined}/>
              </>
            )}

            <h2>Skills and endorsements</h2>
            <div className="skill-container">
              {skills && skills.length ? skills.map((skillObj: skillType,index: number) => {
                return <Skill key={index} skill={skillObj}/>
              }):
              <>
              <Skill undefined/>
              <Skill undefined/>
              <Skill undefined/>
              <Skill undefined/>
              </>
              }
            </div>
          </div>
        </div>
      </div>

      <div className="options">
        <button>
          <a href="mailto:alajlif@gmail.com"><i className="bi bi-envelope-plus-fill"></i></a>
        </button>
        <button>
          <i className="bi bi-download"></i>
        </button>
        <button onClick={scrollUp} className={showScrollUp ? '':'hidden'}>
          <i className="bi bi-arrow-up-circle-fill"></i>
        </button>
      </div>

      <div className="footer">
        <a href="https://github.com/ajlif">
          <i className="bi bi-github social-footer"></i>
        </a>
        <a href="https://www.linkedin.com/in/ala-jlif">
          <i className="bi bi-linkedin social-footer"></i>
        </a>
        <a href="https://twitter.com/ala_j">
          <i className="bi bi-twitter social-footer"></i>
        </a>
        <a href="https://it-it.facebook.com/partir.P75">
          <i className="bi bi-facebook social-footer"></i>
        </a>
      </div>
    </div>
  );
};

export default MyCv;
