import Skeleton from '@material-ui/lab/Skeleton';
import { selectTheme } from '../../store/selectors/global.selectors';
import { useAppSelector } from '../../store/setup/hooks';
import { themes } from '../../shared/interfaces/cv.interfaces';
import { Education as EducationType } from '../interfaces/cv.interfaces';

interface propsInterface {
    content: EducationType | undefined
}

const Education = (props: propsInterface): JSX.Element => {

  const theme = useAppSelector(selectTheme);
  const isLight = theme.theme === themes.LIGHT;

  return (
    <div className={isLight ? 'education-card':'education-card card-dark'}>
      <div className="experience-header">
        {props.content ? (
          <>
            <img className="experience-picture" src={props.content.uniLogo} alt=" " loading="lazy" />
            <h6><i className="bi bi-geo-alt-fill"></i>{props.content.university}</h6>
            <h6><i className="bi bi-mortarboard-fill"></i>{props.content.degree} {props.content.startDate}-{props.content.endDate}</h6>
          </>
        ) : (
          <>
            <Skeleton
              className="experience-picture"
              variant="circle"
              width={50}
              height={50}
            />
            <h6 className="skeleton-row"><i className="bi bi-geo-alt-fill"></i><Skeleton variant="text" width={200} /></h6>
            <h6 className="skeleton-row"><i className="bi bi-mortarboard-fill"></i><Skeleton variant="text" width={200} /></h6>
          </>
        )}

      </div>
    </div>
  );
};

export default Education;
