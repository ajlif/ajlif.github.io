import underconstruction from '../static/underconstruction.png';

const UnderConstruction = (): JSX.Element => {

    return (
        <div className="container-cv skeleton-row center-div">
            <div>
                <img src={underconstruction} alt=" " />
            </div>
        </div>
    );
}

export default UnderConstruction;