"use client";
import { useState } from "react";
import { 
  Box, Button, Input, VStack, Text, Heading, Container, useToast 
} from "@chakra-ui/react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate authentication
    if (email && password) {
      toast({
        title: "Login Successful.",
        description: `Welcome back, ${email}!`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="md" centerContent py={20} mt={10}>
      <Box p={8} borderWidth={1} borderRadius="lg" boxShadow="lg" w="100%" bg="white">
        <VStack spacing={4} align="flex-start">
          <Heading size="lg" color="#1a0047">Login</Heading>
          <Text color="gray.600">Enter your credentials to access your account.</Text>
          
          <form onSubmit={handleLogin} style={{ width: "100%" }}>
            <VStack spacing={4}>
              <Input 
                placeholder="Email Address" 
                type="email" 
                required 
                onChange={(e) => setEmail(e.target.value)} 
              />
              <Input 
                placeholder="Password" 
                type="password" 
                required 
                onChange={(e) => setPassword(e.target.value)} 
              />
              <Button colorScheme="pink" bg="#1a0047" color="white" w="100%" type="submit">
                Sign In
              </Button>
            </VStack>
          </form>
        </VStack>
      </Box>
    </Container>
  );
}
