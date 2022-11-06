import { useNavigate } from 'react-router-dom';
import { LeftArrow } from '../icon';

export function NavBar({ previousPage }) {
  const navigate = useNavigate();
  const goBack = () => {
    const preRoute = '/';
    navigate(preRoute);
  };
  return (
    <div className="flex flex-row items-center gap-3 px-5 py-3">
      <button
        type="button"
        className="w-2"
        onClick={goBack}
      >
        <LeftArrow />
      </button>
      <p className="inline-block">{ previousPage }</p>
    </div>
  );
}

export default NavBar;
