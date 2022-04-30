import * as React from 'react';
import NavMenu from './NavMenu';

interface AuxProps  { 
    children: React.ReactNode
}

const Layout = (props:AuxProps): JSX.Element =>  {
  return (
    <React.Fragment>
      <NavMenu />
      <div>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
