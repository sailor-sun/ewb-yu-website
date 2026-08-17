import React from "react";
import { Routes, Route } from "react-router";

import Events from "./pages/Events";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Events />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;