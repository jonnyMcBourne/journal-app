import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import {JournalScreen } from '../pages/Journal/JournalScreen'

const MainRouter = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={ <JournalScreen/> } />
          <Route path='/auth*' element={ <AuthRouter/> } />
        </Routes>
      </div>
    </Router>
  );
};
export default MainRouter;
