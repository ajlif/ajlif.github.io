import { useState, useEffect, useRef, useContext } from 'react';
import Experience from '../shared/components/Experience';
import Education from '../shared/components/Education';
import Skill from '../shared/components/Skill';
import Certification from '../shared/components/Certification';
import ajlif from '../shared/static/ajlif.jpeg';
import { getExperiences, getProfileInformations, getEducation, getCertifications, getSkills } from '../services/cv.service';
import Skeleton from '@material-ui/lab/Skeleton';
import alten from '../shared/static/alten.png';
import bgiTunis from '../shared/static/bgiTunis.jpg';
import otConsulting from '../shared/static/otConsulting.jpeg';
import unimore from '../shared/static/unimore.jpg';
import britsh from '../shared/static/britsh.png';
import institutfr from '../shared/static/institutfr.png';
import uniprg from '../shared/static/uniprg.jpg';
import fsb from '../shared/static/fsb.png';
import AlaJlifCv from '../shared/static/AlaJlifCv.pdf';
import { Education as EducationType, Experience as ExperienceType, Certification as CertificationType, Skill as skillType } from '../shared/interfaces/cv.interfaces';
import { ThemeContext } from '../App';

const MyCv = (): JSX.Element => {
  const [presentations, setPresentations] = useState('');
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [educations, setEducations] = useState<EducationType[]>([]);
  const [certifications, setCertifications] = useState<CertificationType[]>([]);
  const [skills, setSkills] = useState<skillType[]>([]);
  const [showScrollUp, setshowScrollUp] = useState(false);
  const mounted = useRef(false);

  useEffect(()      => {
    mounted.current = true;
    return () => {
      mounted.current =          false;
    };
  }, []);

  const { theme } = useContext(ThemeContext);
  const isLight = theme === 'light';

  useEffect(() => {
    getProfileInformations()
      .then((response: string) => {
        mounted.current && setPresentations(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
        mounted.current && setExperiences(response);
      }).catch((error) => {
        console.error(error);
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
        mounted.current && setEducations(response);
      }).catch((error) => {
        console.error(error);
      });
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
        mounted.current && setCertifications(response);
      }).catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getSkills()
      .then((response: skillType[]) => {
        mounted.current && setSkills(response || []);
      }).catch((error) => {
        console.error(error);
      });
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
    <div className={isLight ? '' : 'header-dark'}>
      <div className="header-cv">
        <img className="presentation-picture" src={ajlif} alt="stackTech" />
        <div className="presentation-card">
          <h4 className={isLight ? '' : 'title-dark'}>
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
            <h2 className={isLight ? '' : 'title-dark'}>Experience</h2>
            {experiences && experiences.length ? (
              experiences.map((object: ExperienceType, i: number) => {
                return <div key={i}> <Experience content={object} /> </div>;
              })
            ) : (
              <>
                <Experience content={undefined} />
                <Experience content={undefined} />
              </>
            )}
          </div>

          <div className="flex-item-right">
            <h2 className={isLight ? '' : 'title-dark'}>Education</h2>
            {educations && educations.length ? (
              educations.map((educationObj: EducationType, i: number) => {
                return <div key={i}>
                  <Education content={educationObj} />
                </div>;
              })
            ) : (
              <>
                <Education content={undefined} />
                <Education content={undefined} />
              </>
            )}

            <h2 className={isLight ? '' : 'title-dark'}>Licenses and certifications</h2>
            {certifications && certifications.length ? (
              <>
                <Certification content={certifications} />
              </>
            ) : (
              <>
                <Certification content={undefined} />
              </>
            )}

            <h2 className={isLight ? '' : 'title-dark'}>Skills and endorsements</h2>
            <div className="skill-container">
              {skills && skills.length ? skills.map((skillObj: skillType, index: number) => {
                return <Skill key={index} skill={skillObj} />;
              }) :
                <>
                  <Skill skill={undefined} />
                  <Skill skill={undefined} />
                  <Skill skill={undefined} />
                  <Skill skill={undefined} />
                </>
              }
            </div>
          </div>
        </div>
      </div>

      <div className="options">
        <a href="mailto:alajlif@gmail.com">
          <button>
            <i className="bi bi-envelope-plus-fill"></i>
          </button>
        </a>
        <a href={AlaJlifCv} download='AlaJlif_CV'>
          <button>
            <i className="bi bi-download"></i>
          </button>
        </a>
        <button onClick={scrollUp} className={showScrollUp ? '' : 'hidden'}>
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
      </div>
    </div>
  );
};

export default MyCv;
