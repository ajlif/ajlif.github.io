import underconstruction from '../static/underconstruction.png';

const UnderConstruction = (): JSX.Element => {

    return (
        <div className="container-cv skeleton-row center-div">
                <img className='under-cons-picture' src={underconstruction} alt=" " />
        </div>
    );
}

export default UnderConstruction;