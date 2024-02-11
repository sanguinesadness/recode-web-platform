import { ERoutes } from '@src/constants';
import { Editor } from '@src/pages/Editor';
import { Home } from '@src/pages/Home';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ERoutes.ROOT}>
          <Route index element={<Home />} />
          <Route path={ERoutes.HOME} element={<Home />} />
        </Route>
        <Route path={ERoutes.EDITOR} element={<Editor />} />
      </Routes>
    </BrowserRouter>
  );
};
