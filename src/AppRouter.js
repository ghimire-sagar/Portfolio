import React from 'react';
import {Home, WorksLists, AboutMe, HireMe} from './components';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />        
                <Route path="/WorksLists" element={<WorksLists />} />
                <Route path="/AboutMe" element={<AboutMe />} />
                <Route path="/HireMe" element={<HireMe />} />
            </Routes>
        </BrowserRouter>
  );
}

export default AppRouter