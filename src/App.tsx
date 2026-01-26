import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/about/About";
import Contact from "./Components/Contact";

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
  );
}

export default function App() {
  return <AppContent />;
}