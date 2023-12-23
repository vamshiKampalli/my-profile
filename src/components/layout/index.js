import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Navbar from '../navbar';
import './layout.css';

const Loader = () => (
  <div className="loading loadingAnimation">
    <div>
      <span>V</span>
      <span>K</span>
    </div>
  </div>
);

function Layout() {
  const profileData = useSelector((state) => state.profile);
  return (
    <div>
      <Navbar />
      <main>
        {profileData.isLoading && <Loader />}
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
