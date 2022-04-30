import Skeleton from '@material-ui/lab/Skeleton';
import { Skill as SkillType } from '../interfaces/cv.interfaces';

interface propsInterface {
    skill: SkillType | undefined
}

const Skill = (props: propsInterface): JSX.Element => { 
  return (
    <>
      {props?.skill ? (
        <div className={props.skill?.idCategory === 1 ?'skill skill-language': props.skill?.idCategory === 2? 'skill skill-framework':props.skill?.idCategory === 3?'skill skill-db':'skill skill-tools'}>
          <span>{props.skill?.name}</span>
        </div>
      ) : (
        <div className="skill">
          <Skeleton variant="text" width={100} height={30} />
        </div>
      )}
    </>
  );
};

export default Skill;
