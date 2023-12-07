import { useState } from "react";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { HomePage } from "./pages/HomePage/HomePage";
import { AuthPage } from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
