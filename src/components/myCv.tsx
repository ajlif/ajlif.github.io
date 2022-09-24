import { useEffect, useRef} from 'react';
import Experience from '../shared/components/Experience';
import Education from '../shared/components/Education';
import Skill from '../shared/components/Skill';
import Certification from '../shared/components/Certification';
import ajlif from '../shared/images/ajlif.jpeg';
import Skeleton from '@material-ui/lab/Skeleton';

import { Education as EducationType, Experience as ExperienceType, Skill as skillType } from '../shared/interfaces/cv.interfaces';
import { useAppSelector } from '../store/setup/hooks';
import { selectProfileInf, selectExperiences, selectEducations, selectCertifications, selectSkills  } from '../store/selectors/cv.selectors';
import { selectTheme } from '../store/selectors/global.selectors';
import { themes } from '../shared/interfaces/cv.interfaces';

const MyCv = (): JSX.Element => {

  const mounted = useRef(false);

  useEffect(()      => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  const info = useAppSelector(selectProfileInf);
  const experiences = useAppSelector(selectExperiences);
  const educations = useAppSelector(selectEducations);
  const certifications = useAppSelector(selectCertifications);
  const skills = useAppSelector(selectSkills);
  const theme = useAppSelector(selectTheme);

  const isLight = theme.theme === themes.LIGHT;

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

      <div className="footer">
        <a href="https://github.com/ajlif">
          <i className="bi bi-github social-footer"></i>
        </a>
        <a href="https://twitter.com/ala_j">
          <i className="bi bi-twitter social-footer"></i>
        </a>
      </div>
    </div>
  );
};

export default MyCv;
