"use client";

import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

const Home   = () => {
  return (
    <Box
      minH="70vh"
      pt="80px" // ✅ important: space for fixed navbar
      bgImage="url('/printing ma 2.jpg')"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      position="relative"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        inset={0}
        bg="blackAlpha.600"
      />

      {/* Content */}
      <Flex
        position="relative"
        zIndex={2}
        direction="column"
        justify="center"
        align="flex-start"
        h="100%"
        px={{ base: 6, md: 12 }}
        color="white"
      >
        <Heading fontSize={{ base: "3xl", md: "6xl" }}>
          Quality Services For Less
        </Heading>

        <Text mt={4} maxW="600px">
          We offer the best digital services at unbeatable prices.
        </Text>

        <Button mt={6} colorScheme="pink" size="lg">
          Contact Us
        </Button>
      </Flex>
    </Box>
  );
};

export default Home;
