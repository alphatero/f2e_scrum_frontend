import { Link } from 'react-router-dom';
import { PageList } from '../constants/navbarList';

function NavBar() {
  return (
    <div>
      <ul>
        {PageList.map((page) => (
          <li key={`page_${page.id}`}>
            <Link to={page.link}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
