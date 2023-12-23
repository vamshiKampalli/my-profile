import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import './index.css';

function Home() {
  useEffect(() => {
    async function fetchData() {
      const profileDataResponse = await fetch(
        'https://vamshikampalli.github.io/profile.json'
      );
      const profileData = await profileDataResponse.json();

      console.log(profileData);
    }

    fetchData();
  }, []);
  return (
    <>
      <h1>Home</h1>
      <Outlet />
    </>
  );
}

function Projects() {
  return <h1>Projects</h1>;
}

function Layout() {
  return (
    <div>
      <h1>User Dashboard</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="/projects" element={<Projects />} />
    </Route>
  ),
  { basename: '/my-profile' }
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
