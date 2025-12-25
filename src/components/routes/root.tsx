import { Outlet } from 'react-router';

function Root() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Outlet></Outlet>
    </div>
  );
}
export default Root;
