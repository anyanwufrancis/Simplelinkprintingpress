import { Routes, Route } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import { MdReplay } from "react-icons/md";
import { useEffect, useState } from "react";
import { NetworkLineLoader } from "./Components/Service/NetworkLoader";
import { motion } from "framer-motion"
// import Home from "./Components/Home";
// import About from "./Components/about/About";
import Service from "./Components/Service"
// import Contact from "./Components/Contact";
// import { Work } from "./Components/work";


function AppContent() {
  const MotionBox = motion(Box);
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [showMessage, setShowMessage] = useState(false);

  const handleRetry = () => {
    location.reload()
  }

  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false);
      setShowMessage(true);
    };

    const handleOnline = () => {
      setIsOnline(true);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
    };
  }, []);


  return (
    <>
      {showMessage && (
        <MotionBox
          fontSize={"1pc"}
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
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <Box
            pos="fixed"
            top="20px"
            right="8px"
            bg={isOnline ? "green" : "red"}
            color="white"
            px="4"
            py="3"
            borderRadius="md"
          >
            {isOnline
              ? "🌐 Back online — You're now connected"
              : "⛔ You're offline — waiting for connection"}

            <NetworkLineLoader isOnline={isOnline} />
          </Box>

        </MotionBox>
      )}

      {!isOnline && (
        <Box color={"white"} fontFamily={"Tahoma"} position="fixed" bgColor={"gray.600"} display={"flex"} flexDir={"column"} alignItems={"center"} justifyContent={"center"} bottom="0" width="100%" h={"100%"} zIndex="999">
          <Text fontSize={"2pc"} fontWeight={"700"}>Offline</Text>
          <Text fontSize={"19px"}>Please check your internet connection</Text>
          <Button
            color={"white"}
            gap={"3px"}
            mt="25px"
            bg="rgba(255, 255, 255, 0.05)"
            onClick={handleRetry}
          >
            <MdReplay fontSize={"1.3pc"} />
            Retry
          </Button>
        </Box>
      )}
      {isOnline && (
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/Service" element={<Service />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>)}
    </>
  );
}

export default function App() {
  return <AppContent />;
}
