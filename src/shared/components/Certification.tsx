import Skeleton from "@material-ui/lab/Skeleton";
import { Certification as certType } from '../interfaces/cv.interfaces';

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
                            <div className="certification-content">
                                <Skeleton variant="text" width={120} />
                                <Skeleton variant="text" width={120} />
                                <Skeleton variant="text" width={120} />
                                <Skeleton
                                    className="experience-picture"
                                    variant="circle"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className="certification-content">
                                <Skeleton variant="text" width={120} />
                                <Skeleton variant="text" width={120} />
                                <Skeleton variant="text" width={120} />
                                <Skeleton
                                    className="experience-picture"
                                    variant="circle"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className="certification-content">
                                <Skeleton variant="text" width={120} />
                                <Skeleton variant="text" width={120} />
                                <Skeleton variant="text" width={120} />
                                <Skeleton
                                    className="experience-picture"
                                    variant="circle"
                                    width={50}
                                    height={50}
                                />
                            </div>
                    </>)}
            </div>
        </div>
    );
}

export default Certification;