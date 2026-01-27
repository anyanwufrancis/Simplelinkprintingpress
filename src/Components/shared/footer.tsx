import { Box, Flex, VStack, HStack, Icon, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
// import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { IoEllipseSharp } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const MotionBox = motion(Box);

  // Optional spinning effect (not used in this footer but kept)

  // // Animation variants
  // const itemVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  // };

  return (
    <MotionBox >
      {/* Main Footer */}
      <Box bg="#000" color="#fff" p={4} fontFamily="Arial, sans-serif" mt={10}>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          maxW="1200px"
          mx="auto"
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "start", md: "center" }}
          gap={8}
        >
          {/* About Section */}
          <Box minW="200px" mb={{ base: 4, md: 0 }}>
            <Text fontWeight="bold" fontSize="2xl" color="#00C853">
              SimpleLinkPrintingPress
            </Text>
            <Text
              mt={2}
              fontSize="lg"
              w={{ base: "19em", md: "29em" }}
              color="gray.400"
            >
              Experience the future of printing with our high-quality custom
              solutions. From personalized products to precision-driven results,
              we redefine what’s possible. Empowering creativity and
              connection.{" "}
            </Text>
            <Flex gap={"1em"}>

            
            <Box
              w={"2em"}
              rounded={"0.5em"}
              py={"0.5em"}
              px={"0.5em"}
              color={"pink.400"}
              bg={"white"}
            >
              <FaFacebookF />
            </Box>
            <Box
              w={"2em"}
              rounded={"0.5em"}
              py={"0.5em"}
              px={"0.5em"}
              color={"pink.400"}
              bg={"white"}
            >
              <FaXTwitter />
            </Box>
            <Box
              w={"2em"}
              rounded={"0.5em"}
              py={"0.5em"}
              px={"0.5em"}
              color={"pink.400"}
              bg={"white"}
            >
              <FaInstagram />
            </Box>
            </Flex>
          </Box>

          {/* Quick Links */}
          <Box minW="200px" mb={{ base: 4, md: 0 }}>
            <Text fontWeight="bold" fontSize="2xl" mb={4}>
              Quick Links
            </Text>
            <VStack align="start" gap={2}>
              <Flex
                gap="5px"
                align="center"
                _hover={{ transform: "scale(1.05)", color: "#48e985ff" }}
                transition="transform 0.2s"
              >
                <IoEllipseSharp size="8px" color="green" />
                <Link to="/about">
                  <Text cursor="pointer" color="gray.400" fontSize="lg">
                    About Us
                  </Text>
                </Link>
              </Flex>
              <Flex gap="5px" align="center">
                <IoEllipseSharp size="8px" color="green" />
                <Link to="/service">
                  <Text cursor="pointer" color="gray.400" fontSize="lg">
                    Services
                  </Text>
                </Link>
              </Flex>
              <Flex gap="5px" align="center">
                <IoEllipseSharp size="8px" color="green" />
                <Link to="/#projects">
                  <Text cursor="pointer" color="gray.400" fontSize="lg">
                    Project
                  </Text>
                </Link>
              </Flex>
              <Flex gap="5px" align="center">
                <IoEllipseSharp size="8px" color="green" />
                <Link to="/contact">
                  <Text cursor="pointer" color="gray.400" fontSize="lg">
                    Contact
                  </Text>
                </Link>
              </Flex>
            </VStack>
          </Box>

          {/* Contact Section */}
          <Box minW="200px" mb={{ base: 4, md: 12 }}>
            <Text fontWeight="bold" fontSize="2xl" mb={4}>
              Contact
            </Text>
            <VStack align="start" gap={2}>
              <HStack align="center" gap={2}>
                <Box bg="#4CAF50" p={2} borderRadius="md" h="2.2em">
                  <Icon as={MdOutlineEmail} color="#fff" boxSize={4} />
                </Box>
                <Text fontSize="lg" color="gray.400">
                  ahiaoma37@gmail.com
                </Text>
              </HStack>
              <HStack align="center" gap={2}>
                <Box bg="#2196F3" p={2} borderRadius="md" h="2.2em">
                  <Icon as={FaPhone} color="#fff" boxSize={4} />
                </Box>
                <Text fontSize="lg" color="gray.400">
                  +234 91 6767 8144,
                </Text>
                <Text fontSize="lg" color="gray.400">
                  +234 80 9889 8967
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Flex>

        {/* Divider */}
        <MotionBox>
          <Box border="1px" borderColor="gray.600" my={4} w="100%" />
          <Flex
            flexDirection={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            mx="auto"
            px={4}
            gap={{ base: 2, md: 0 }}
          >
            <Text
              fontSize="sm"
              ml={{ base: "-1em", md: "-3em" }}
              w={{ base: "24em", md: "29em" }}
              textAlign="center"
            >
              © 2025 Ahiaoma. All rights reserved.
            </Text>

            {/* Privacy and other links */}
            <Flex
              gap={4}
              justify={{ base: "center", md: "flex-end" }}
              w="100%"
              mt={{ base: 2, md: 0 }}
              flexWrap="wrap"
            >
              <Text cursor="pointer" fontSize="sm">
                Privacy Policy
              </Text>
              <Text cursor="pointer" fontSize="sm">
                Terms of Service
              </Text>
              <Text cursor="pointer" fontSize="sm">
                Cookies Policy
              </Text>
            </Flex>
          </Flex>
        </MotionBox>
      </Box>
    </MotionBox>
  );
};

export default Footer;
