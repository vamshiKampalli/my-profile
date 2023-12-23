// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Navbar from '../navbar';

function Layout() {
  //   const name = useSelector((state) => state.profile.name);
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
