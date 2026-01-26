"use client";

import {
  Box,
  Flex,
  Text,
  Input,
  IconButton,
  Collapse,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa"; // Added FaBars
import { IoMdContact } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  // useDisclosure manages the state for the mobile menu drawer
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = ["Home", "About", "Service", "Contact"];

  return (
    <>
      <Box
        bg="#1a0047"
        px={{ base: 4, md: 10 }}
        py={4}
        position="fixed"
        top={0}
        w="100%"
        zIndex={1000}
        boxShadow="sm"
      >
        <Flex align="center" justify="space-between">
          {/* Mobile Menu Icon (Visible only on small screens) */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            icon={<FaBars />}
            aria-label="Open Menu"
            variant="ghost"
            color="white"
            _hover={{ bg: "whiteAlpha.200" }}
          />

          {/* Logo */}
          <Text color="white" fontSize="xl" fontWeight="bold">
            SimpleLinkPress
          </Text>

          {/* Desktop Nav Links (Hidden on mobile) */}
          <Flex gap={8} align="center" display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Text key={link} color="white" cursor="pointer" _hover={{ color: "pink.400" }}>
                {link}
              </Text>
            ))}
          </Flex>

          {/* Icons */}
          <Flex align="center" gap={3}>
            <IconButton
              aria-label="Search"
              icon={<FaSearch />}
              variant="ghost"
              color="white"
              fontSize="18px"
              _hover={{ bg: "whiteAlpha.200" }}
              onClick={() => setShowSearch((prev) => !prev)}
            />

            <IconButton
              aria-label="Contact"
              icon={<IoMdContact />}
              variant="ghost"
              color="white"
              fontSize="20px"
              _hover={{ bg: "whiteAlpha.200" }}
            />
          </Flex>
        </Flex>
      </Box>

      {/* Mobile Drawer Menu */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#1a0047" color="white">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" borderColor="whiteAlpha.300">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={6} mt={4}>
              {navLinks.map((link) => (
                <Text key={link} fontSize="lg" onClick={onClose} cursor="pointer" w="100%">
                  {link}
                </Text>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Search Bar Dropdown */}
      <Collapse in={showSearch} animateOpacity>
        <Box
          position="fixed"
          top="70px"
          right={{ base: 4, md: 10 }}
          w="auto"
          maxW={{ base: "90%", md: "400px" }}
          bg="white"
          px={4}
          py={4}
          zIndex={999}
          boxShadow="md"
          borderRadius="lg"
        >
          <Input
            placeholder="Search products, services..."
            size="lg"
            autoFocus
            borderRadius="full"
            focusBorderColor="pink.400"
          />
        </Box>
      </Collapse>
    </>
  );
};

export default Header;
