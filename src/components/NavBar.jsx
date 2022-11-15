import { Link } from 'react-router-dom';
import { pageList } from '../constants/navbarList';

export function NavBar() {
  return (
    <div>
      <ul>
        {pageList.map((page) => (
          <li key={`page_${page.id}`}>
            <Link to={page.link}>{page.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavBar;
