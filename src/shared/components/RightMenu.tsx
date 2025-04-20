import { useDispatch } from 'react-redux';
import AlaJlifCv from '../../shared/images/AlaJlif_CV.png';
import { selectScroll } from '../../store/selectors/global.selectors';
import { useAppSelector } from '../../store/setup/hooks';
import { scrollUp } from '../../store/slices/scrollSlice';

const RightMenu = (): JSX.Element => {
    
  const scrollInfo = useAppSelector(selectScroll);
  const dispatch = useDispatch();

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
      <button onClick={() => dispatch(scrollUp())} className={scrollInfo.isScrollingDown ? '' : 'hidden'}>
        <i className='bi bi-arrow-up-circle-fill'></i>
      </button>
    </div>
  );
};

export default RightMenu;
