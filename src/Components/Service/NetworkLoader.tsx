import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export function NetworkLineLoader({ isOnline }: { isOnline: boolean }) {
    return (
        <Box
            w="cover"
            h="4px"
            bg="gray.300"
            borderRadius="full"
            overflow="hidden"
            position="relative"
            mt="6px"
        >
            <MotionBox
                key={isOnline ? "online" : "offline"}
                position="absolute"
                top="0"
                left="0"
                h="100%"
                w="70px"
                bg={isOnline ? "green.400" : "red.400"}
                borderRadius="full"
                boxShadow={
                    isOnline
                        ? "0 0 14px rgba(72,187,120,0.9)"
                        : "0 0 6px rgba(245,101,101,0.6)"
                }
                initial={{ x: "-100%" }}
                animate={{ x: "260px" }}
                transition={{
                    duration: isOnline ? 0.9 : 1.3,
                    ease: "linear",
                    repeat: isOnline ? 0 : Infinity,
                }}
            />
        </Box>
    );
}
