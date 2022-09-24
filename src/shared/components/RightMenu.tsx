import { useEffect, useState } from 'react';
import AlaJlifCv from '../../shared/images/AlaJlifCv.pdf';

const RightMenu = (): JSX.Element => {
    
  const [showScrollUp, setshowScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollUp(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  function handleScroll(): void {
    setshowScrollUp(window.scrollY > 20);
  }

  return (
    <div className='options'>
      <a href='mailto:alajlif@gmail.com'>
        <button>
          <i className='bi bi-envelope-plus-fill'></i>
        </button>
      </a>
      <a href={AlaJlifCv} download='AlaJlif_CV'>
        <button>
          <i className='bi bi-download'></i>
        </button>
      </a>
      <button onClick={scrollUp} className={showScrollUp ? '' : 'hidden'}>
        <i className='bi bi-arrow-up-circle-fill'></i>
      </button>
    </div>
  );
};

export default RightMenu;
