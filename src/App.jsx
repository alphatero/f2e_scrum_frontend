import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import { NavBar } from './components';
import ExampleLearn from './views/ExampleLearn';
import ExampleChallenge from './views/ExampleChallenge';
import IntroduceScrum from './views/IntroduceScrum';
import Home from './views/Home';
import './App.css';
import IntroductionRole from './views/IntroductionRole';

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
      className="h-full"
    >
      <Outlet />
    </motion.div>
  );
}

function App() {
  return (
    <div className="h-screen">
      <Router>
        <NavBar />
        <hr />
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ExampleLearn" element={<ExampleLearn />} />
            <Route path="/ExampleChallenge" element={<ExampleChallenge />} />
            <Route path="/IntroduceScrum" element={<IntroduceScrum />} />
            <Route path="/IntroductionRole" element={<IntroductionRole />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
