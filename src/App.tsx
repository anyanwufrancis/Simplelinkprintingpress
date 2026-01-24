import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react";
// import Home from "./Components/Home";
// import About from "./Components/about/About";
import Service from "./Components/Service"
// import Contact from "./Components/Contact";
// import { Work } from "./Components/work";


function AppContent() {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    };

    const handleOnline = () => {
      setIsOnline(true);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      {showMessage && (
        <Box
          fontSize={"1.2pc"}
          fontWeight={"500"}
          fontFamily={"Tahoma"}
          pos="fixed"
          top="20px"
          right="8px"
          zIndex="1000"
          color="white"
          bgColor={isOnline ? "green" : "red"}
          px="4"
          py="2"
          borderRadius="md"
        >
          {isOnline ? "✅ You're back online" : "❌ You're currently offline"}
        </Box>
      )}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/Service" element={<Service />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default function App() {
  return <AppContent />;
}
