"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

type HeaderProps = {
  onOpenSearch: () => void;
};

const Header = ({ onOpenSearch }: HeaderProps) => {
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
          <IconButton
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            icon={<FaBars />}
            aria-label="Open Menu"
            variant="ghost"
            color="white"
            _hover={{ bg: "whiteAlpha.200" }}
          />

          <Text color="white" fontSize="xl" fontWeight="bold">
            SimpleLinkPress
          </Text>

          <Flex gap={8} align="center" display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Text
                key={link}
                color="white"
                cursor="pointer"
                _hover={{ color: "pink.400" }}
              >
                {link}
              </Text>
            ))}
          </Flex>

          <Flex align="center" gap={3}>
            {/* 🔥 GLOBAL SEARCH BUTTON */}
            <IconButton
              aria-label="Global Search"
              icon={<FaSearch />}
              variant="ghost"
              color="white"
              fontSize="18px"
              _hover={{ bg: "whiteAlpha.200" }}
              onClick={onOpenSearch}
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

      {/* Mobile Menu */}
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
                <Text
                  key={link}
                  fontSize="lg"
                  onClick={onClose}
                  cursor="pointer"
                  w="100%"
                >
                  {link}
                </Text>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
