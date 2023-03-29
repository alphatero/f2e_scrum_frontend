import { Outlet } from 'react-router-dom';

export * from './ExamProductBacklog';
export * from './ExamSprintPoint';

export function Exam() {
  return (
    <Outlet />
  );
}

export default Exam;
