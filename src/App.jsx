import React from "react";
import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Join from "./pages/Join";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about" element={<About />} />
      <Route path="/join" element={<Join />} />
      <Route path="/contact" element={<ContactPage />} />

    </Routes>
  );
}

export default App;