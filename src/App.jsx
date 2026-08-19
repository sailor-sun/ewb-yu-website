import React from "react";
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;