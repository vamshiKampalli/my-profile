import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Layout from './components/layout';
import { store } from './store';
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
    </>
  );
}

function Projects() {
  return <h1>Projects</h1>;
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
