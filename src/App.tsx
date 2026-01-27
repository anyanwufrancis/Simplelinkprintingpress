import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/about/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  );
}

export default function App() {
  return <AppContent />;
}