import { ERoutes } from '@src/constants';
import { CreateTaskPage, EditorPage, HomePage } from '@src/pages';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ERoutes.ROOT}>
          <Route index element={<HomePage />} />
          <Route path={ERoutes.HOME} element={<HomePage />} />
        </Route>
        <Route path={ERoutes.EDITOR} element={<EditorPage />} />
        <Route path={ERoutes.CREATE_TASK} element={<CreateTaskPage />} />
      </Routes>
    </BrowserRouter>
  );
};
