import React from "react";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import HeroTablePage from "./pages/HeroTable";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="table" element={<HeroTablePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
