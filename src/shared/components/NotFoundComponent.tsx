import React from 'react';
import notfound from '../static/notfound.gif';

const NotFoundComponent = (): JSX.Element => {

    return (
        <div className="container-cv skeleton-row">
            <div>
                <h1>Oops!</h1>
                <h1>404 not found</h1>
                <h2>We can not seem to find the page you are looking for.</h2>
                <h3>Error code: 404 Please use the menu above instead.</h3>
            </div>
            <div>
                <img className='picture-404' src={notfound} alt=" " />
            </div>
        </div>
    );
}

export default NotFoundComponent;