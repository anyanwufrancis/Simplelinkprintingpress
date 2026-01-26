import { Flex, Image } from "@chakra-ui/react";
import { Routes, Route,  } from "react-router-dom";
import { useState, useEffect } from "react";

import About from "./Components/about/About";

function AppContent() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default function App() {
  return <AppContent />;
}