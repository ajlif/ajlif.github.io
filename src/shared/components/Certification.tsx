import { Certification as certType } from '../interfaces/cv.interfaces';
import CertificationSkeleton from './CertificationSkeleton';

const Certification = (props: any) => {

    return (
        <div className="certification-card">
            <div className="experience-header">
                {props && props.content ? (
                    <>
                        {props.content.map((certObj: certType, i: number) => {
                          return  <div className="certification-content" key={i}>
                                <h5>{certObj?.name} </h5>
                                <h6>{certObj?.issuingOrganization}</h6>
                                <h6>Issued {certObj?.issueDate} </h6>
                                <img className="certification-picture" src={certObj?.organizationLogo} alt="stackTech" loading="lazy" />
                            </div>
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
}

export default Certification;