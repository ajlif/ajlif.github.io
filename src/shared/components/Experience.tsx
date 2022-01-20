import stackTech from "../../shared/static/stackTech.png";
import { Project } from "../interfaces/cv.interfaces";
import Skeleton from "@material-ui/lab/Skeleton";

const Experience = (props: any) => {
  return (
    <div className="experience-card">
      {props && props.content ? (
        <>
          <div className="experience-header">
            <img
              className="experience-picture"
              src={stackTech}
              alt="stackTech"
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
              props.content.roleDescription.map(function (role: Project) {
                return (
                  <>
                    <hr />
                    <p>
                      <i className="bi bi-stack"></i>
                      {role.name}: {role.description}
                    </p>
                  </>
                );
              })}
          </div>
        </>
      ) : (
        <>
          <div className="experience-header">
            <Skeleton className="experience-picture" variant="circle" />
            <div className="experience-details">
              <h6>
                <i className="bi bi-person-workspace"></i>
                <Skeleton variant="text" width="100%" />
              </h6>
              <h6>
                <i className="bi bi-geo-alt-fill"></i>
                <Skeleton variant="text" width="100%" />
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
