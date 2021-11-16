import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginScreen } from "../pages/Auth/LoginScreen";
import { RegisterScreen } from "../pages/Auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box_container" >
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      </div>
    </div>
  );
};
