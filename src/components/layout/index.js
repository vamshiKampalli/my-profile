import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import Navbar from '../navbar';
import Loader from '../loader';
import styles from './layout.module.css';

function Layout() {
  const profileData = useSelector((state) => state.profile);
  return (
    <div>
      <Navbar />
      <main className={styles.layout}>
        {profileData.isLoading ? <Loader /> : <Outlet />}
      </main>
    </div>
  );
}

export default Layout;
