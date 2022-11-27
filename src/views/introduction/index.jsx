import { Outlet } from 'react-router-dom';

export * from './Scrum';
export * from './Role';
export * from './ProductBacklog';
export * from './SprintGuide';
export * from './SprintPoint';

export function Introduction() {
  return (
    <Outlet />
  );
}

export default Introduction;
