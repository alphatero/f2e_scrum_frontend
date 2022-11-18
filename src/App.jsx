import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import { BgBubble } from './components';
import Role from './views/introduction/Role';
import ChatSprintDailyScrum from './views/chat/SprintDailyScrum';
import Home from './views/Home';
import './App.css';
import ExamSprintPoint from './views/exam/SprintPoint';
import { Scrum } from './views/introduction';
import ProductBacklog from './views/exam/ProductBacklog';
import DndSample from './views/exam/DndSample';

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
        <hr />
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/exam/sprint-point" element={<ExamSprintPoint />} />
            <Route
              path="/chat/sprint-daily-scrum"
              element={<ChatSprintDailyScrum />}
            />
            <Route path="/introduction/scrum" element={<Scrum />} />
            <Route path="/introduction/role" element={<Role />} />
            <Route path="/exam/product-backlog" element={<ProductBacklog />} />
            <Route path="/dnd" element={<DndSample />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
