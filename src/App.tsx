import { Flex, Image } from "@chakra-ui/react";
import { Routes, Route,  } from "react-router-dom";
import { useState, useEffect } from "react";

import About from "./Components/about/About";

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Flex align="center" justify="center" height="100vh" bg="white">
        <Image src="/45.svg" alt="Loading..." boxSize="50px" />
      </Flex>
    );
  }

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