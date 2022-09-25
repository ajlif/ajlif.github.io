import { Fragment, useEffect } from 'react';
import RightMenu from '../shared/components/RightMenu';
import FooterMenu from '../shared/components/FooterMenu';
import NavMenu from './NavMenu';
import { useDispatch } from 'react-redux';
import { isScrollingDown } from '../store/slices/scrollSlice';

interface AuxProps  { 
    children: React.ReactNode
}

const Layout = (props:AuxProps): JSX.Element =>  {

  const dispatch = useDispatch();
  function handleScroll(): void {
    dispatch(isScrollingDown());
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <NavMenu/>
      <div>
        {props.children}
      </div>
      <RightMenu/>
      <FooterMenu/>
    </Fragment>
  );
};

export default Layout;
