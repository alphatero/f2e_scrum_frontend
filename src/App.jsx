import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import { BgBubble, NavBar } from './components';
import ExampleLearn from './views/ExampleLearn';
import ExampleChallenge from './views/ExampleChallenge';
<<<<<<< HEAD
import Role from './views/introduction/Role';
=======
import ChatSprintDailyScrum from './views/chat/SprintDailyScrum';
>>>>>>> 4b6997c817fd4ee5875b1b96f2c0bd2676716acb
import Home from './views/Home';
import './App.css';
import { Scrum } from './views/introduction';
import ProductBacklog from './views/exam/ProductBacklog';

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
      <BgBubble />
      <Router>
        <NavBar />
        <hr />
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ExampleLearn" element={<ExampleLearn />} />
            <Route path="/ExampleChallenge" element={<ExampleChallenge />} />
            <Route path="/Role" element={<Role />} />
            <Route path="/IntroductionRole" element={<IntroductionRole />} />
            <Route path="/chat/sprint-daily-scrum" element={<ChatSprintDailyScrum />} />
            <Route path="/introduction/scrum" element={<Scrum />} />
            <Route path="/Exam/ProductBacklog" element={<ProductBacklog />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
