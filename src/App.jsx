import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from 'react-router-dom';
import { motion } from 'framer-motion';
import { BgBubble } from './components';
import Home from './views';
import Role from './views/introduction/Role';
import {
  Chat, SprintDailyScrum, SprintReview, SprintRetro,
} from './views/chat';
import './App.css';
import { Scrum, IntroProductBacklog } from './views/introduction';
import { ExamProductBacklog, Exam, ExamSprintPoint } from './views/exam';
import ThankYou from './views/ThankYou';

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
        <hr />
        <Routes>
          <Route element={<AnimationLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/exam"
              element={<Exam />}
            >
              <Route path="product-backlog" element={<ExamProductBacklog />} />
              <Route path="sprint-point" element={<ExamSprintPoint />} />
            </Route>
            <Route path="/chat" element={<Chat />}>
              <Route path="sprint-daily-scrum" element={<SprintDailyScrum />} />
              <Route path="sprint-review" element={<SprintReview />} />
              <Route path="sprint-retro" element={<SprintRetro />} />
            </Route>
            <Route path="/introduction/scrum" element={<Scrum />} />
            <Route path="/introduction/role" element={<Role />} />
            <Route path="/introduction/product-backlog" element={<IntroProductBacklog />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Route>
        </Routes>
      </Router>
      <BgBubble />
    </div>
  );
}

export default App;
