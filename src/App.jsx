import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import NavBar from './components/NavBar';
import ExampleLearn from './views/ExampleLearn';
import ExampleChallenge from './views/ExampleChallenge';
import RoleIntro from './views/RoleIntro';
import Home from './views/Home';
import './App.css';

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'linear',
  duration: 0.5,
};

function AnimationLayout() {
  const { pathname } = useLocation();
  return (
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Outlet />
    </motion.div>
  );
}

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <hr />
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ExampleLearn" element={<ExampleLearn />} />
            <Route path="/ExampleChallenge" element={<ExampleChallenge />} />
            <Route path="/RoleIntro" element={<RoleIntro />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
