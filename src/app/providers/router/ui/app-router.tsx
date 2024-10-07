import React, {ReactNode, Suspense} from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes} from 'react-router-dom';
import {MainPage} from 'pages/main-page';
import {AboutPage} from 'pages/about-page';
import {routeConfig} from 'app/providers/router/config/route-config';

const AppRouter = () => {

  return <Suspense fallback={'loading'}>
    <Routes>
      {Object.values(routeConfig).map(({element, path}) => (
        <Route path={path} element={element} key={path} />
      ))}
    </Routes>
  </Suspense>;
};

export default AppRouter;