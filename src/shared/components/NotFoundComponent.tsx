import notfound from '../static/notfound.gif';

const NotFoundComponent = (): JSX.Element => {

    return (
        <div className="container-cv skeleton-row">
            <div>
                <h1>Oops!</h1>
                <h1>404 not found</h1>
                <h2>We can't seem to find the page you're looking for.</h2>
                <h3>Error code: 404 Please use the menu above instead.</h3>
            </div>
            <div>
                <img src={notfound} alt=" " />
            </div>
        </div>
    );
}

export default NotFoundComponent;