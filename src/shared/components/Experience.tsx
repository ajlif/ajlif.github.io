import React from 'react';
import { Project } from "../interfaces/cv.interfaces";
import Skeleton from "@material-ui/lab/Skeleton";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Experience = (props: any): JSX.Element => {

    const {theme  } = useContext(ThemeContext);
    const isLight = theme === 'light';

    return (
        <div className={isLight ? 'experience-card':'experience-card card-dark'}>
            {props && props.content ? (
                <>
                    <div className="experience-header">
                        <img
                            className="experience-picture"
                            src={props.content.companyLogo}
                            alt=""
                            loading="lazy"
                        />
                        <div className="experience-details">
                            <h6>
                                <i className="bi bi-person-workspace"></i>
                                {props.content.role}
                            </h6>
                            <h6>
                                <i className="bi bi-geo-alt-fill"></i>
                                {props.content.cityAndCountry} | {props.content.from} -{" "}
                                {props.content.to}{" "}
                            </h6>
                        </div>
                    </div>

                    <div className="experience-description">
                        {props.content.roleDescription &&
                            props.content.roleDescription.map(function (role: Project, i: number) {
                                return (
                                    <div key={i}> 
                                        <hr className='header-dark'/>
                                        <span>
                                            <i className="bi bi-stack"><b>{role.name}</b>:</i>
                                            {role.description}
                                        </span>
                                    </div>
                                );
                            })}
                    </div>
                </>
            ) : (
                <>
                    <div className="experience-header">
                        <Skeleton
                            className="experience-picture"
                            variant="circle"
                            width={50}
                            height={50}
                        />
                        <div className="experience-details">
                            <h6 className="skeleton-row">
                                <i className="bi bi-person-workspace"></i>
                                <Skeleton variant="text" width={150} />
                            </h6>
                            <h6 className="skeleton-row">
                                <i className="bi bi-geo-alt-fill"></i>
                                <Skeleton variant="text" width={200} />
                            </h6>
                        </div>
                    </div>

                    <div className="experience-description">
                        <hr />
                        <p>
                            <Skeleton variant="text" width="100%" />
                            <Skeleton variant="text" width="100%" />
                            <Skeleton variant="text" width="100%" />
                            <Skeleton variant="text" width="40%" />
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Experience;
