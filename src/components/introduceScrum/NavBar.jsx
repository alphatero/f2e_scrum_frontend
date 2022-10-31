import PropTypes from 'prop-types';
import { LeftArrow } from '../icon';

function NavBar({ previousPage }) {
  return (
    <div className="flex flex-row items-center gap-3 px-5 py-3">
      <div className="w-2">
        <LeftArrow />
      </div>
      <p className="inline-block">{ previousPage }</p>
    </div>
  );
}

NavBar.propTypes = {
  previousPage: PropTypes.string,
};

NavBar.defaultProps = {
  previousPage: 'previous page\'s name',
};

export default NavBar;
