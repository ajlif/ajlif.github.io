import { useContext } from 'react';
import { ThemeContext } from '../../App';
import { Certification as certType } from '../interfaces/cv.interfaces';
import CertificationSkeleton from './CertificationSkeleton';

interface propsInterface {
    content: certType [] | undefined
}

const Certification = (props: propsInterface): JSX.Element => {

  const { theme } = useContext(ThemeContext);
  const isLight = theme === 'light';

  return (
    <div className={isLight ? 'certification-card' : 'certification-card card-dark'}>
      <div>
        {props && props.content ? (
          <>
            {props.content.map((certObj: certType, i: number) => {
              return <div className="certification-content" key={i}>
                <h5>{certObj?.name} </h5>
                <h6>{certObj?.issuingOrganization}</h6>
                <h6>Issued {certObj?.issueDate} </h6>
                <img className="certification-picture" src={certObj?.organizationLogo} alt="stackTech" loading="lazy" />
              </div>;
            })}

          </>
        ) : (
          <>
            <CertificationSkeleton />
            <CertificationSkeleton />
            <CertificationSkeleton />
          </>)}
      </div>
    </div>
  );
};

export default Certification;
