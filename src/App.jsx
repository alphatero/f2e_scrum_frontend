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
// import ChatSprintDailyScrum from './views/chat/SprintDailyScrum';
import {
  Chat, SprintDailyScrum, SprintReview, SprintRetro,
} from './views/chat';
import {
  Introduction, Scrum, IntroProductBacklog, Role, SprintGuide,
} from './views/introduction';
import './App.css';
import ExamSprintPoint from './views/exam/SprintPoint';
import ProductBacklog from './views/exam/ProductBacklog';
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
            <Route path="/exam/sprint-point" element={<ExamSprintPoint />} />
            <Route path="/chat" element={<Chat />}>
              <Route path="sprint-daily-scrum" element={<SprintDailyScrum />} />
              <Route path="sprint-review" element={<SprintReview />} />
              <Route path="sprint-retro" element={<SprintRetro />} />
            </Route>
            <Route path="/introduction" element={<Introduction />}>
              <Route path="scrum" element={<Scrum />} />
              <Route path="role" element={<Role />} />
              <Route path="product-backlog" element={<IntroProductBacklog />} />
              <Route path="sprint-guide" element={<SprintGuide />} />
            </Route>
            <Route path="/exam/product-backlog" element={<ProductBacklog />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Route>
        </Routes>
      </Router>
      <BgBubble />
    </div>
  );
}

export default App;
