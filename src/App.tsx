import { Routes, Route } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import { MdReplay } from "react-icons/md";
import { useEffect, useState } from "react";
import { NetworkLineLoader } from "./Components/Service/NetworkLoader";
import { motion } from "framer-motion";
import Service from "./Components/Service";

function AppContent() {
  const MotionBox = motion(Box);
  const MotionIcon = motion(MdReplay);

  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [showMessage, setShowMessage] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = () => {
    setIsRetrying(true);

    setTimeout(() => {
      location.reload();
    }, 800); // allow spin before reload
  };

  useEffect(() => {
    const handleOffline = () => {
      setIsOnline(false);
      setShowMessage(true);
      setIsRetrying(false);
    };

    const handleOnline = () => {
      setIsOnline(true);
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
      setIsRetrying(false);
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
        <MotionBox
          pos="fixed"
          top="20px"
          right="8px"
          zIndex="1000"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <Box
            bg={isOnline ? "green" : "red"}
            color="white"
            px="4"
            py="3"
            borderRadius="md"
            fontFamily="Tahoma"
            fontWeight="500"
          >
            {isOnline
              ? "🌐 Back online — You're now connected"
              : "⛔ You're offline — waiting for connection"}
            <NetworkLineLoader isOnline={isOnline} />
          </Box>
        </MotionBox>
      )}

      {!isOnline && (
        <Box
          position="fixed"
          inset="0"
          bg="gray.600"
          color="white"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          fontFamily="Tahoma"
          zIndex="999"
        >
          <Text fontSize="2pc" fontWeight="700">
            Offline
          </Text>
          <Text fontSize="19px">
            Please check your internet connection
          </Text>

          <Button
            mt="25px"
            gap="6px"
            bg="rgba(255,255,255,0.05)"
            color="white"
            _hover={{}}
            _active={{ bg: "rgba(255,255,255,0.05)" }}
            onClick={handleRetry}
            isDisabled={isRetrying}
          >
            <MotionIcon
              fontSize="1.3pc"
              animate={isRetrying ? { rotate: -360 } : { rotate: 0 }}
              transition={
                isRetrying
                  ? { repeat: Infinity, duration: 0.8, ease: "linear" }
                  : {}
              }
            />
            {isRetrying ? "Retrying..." : "Retry"}
          </Button>
        </Box>
      )}

      {isOnline && (
        <Routes>
          <Route path="/Service" element={<Service />} />
        </Routes>
      )}
    </>
  );
}

export default function App() {
  return <AppContent />;
}
