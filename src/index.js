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
import Projects from './components/projects';
// import Resume from './components/resume';
import MyIntro from './components/my_intro';
import { store } from './store';
import { fetchMyProfile } from './reducers/profile';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route index element={<MyIntro />}></Route>
        <Route path="/projects" element={<Projects />} />
        {/* Use this route with PDFViewer for development and pass props as well*/}
        {/* <Route path="/resume" element={<Resume />} /> */}
      </Route>
     </>
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
