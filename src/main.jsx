import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// route imports:
import Root, { loader as rootLoader } from './routes/root.jsx';
import ErrorPage from './routes/errorPage.jsx';
import ProjectsPage from './routes/projects.jsx';
import MalovaDesigns from './routes/projects/MalovaDesigns.jsx';
import SheepAndWolves from './routes/projects/SheepAndWolves.jsx';
import NomNomNavigator from './routes/projects/NomNomNavigator.jsx';
import MakeGvlGreener from './routes/projects/MakeGVLGreener.jsx';
import Pyme from './routes/projects/Pyme.jsx';

import AboutMe from './routes/about.jsx';
import Wireframes from './routes/wireframes.jsx';
import Contact from './routes/contact.jsx';
import Tech from './routes/tech.jsx';
import HomePage from './routes/home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'projects/malovadesigns',
        element: <MalovaDesigns />,
      },
      {
        path: 'projects/sheepandwolves',
        element: <SheepAndWolves />,
      },
      {
        path: 'projects/nomnomnavigator',
        element: <NomNomNavigator />,
      },
      {
        path: 'projects/pyme',
        element: <Pyme />,
      },
      {
        path: 'projects/makegvlgreener',
        element: <MakeGvlGreener />,
      },

      {
        path: 'about',
        element: <AboutMe />,
      },
      {
        path: 'wireframes',
        element: <Wireframes />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'tech',
        element: <Tech />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
