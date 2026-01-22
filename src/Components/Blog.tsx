// import { useState, useEffect } from "react";
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   Image,
//   Center,
//   VStack,
// } from "@chakra-ui/react";

// export default function BlogSection() {

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <Flex align="center" justify="center" height="100vh" bg="white">
//         <Image
//           src="src/assets/45.svg"
//           alt="Loading..."
//           boxSize="50px"
//         />
//       </Flex>
//     );
//   }

//   return (
//     <Box bg="white">
//       {/* Banner Section */}
//       <Box position="relative" h="300px" w="full" overflow="hidden" borderRadius="md" mb={28}>
//         <Image
//           src="src/assets/hero_image.jpeg"
//           alt="Blog Banner"
//           objectFit="cover"
//           w="full"
//           h="full"
//           filter="brightness(40%)"
//           px={{ base: "5", md: "10%" }}
//           mt={-10}
//         />
//         <Center position="absolute" top="0" left="0" w="full" h="full"
//           mt={-5}>
//           <Text color="white" fontSize="xl" fontWeight="semibold" fontFamily="'Playfair Display', serif">
//             Our Blogposts
//           </Text>
//         </Center>
//       </Box>

//       {/* Recent Articles & Popular Writers */}
//       <Flex
//         direction={{ base: "column", md: "row" }}
//         justify="space-between"
//         align={{ base: "flex-start", md: "center" }}
//         mt={12}
//         px={{ base: 6, md: 20 }}
//         gap={8}
//       >
//         {/* Left Side - Recent Articles */}
//         <Heading color="blue.700" size="2xl">
//           Recent Articles
//         </Heading>

//         {/* Right Side - Popular Writers */}
//         <VStack
//           align="stretch"
//           spacing={0}
//           border="1px solid"
//           borderColor="blue.600"
//           borderRadius="md"
//           w={{ base: "full", md: "sm" }}
//         >
//           <Box bg="blue.700" p={3}>
//             <Text color="white" fontWeight="bold" fontSize="lg" textAlign="center">
//               OUR POPULAR WRITERS
//             </Text>
//           </Box>
//           {/* placeholder for content */}
//           <Box h="30px" bg="white"></Box>
//         </VStack>
//       </Flex>
//     </Box>
//   );
// }
