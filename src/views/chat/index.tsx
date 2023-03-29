import { Outlet } from 'react-router-dom';

export * from './SprintDailyScrum';
export * from './SprintReview';
export * from './SprintRetro';

export function Chat() {
  return (
    <Outlet />
  );
}

export default Chat;
