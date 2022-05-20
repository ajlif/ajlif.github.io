import { useState, useEffect, useRef, useContext } from 'react';
import Experience from '../shared/components/Experience';
import Education from '../shared/components/Education';
import Skill from '../shared/components/Skill';
import Certification from '../shared/components/Certification';
import ajlif from '../shared/images/ajlif.jpeg';
import Skeleton from '@material-ui/lab/Skeleton';
import AlaJlifCv from '../shared/images/AlaJlifCv.pdf';
import { Education as EducationType, Experience as ExperienceType, Skill as skillType } from '../shared/interfaces/cv.interfaces';
import { ThemeContext } from '../App';
import { useAppSelector } from '../store/setup/hooks';
import { selectProfileInf, selectExperiences, selectEducations, selectCertifications, selectSkills  } from '../store/selectors/cv.selectors';

const MyCv = (): JSX.Element => {

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

  const info = useAppSelector(selectProfileInf);
  const experiences = useAppSelector(selectExperiences);
  const educations = useAppSelector(selectEducations);
  const certifications = useAppSelector(selectCertifications);
  const skills = useAppSelector(selectSkills);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
            {info.content ? (
              info.content
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
            {experiences?.content.length ? (
              experiences.content.map((object: ExperienceType, i: number) => {
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
            {educations?.content.length ? (
              educations.content.map((educationObj: EducationType, i: number) => {
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
            {certifications?.content.length ? (
              <>
                <Certification content={certifications.content} />
              </>
            ) : (
              <>
                <Certification content={undefined} />
              </>
            )}

            <h2 className={isLight ? '' : 'title-dark'}>Skills and endorsements</h2>
            <div className="skill-container">
              {skills.content.length ? skills.content.map((skillObj: skillType, index: number) => {
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
