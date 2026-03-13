// Header.tsx

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
  Link as ChakraLink,
} from "@chakra-ui/react";
import { FaSearch, FaBars } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { useLocation } from "react-router-dom";

type HeaderProps = {
  onOpenSearch: () => void;
};

export default function Header({ onOpenSearch }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const currentPath = location.pathname;

  // Show search only on home page
  const isHome = currentPath === "/";

  const navLinks = [
    { label: "Home",    href: "/" },
    { label: "About",   href: "/About" },
    { label: "Service", href: "/Service" },
    { label: "Contact", href: "/Contact" },
  ];

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

          {/* Desktop navigation */}
          <Flex gap={8} align="center" display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => {
              const isActive = currentPath === link.href;

              return (
                <ChakraLink
                  key={link.href}
                  href={link.href}
                  color={isActive ? "pink.400" : "white"}
                  fontWeight={isActive ? "bold" : "medium"}
                  textDecoration="none"
                  _hover={{ color: "pink.400" }}
                  position="relative"
                  _after={
                    isActive
                      ? {
                          content: '""',
                          position: "absolute",
                          width: "100%",
                          height: "2px",
                          bottom: "-6px",
                          left: 0,
                          bg: "pink.400",
                          borderRadius: "full",
                        }
                      : {}
                  }
                >
                  {link.label}
                </ChakraLink>
              );
            })}
          </Flex>

          {/* Right icons - search only on home */}
          <Flex align="center" gap={3}>
            {isHome && (
              <IconButton
                aria-label="Global Search"
                icon={<FaSearch />}
                variant="ghost"
                color="white"
                fontSize="18px"
                _hover={{ bg: "whiteAlpha.200" }}
                onClick={onOpenSearch}
              />
            )}

            <ChakraLink href="/Contact">
              <IconButton
                aria-label="Contact"
                icon={<IoMdContact />}
                variant="ghost"
                color="white"
                fontSize="20px"
                _hover={{ bg: "whiteAlpha.200" }}
              />
            </ChakraLink>
          </Flex>
        </Flex>
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="#1a0047" color="white">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" borderColor="whiteAlpha.300">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={6} mt={6}>
              {navLinks.map((link) => {
                const isActive = currentPath === link.href;

                return (
                  <ChakraLink
                    key={link.href}
                    href={link.href}
                    color={isActive ? "pink.400" : "white"}
                    fontWeight={isActive ? "bold" : "medium"}
                    fontSize="lg"
                    _hover={{ color: "pink.400" }}
                    onClick={onClose}
                  >
                    {link.label}
                  </ChakraLink>
                );
              })}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}