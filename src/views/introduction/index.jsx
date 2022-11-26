import { Outlet } from 'react-router-dom';

export * from './Scrum';
export * from './Role';
export * from './ProductBacklog';

export function Introduction() {
  return (
    <Outlet />
  );
}

export default Introduction;
