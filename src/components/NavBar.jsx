import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ExampleLearn">Learn Example</Link>
        </li>
        <li>
          <Link to="/ExampleChallenge">Challenge Example</Link>
        </li>
        <li>
          <Link to="/IntroduceScrum">IntroduceScrum</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
