import * as React from 'react';
import RightMenu from '../shared/components/RightMenu';
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
      <RightMenu/>
    </React.Fragment>
  );
};

export default Layout;
