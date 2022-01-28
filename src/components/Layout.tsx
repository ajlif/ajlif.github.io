import * as React from 'react';
import NavMenu from './NavMenu';

const Layout = (props:any): JSX.Element =>  {
        return (
            <React.Fragment>
                <NavMenu />
                <div>
                    {props.children}
                </div>
            </React.Fragment>
        );
}

export default Layout;