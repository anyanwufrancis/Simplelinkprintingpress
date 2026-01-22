// import React from "react";
// import {
//   Box,
//   Flex,
//   Text,
//   Stack,
//   Button,
//   IconButton,
//   HStack,
// } from "@chakra-ui/react";
// import { useNavigate } from "react-router-dom";
// import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";



// const Footer: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <Box bg="blue.700" color="white" py={{ base: 10, md: 16 }} mt={20}>
//       <Flex
//         direction={{ base: "column", md: "row" }}
//         justify="space-between"
//         align={{ base: "flex-start", md: "center" }}
//         w="90%"
//         mx="auto"
//         gap={{ base: 10, md: 0 }}
//       >
//         {/* === Left Section: Logo & About === */}
//         <Box flex="1">
//           <Text fontSize="2xl" fontWeight="bold" mb={3}>
//             Benny International Schools
//           </Text>
//           <Text color="gray.200" fontSize="sm" maxW="350px">
//             A Great Citadel of Learning where diligence and excellence
//             meet to shape the future of tomorrow's leaders.
//           </Text>
//         </Box>

//         {/* === Middle Section: Quick Links === */}
//         <Box flex="1">
//           <Text fontSize="xl" fontWeight="semibold" mb={4}>
//             Quick Links
//           </Text>
//           <Stack spacing={2}>
//             <Button
//               variant="link"
//               color="gray.200"
//               justifyContent="flex-start"
//               onClick={() => navigate("/about")}
//               _hover={{ color: "white" }}
//             >
//               About Us
//             </Button>
//             <Button
//               variant="link"
//               color="gray.200"
//               justifyContent="flex-start"
//               onClick={() => navigate("/admissions")}
//               _hover={{ color: "white" }}
//             >
//               Admissions
//             </Button>
//             <Button
//               variant="link"
//               color="gray.200"
//               justifyContent="flex-start"
//               onClick={() => navigate("/gallery")}
//               _hover={{ color: "white" }}
//             >
//               Gallery
//             </Button>
//             <Button
//               variant="link"
//               color="gray.200"
//               justifyContent="flex-start"
//               onClick={() => navigate("/contact")}
//               _hover={{ color: "white" }}
//             >
//               Contact Us
//             </Button>
//           </Stack>
//         </Box>

//         {/* === Right Section: Contact Info === */}
//         <Box flex="1">
//           <Text fontSize="xl" fontWeight="semibold" mb={4}>
//             Contact Us
//           </Text>
//           <Stack spacing={2} color="gray.200" mb={4}>
//             <Text>Benny School, Benin City, Edo State</Text>
//             <Text>📞 08060913700</Text>
//             <Text>✉️ bennyschools@gmail.com</Text>
//           </Stack>

//           {/* === Social Media Icons === */}
//           <HStack spacing={4}>
//             <IconButton
//               aria-label="Facebook"
//               icon={<FaFacebookF />}
//               colorScheme="White"
//               variant="ghost"
//               _hover={{ transform: "scale(1.2)", bg: "whiteAlpha.200" }}
//             />
//             <IconButton
//               aria-label="Instagram"
//               icon={<FaInstagram />}
//               colorScheme="White"
//               variant="ghost"
//               _hover={{ transform: "scale(1.2)", bg: "whiteAlpha.200" }}
//             />
//             <IconButton
//               aria-label="YouTube"
//               icon={<FaYoutube />}
//               colorScheme="white"
//               variant="ghost"
//               _hover={{ transform: "scale(1.2)", bg: "whiteAlpha.200" }}
//             />
//             <IconButton
//               aria-label="Twitter"
//               icon={<FaXTwitter />}
//               colorScheme="white"
//               variant="ghost"
//               _hover={{ transform: "scale(1.2)", bg: "whiteAlpha.200" }}
//             />
//             <IconButton
//               aria-label="TikTok"
//               icon={<FaTiktok />}
//               colorScheme="white"
//               variant="ghost"
//               _hover={{ transform: "scale(1.2)", bg: "whiteAlpha.200" }}
//             />

//           </HStack>
//         </Box>
//       </Flex>

//       {/* === Footer Bottom === */}
//       <Box
//         borderTop="1px solid"
//         borderColor="blue.500"
//         mt={10}
//         pt={6}
//         textAlign="center"
//       >
//         <Text fontSize="sm" color="gray.300">
//           © {new Date().getFullYear()} Benny International Schools. All rights reserved.
//         </Text>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;
