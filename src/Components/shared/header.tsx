"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
// import PagesDropdown from "../PagesDropdown";

const Header = () => {
  return (
    <Box
      bg="#1a0047"       // navbar background only
      px={{ base: 4, md: 10 }}
      py={4}
      position="fixed"
      top={0}
      w="100%"
      zIndex={1000}
      boxShadow="sm"
    >
      <Flex align="center" justify="space-between">
        {/* Logo */}
        <Text color="white" fontSize="xl" fontWeight="bold">
          Ahiaoma
        </Text>

        {/* Nav Links */}
        <Flex gap={8} align="center">
          <Text color="white" cursor="pointer">Home</Text>
          <Text color="white" cursor="pointer">About</Text>

          {/* Dropdown */}
          {/* <PagesDropdown /> */}

          <Text color="white" cursor="pointer">Service</Text>
          <Text color="white" cursor="pointer">Project</Text>
          <Text color="white" cursor="pointer">Blog</Text>
          <Text color="white" cursor="pointer">Shop</Text>
          <Text color="white" cursor="pointer">Contact</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
