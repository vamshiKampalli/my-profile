import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';

import Layout from './components/layout';
import Home from './components/home';
import Projects from './components/projects';
import { store } from './store';
import { fetchMyProfile } from './reducers/profile';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="/projects" element={<Projects />} />
    </Route>
  ),
  { basename: '/my-profile' }
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyProfile());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
