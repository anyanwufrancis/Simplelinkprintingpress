// "use client";

// import {
//   Box,
//   Flex,
//   Image,
//   Heading,
//   Text,
//   VStack,
//   Center,
//   Circle,
//   HStack,
//   Icon,
//   Button,
//   Link,
// } from "@chakra-ui/react";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { FaPhone } from "react-icons/fa6";
// import { FiX } from "react-icons/fi";
// import { IoEllipseSharp } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";

// const MotionBox = motion(Box);
// const MotionIcon = motion(IoEllipseSharp);
// const MotionCircle = motion(Circle);

// export const Work = () => {
//   // Variants for container and items for staggered animation
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <>
//       {/* Header Section */}
//       {/* Header Navigation */}
//       <MotionBox
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         <Box overflowX="hidden" width="100%">
//           <Flex
//             alignItems="center"
//             justifyContent="space-between"
//             p={4}
//             bg="white"
//             // boxShadow="md"
//             borderRadius="md"
//           >
//             {/* Logo */}
//             <Flex align="center" gap={2} w="9em" color="green.600">
//               <Image src="ahiaoma_text_logo.png" alt="Logo" />
//             </Flex>

//             <Flex gap={6} display={{ base: "none", md: "flex" }}>
//               {/* Features Link */}
//               <Link href="/">
//                 <Text
//                   _hover={{ color: "green.500" }}
//                   fontWeight="semibold"
//                   color="gray.700"
//                   cursor="pointer"
//                 >
//                   Home
//                 </Text>
//               </Link>

//               {/* About Us Link */}
//               <Link href="/about">
//                 <Text
//                   _hover={{ color: "green.500" }}
//                   fontWeight="semibold"
//                   color="gray.700"
//                   cursor="pointer"
//                 >
//                   About Us
//                 </Text>
//               </Link>

//               {/* Contact Us Link */}
//               <Link href="/contact">
//                 <Text
//                   _hover={{ color: "green.500" }}
//                   fontWeight="semibold"
//                   color="gray.700"
//                   cursor="pointer"
//                 >
//                   Contact Us
//                 </Text>
//               </Link>
//             </Flex>

//             {/* Join Waitlist Button */}
//             <MotionBox variants={itemVariants}>
//               <Button
//                 bg="green"
//                 rounded="full"
//                 px={4}
//                 py={2}
//                 fontSize={"xl"}
//                 color="white"
//                 _hover={{ bg: "green.700" }}
//                 display={{ base: "none", md: "block" }}
//               >
//                 Join Waitlist
//               </Button>
//             </MotionBox>
//           </Flex>
//           {/* Mobile Menu Icon (hidden when open) */}
//           {!isOpen && (
//             <Box
//               display={{ base: "flex", md: "none" }}
//               position="absolute"
//               top={4}
//               right={4}
//               zIndex={20}
//               cursor="pointer"
//               w="2em"
//               h="3em"
//               alignItems="center"
//               justifyContent="center"
//             >
//               <Image
//                 src="menu.png"
//                 alt="Menu"
//                 onClick={toggleDropdown}
//                 w="100%"
//                 h="100%"
//                 objectFit="contain"
//               />
//             </Box>
//           )}

//           {/* Dropdown menu */}
//           {isOpen && (
//             <MotionBox
//               position="absolute"
//               top={0}
//               left={0}
//               right={0}
//               zIndex={15}
//               bg="white"
//               initial={{ y: "-100%" }}
//               animate={{ y: 0 }}
//               exit={{ y: "-100%" }}
//               transition={{ type: "spring", stiffness: 100, damping: 20 }}
//               boxShadow="lg"
//               w="100%"
//               px={4}
//               py={4}
//             >
//               {/* Header inside dropdown */}
//               <Flex justify="space-between" mb={4} align="center">
//                 <Box></Box>

//                 {/* Cancel Icon */}
//                 <Box cursor="pointer" onClick={toggleDropdown}>
//                   <FiX size={24} />
//                 </Box>
//               </Flex>

//               {/* Links */}
//               <VStack spacing={4} align="stretch">
//                 {/* <Link
//         href="/#powerful-features"
//         onClick={toggleDropdown}
//         _hover={{ bg: "#e0e0e0" }}
//         px={4}
//         py={2}
//         borderRadius="md"
//         transition="background-color 0.2s"
//       >
//         Features
//       </Link> */}

//                 <Link
//                   href="/"
//                   onClick={toggleDropdown}
//                   _hover={{ bg: "#e0e0e0" }}
//                   px={4}
//                   py={2}
//                   borderRadius="md"
//                   transition="background-color 0.2s"
//                 >
//                   Home
//                 </Link>

//                 <Link
//                   href="/about"
//                   onClick={toggleDropdown}
//                   _hover={{ bg: "#e0e0e0" }}
//                   px={4}
//                   py={2}
//                   borderRadius="md"
//                   transition="background-color 0.2s"
//                 >
//                   About Us
//                 </Link>

//                 <Link
//                   href="/contact"
//                   onClick={toggleDropdown}
//                   _hover={{ bg: "#e0e0e0" }}
//                   px={4}
//                   py={2}
//                   borderRadius="md"
//                   transition="background-color 0.2s"
//                 >
//                   Contact Us
//                 </Link>
//               </VStack>
//             </MotionBox>
//           )}
//           <MotionBox variants={itemVariants}>
//             <Box
//               bg="linear-gradient(to top right, #fafafaff, #ffffff)"
//               mb={"2em"}
//               py={"0.5em"}
//             >
//               <Box
//                 display="block"
//                 textAlign="center"
//                 height="15vh"
//                 position="relative"
//               >
//                 <Flex
//                   rounded="1em"
//                   backgroundColor="#a1ebaeff"
//                   w="9em"
//                   align={"center"}
//                   gap={"0.5em"}
//                   px="0.9em"
//                   py="0.3em"
//                   position="absolute"
//                   top="79%"
//                   left="50%"
//                   transform="translate(-50%, -50%)"
//                 >
//                   <Box w={".8em"}>
//                     <Image src="mobile.png" />
//                   </Box>
//                   <Text color="green" textAlign="center" fontSize="md">
//                     How it Works
//                   </Text>
//                 </Flex>
//               </Box>

//               {/* Steps Header */}
//               <Flex
//                 align="center"
//                 justify="center"
//                 textAlign="center"
//                 flexDir="column"
//                 mb="4em"
//                 position="relative"
//               >
//                 {/* Floating Animated Ellipses */}
//                 <MotionBox position="absolute" left="10%" top="65%">
//                   <MotionIcon
//                     color={"rgb(70, 116, 161)"}
//                     animate={{ y: [0, -15, 0] }}
//                     transition={{
//                       duration: 2,
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     }}
//                   />
//                 </MotionBox>

//                 <MotionBox position="absolute" right="15%" bottom="60%">
//                   <MotionIcon
//                     color="aqua"
//                     //  width={"70em"}
//                     animate={{ y: [0, -20, 0] }}
//                     transition={{
//                       duration: 2.5,
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     }}
//                   />
//                 </MotionBox>

//                 <MotionBox position="absolute" left="5%" top="10%">
//                   <MotionIcon
//                     color="lightgreen"
//                     animate={{ y: [0, -15, 0] }}
//                     transition={{
//                       duration: 1.8,
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     }}
//                   />
//                 </MotionBox>

//                 <VStack align="center" spacing={4} mt={8}>
//                   <Heading
//                     fontSize={{ base: "7xl", md: "6xl" }}
//                     fontWeight="bold"
//                     color="black"
//                     textAlign="center"
//                   >
//                     Simple Steps To Shop Smart
//                   </Heading>
//                   <Box
//                     mt="0.5em"
//                     fontWeight="normal"
//                     fontSize="xl"
//                     w={{ base: "78%", md: "37.5em" }}
//                     textAlign="center"
//                     color="gray"
//                   >
//                     <Text>
//                       Discover how easy it is to buy and sell on Ahiaoma. Follow
//                       our step-by-step guide to get started.
//                     </Text>
//                   </Box>
//                 </VStack>
//               </Flex>
//             </Box>
//           </MotionBox>
//           <MotionBox variants={itemVariants}>
//             {/* Buyer Label */}
//             <Center flexDirection="column">
//               <Flex
//                 gap="0.3em"
//                 w="8em"
//                 rounded="2em"
//                 py="0.2em"
//                 px="0.6em"
//                 align="center"
//                 backgroundColor="#aaf1faff"
//               >
//                 <Box w="1.3em">
//                   <Image src="shopping_cart.svg" alt="cart" />
//                 </Box>
//                 <Box color="blue" fontWeight="500" fontSize="md">
//                   <Text>For Buyers</Text>
//                 </Box>
//               </Flex>

//               <Heading fontSize="6xl" mt="0.5em" mb="0.2em" textAlign="center">
//                 How to Buy on Ahiaoma
//               </Heading>

//               <Text
//                 fontSize={"xl"}
//                 textAlign="center"
//                 color="gray.600"
//                 mb="2em"
//               >
//                 From browsing to delivery, here’s your complete buying journey
//               </Text>
//             </Center>
//           </MotionBox>

//           {/* Step 1: Browse Products */}
//           <MotionBox variants={itemVariants}>
//             <Flex
//               direction={{ base: "column", md: "row" }}
//               align="center"
//               justify="space-between"
//               px={{ base: "2em", md: "8em" }}
//               mt="2em"
//               mb="4em"
//               position="relative"
//             >
//               {/* Left Text Section */}
//               <Box
//                 ml={{ base: "1em", md: "0.3em" }}
//                 flex="1"
//                 textAlign={{ base: "center", md: "left" }}
//               >
//                 <Flex align="center" mb="1.5em">
//                   <Circle
//                     size="3em"
//                     bg="green.400"
//                     color="white"
//                     fontWeight="bold"
//                   >
//                     1
//                   </Circle>
//                   <Box
//                     h="4px"
//                     w="4em"
//                     bg="green.400"
//                     rounded={"1em"}
//                     ml="0.5em"
//                   />
//                 </Flex>
//                 <Box>
//                   <Heading fontSize="4xl" mb="0.5em">
//                     Browse Products
//                   </Heading>
//                   <Text fontSize="lg" color="gray.600">
//                     Explore thousands of products from verified sellers across
//                     Nigeria
//                   </Text>
//                 </Box>
//               </Box>

//               {/* Right Image Section with bouncing number 1 */}
//               <Box
//                 flex="1"
//                 textAlign="center"
//                 mt={{ base: "2em", md: "0" }}
//                 position="relative"
//               >
//                 {/* Bouncing Number 1 at the Top of Phone */}
//                 <MotionCircle
//                   size="3.5em"
//                   bg="blue.500"
//                   color="white"
//                   fontWeight="bold"
//                   position="absolute"
//                   top="1.9em"
//                   left={{ base: "79%", md: "60%" }}
//                   transform="translateX(-50%)"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{
//                     duration: 1.8,
//                     ease: "easeInOut",
//                     repeat: Infinity,
//                   }}
//                   zIndex="2"
//                 >
//                   1
//                 </MotionCircle>

//                 {/* Phone container with smooth ease in-out hover effect */}
//                 <MotionBox
//                   display="inline-block"
//                   p="0.7em"
//                   borderRadius="2.3em"
//                   backgroundColor="black"
//                   mt={"3em"}
//                   boxShadow="xl"
//                   w={{ base: "13em", md: "13em" }}
//                   whileHover={{
//                     scale: 1.08,
//                     transition: {
//                       duration: 0.6,
//                       ease: "easeInOut",
//                     },
//                   }}
//                 >
//                   <Image
//                     src="ahiaoma_buyer_app_screenshots/products_page_view_products.png"
//                     alt="Browse Products screen"
//                     borderRadius="1.5em"
//                     w="100%"
//                     h={"26em"}
//                   />
//                 </MotionBox>
//               </Box>
//             </Flex>
//           </MotionBox>
//           {/* Step 2: Browse Products */}
//           <MotionBox variants={itemVariants}>
//             <Flex
//               direction={{ base: "column-reverse", md: "row" }}
//               align="center"
//               justify="space-between"
//               px={{ base: "2em", md: "8em" }}
//               mt="2em"
//               mb="4em"
//               position="relative"
//             >
//               {/* Left Text Section */}

//               {/* Right Image Section with bouncing number 1 */}
//               <Box
//                 flex="1"
//                 textAlign="center"
//                 mt={{ base: "2em", md: "0" }}
//                 position="relative"
//               >
//                 {/* Bouncing Number 1 at the Top of Phone */}
//                 <MotionCircle
//                   size="3.5em"
//                   bg="blue.500"
//                   color="white"
//                   fontWeight="bold"
//                   position="absolute"
//                   top="1.9em"
//                   left={{ base: "79%", md: "64%" }}
//                   transform="translateX(-50%)"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{
//                     duration: 1.8,
//                     ease: "easeInOut",
//                     repeat: Infinity,
//                   }}
//                   zIndex="2"
//                 >
//                   2
//                 </MotionCircle>

//                 {/* Phone container with smooth ease in-out hover effect */}
//                 <MotionBox
//                   display="inline-block"
//                   p="0.7em"
//                   borderRadius="2.3em"
//                   backgroundColor="black"
//                   mt={"3em"}
//                   boxShadow="xl"
//                   w={{ base: "13em", md: "13em" }}
//                   whileHover={{
//                     scale: 1.08,
//                     transition: {
//                       duration: 0.6,
//                       ease: "easeInOut",
//                     },
//                   }}
//                 >
//                   <Image
//                     src="ahiaoma_buyer_app_screenshots/view_proucts_details.png"
//                     alt="Browse Products screen"
//                     borderRadius="1.5em"
//                     w="100%"
//                     h={"26em"}
//                   />
//                 </MotionBox>
//               </Box>
//               <Box
//                 ml={{ base: "1em", md: "9em" }}
//                 flex="1"
//                 textAlign={{ base: "center", md: "left" }}
//               >
//                 <Flex align="center" mb="1.5em">
//                   <Circle
//                     size="3em"
//                     bg="green.400"
//                     color="white"
//                     fontWeight="bold"
//                   >
//                     2
//                   </Circle>
//                   <Box
//                     h="4px"
//                     w="4em"
//                     bg="green.400"
//                     rounded={"1em"}
//                     ml="0.5em"
//                   />
//                 </Flex>
//                 <Box>
//                   <Heading fontSize="3xl" mb="0.5em">
//                     View Product Details
//                   </Heading>
//                   <Text fontSize="lg" color="gray.600">
//                     Check detailed product information, prices, and seller
//                     ratings{" "}
//                   </Text>
//                 </Box>
//               </Box>
//             </Flex>
//           </MotionBox>
//           {/* Step 3: Browse Products */}
//           <MotionBox variants={itemVariants}>
//             <Flex
//               direction={{ base: "column", md: "row" }}
//               align="center"
//               justify="space-between"
//               px={{ base: "2em", md: "8em" }}
//               mt="2em"
//               mb="4em"
//               position="relative"
//             >
//               {/* Left Text Section */}
//               <Box
//                 ml={{ base: "1em", md: "0.2em" }}
//                 flex="1"
//                 textAlign={{ base: "center", md: "left" }}
//               >
//                 <Flex align="center" mb="1.5em">
//                   <Circle
//                     size="3em"
//                     bg="green.400"
//                     color="white"
//                     fontWeight="bold"
//                   >
//                     3
//                   </Circle>
//                   <Box h="4px" w="4em" bg="green.400" ml="0.5em" />
//                 </Flex>
//                 <Box>
//                   <Heading fontSize="4xl" mb="0.5em">
//                     Add to Cart
//                   </Heading>
//                   <Text fontSize="lg" color="gray.600">
//                     Select your desired items and add them to your shopping cart{" "}
//                   </Text>
//                 </Box>
//               </Box>

//               {/* Right Image Section with bouncing number 1 */}
//               <Box
//                 flex="1"
//                 textAlign="center"
//                 mt={{ base: "2em", md: "0" }}
//                 position="relative"
//               >
//                 {/* Bouncing Number 1 at the Top of Phone */}
//                 <MotionCircle
//                   size="3.5em"
//                   bg="blue.500"
//                   color="white"
//                   fontWeight="bold"
//                   position="absolute"
//                   top="1.9em"
//                   left={{ base: "79%", md: "62%" }}
//                   transform="translateX(-50%)"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{
//                     duration: 1.8,
//                     ease: "easeInOut",
//                     repeat: Infinity,
//                   }}
//                   zIndex="2"
//                 >
//                   3
//                 </MotionCircle>

//                 {/* Phone container with smooth ease in-out hover effect */}
//                 <MotionBox
//                   display="inline-block"
//                   p="0.7em"
//                   borderRadius="2.3em"
//                   backgroundColor="black"
//                   mt={"3em"}
//                   boxShadow="xl"
//                   w={{ base: "13em", md: "13em" }}
//                   whileHover={{
//                     scale: 1.08,
//                     transition: {
//                       duration: 0.6,
//                       ease: "easeInOut",
//                     },
//                   }}
//                 >
//                   <Image
//                     src="ahiaoma_buyer_app_screenshots/add_to_your_card.png"
//                     alt="Browse Products screen"
//                     borderRadius="1.5em"
//                     w="100%"
//                     h={"26em"}
//                   />
//                 </MotionBox>
//               </Box>
//             </Flex>
//           </MotionBox>
//           {/* Step 4: Browse Products */}
//           <MotionBox variants={itemVariants}>
//             <Flex
//               direction={{ base: "column-reverse", md: "row" }}
//               align="center"
//               justify="space-between"
//               px={{ base: "2em", md: "8em" }}
//               mt="2em"
//               mb="4em"
//               position="relative"
//             >
//               {/* Left Text Section */}

//               {/* Right Image Section with bouncing number 1 */}
//               <Box
//                 flex="1"
//                 textAlign="center"
//                 mt={{ base: "2em", md: "0" }}
//                 position="relative"
//               >
//                 {/* Bouncing Number 1 at the Top of Phone */}
//                 <MotionCircle
//                   size="3.5em"
//                   bg="blue.500"
//                   color="white"
//                   fontWeight="bold"
//                   position="absolute"
//                   top="1.9em"
//                   left={{ base: "79%", md: "64%" }}
//                   transform="translateX(-50%)"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{
//                     duration: 1.8,
//                     ease: "easeInOut",
//                     repeat: Infinity,
//                   }}
//                   zIndex="2"
//                 >
//                   4
//                 </MotionCircle>

//                 {/* Phone container with smooth ease in-out hover effect */}
//                 <MotionBox
//                   display="inline-block"
//                   p="0.7em"
//                   borderRadius="2.3em"
//                   backgroundColor="black"
//                   mt={"3em"}
//                   boxShadow="xl"
//                   w={{ base: "13em", md: "13em" }}
//                   whileHover={{
//                     scale: 1.08,
//                     transition: {
//                       duration: 0.6,
//                       ease: "easeInOut",
//                     },
//                   }}
//                 >
//                   <Image
//                     src="ahiaoma_buyer_app_screenshots/chat_seller_and_negotiate.png"
//                     alt="Browse Products screen"
//                     borderRadius="1.5em"
//                     w="100%"
//                     h={"26em"}
//                   />
//                 </MotionBox>
//               </Box>
//               <Box
//                 ml={{ base: "1em", md: "9em" }}
//                 flex="1"
//                 textAlign={{ base: "center", md: "left" }}
//               >
//                 <Flex align="center" mb="1.5em">
//                   <Circle
//                     size="3em"
//                     bg="green.400"
//                     color="white"
//                     fontWeight="bold"
//                   >
//                     4
//                   </Circle>
//                   <Box
//                     h="4px"
//                     w="4em"
//                     bg="green.400"
//                     rounded={"1em"}
//                     ml="0.5em"
//                   />
//                 </Flex>
//                 <Box>
//                   <Heading fontSize="3xl" mb="0.5em">
//                     Chat with Seller
//                   </Heading>
//                   <Text fontSize="1.1em" color="gray.600">
//                     Negotiate prices and ask questions directly with the seller
//                   </Text>
//                 </Box>
//               </Box>
//             </Flex>
//           </MotionBox>
//           {/* Step 5: Browse Products */}
//           <MotionBox variants={itemVariants}>
//             <Flex
//               direction={{ base: "column", md: "row" }}
//               align="center"
//               justify="space-between"
//               px={{ base: "2em", md: "8em" }}
//               mt="2em"
//               mb="4em"
//               position="relative"
//             >
//               {/* Left Text Section */}
//               <Box
//                 ml={{ base: "1em", md: "0.2em" }}
//                 flex="1"
//                 textAlign={{ base: "center", md: "left" }}
//               >
//                 <Flex align="center" mb="1.5em">
//                   <Circle
//                     size="3em"
//                     bg="green.400"
//                     color="white"
//                     fontWeight="bold"
//                   >
//                     5
//                   </Circle>
//                   <Box h="4px" w="4em" bg="green.400" ml="0.5em" />
//                 </Flex>
//                 <Box>
//                   <Heading fontSize="4xl" mb="0.5em">
//                     Confirm Cart
//                   </Heading>
//                   <Text fontSize="lg" color="gray.600">
//                     Review your art items and proceed to checkout{" "}
//                   </Text>
//                 </Box>
//               </Box>

//               {/* Right Image Section with bouncing number 1 */}
//               <Box
//                 flex="1"
//                 textAlign="center"
//                 mt={{ base: "2em", md: "0" }}
//                 position="relative"
//               >
//                 {/* Bouncing Number 1 at the Top of Phone */}
//                 <MotionCircle
//                   size="3.5em"
//                   bg="blue.500"
//                   color="white"
//                   fontWeight="bold"
//                   position="absolute"
//                   top="1.9em"
//                   left={{ base: "79%", md: "64%" }}
//                   transform="translateX(-50%)"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{
//                     duration: 1.8,
//                     ease: "easeInOut",
//                     repeat: Infinity,
//                   }}
//                   zIndex="2"
//                 >
//                   5
//                 </MotionCircle>

//                 {/* Phone container with smooth ease in-out hover effect */}
//                 <MotionBox
//                   display="inline-block"
//                   p="0.7em"
//                   borderRadius="2.3em"
//                   backgroundColor="black"
//                   mt={"3em"}
//                   boxShadow="xl"
//                   w={{ base: "13em", md: "13em" }}
//                   whileHover={{
//                     scale: 1.08,
//                     transition: {
//                       duration: 0.6,
//                       ease: "easeInOut",
//                     },
//                   }}
//                 >
//                   <Image
//                     src="ahiaoma_buyer_app_screenshots/confirm_cart_items.png"
//                     alt="Browse Products screen"
//                     borderRadius="1.5em"
//                     w="100%"
//                     h={"26em"}
//                   />
//                 </MotionBox>
//               </Box>
//             </Flex>
//           </MotionBox>
//           {/* Step 6: Browse Products */}
//           <MotionBox variants={itemVariants}>
//             <Flex
//               direction={{ base: "column-reverse", md: "row" }}
//               align="center"
//               justify="space-between"
//               px={{ base: "2em", md: "8em" }}
//               mt="2em"
//               mb="4em"
//               position="relative"
//             >
//               {/* Left Text Section */}

//               {/* Right Image Section with bouncing number 1 */}
//               <Box
//                 flex="1"
//                 textAlign="center"
//                 mt={{ base: "2em", md: "0" }}
//                 position="relative"
//               >
//                 {/* Bouncing Number 1 at the Top of Phone */}
//                 <MotionCircle
//                   size="3.5em"
//                   bg="blue.500"
//                   color="white"
//                   fontWeight="bold"
//                   position="absolute"
//                   top="1.9em"
//                   left={{ base: "79%", md: "64%" }}
//                   transform="translateX(-50%)"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{
//                     duration: 1.8,
//                     ease: "easeInOut",
//                     repeat: Infinity,
//                   }}
//                   zIndex="2"
//                 >
//                   6
//                 </MotionCircle>

//                 {/* Phone container with smooth ease in-out hover effect */}
//                 <MotionBox
//                   display="inline-block"
//                   p="0.7em"
//                   borderRadius="2.3em"
//                   backgroundColor="black"
//                   mt={"3em"}
//                   boxShadow="xl"
//                   w={{ base: "13em", md: "13em" }}
//                   whileHover={{
//                     scale: 1.08,
//                     transition: {
//                       duration: 0.6,
//                       ease: "easeInOut",
//                     },
//                   }}
//                 >
//                   <Image
//                     src="ahiaoma_buyer_app_screenshots/make_payment.png"
//                     alt="Browse Products screen"
//                     borderRadius="1.5em"
//                     w="100%"
//                     h={"26em"}
//                   />
//                 </MotionBox>
//               </Box>
//               <Box
//                 ml={{ base: "1em", md: "9em" }}
//                 flex="1"
//                 textAlign={{ base: "center", md: "left" }}
//               >
//                 <Flex align="center" mb="1.5em">
//                   <Circle
//                     size="3em"
//                     bg="green.400"
//                     color="white"
//                     fontWeight="bold"
//                   >
//                     6
//                   </Circle>
//                   <Box
//                     h="4px"
//                     w="4em"
//                     bg="green.400"
//                     rounded={"1em"}
//                     ml="0.5em"
//                   />
//                 </Flex>
//                 <Box>
//                   <Heading fontSize="3xl" mb="0.5em">
//                     Make Payment
//                   </Heading>
//                   <Text fontSize="1.1em" color="gray.600">
//                     Complete your purchase with secure payment options{" "}
//                   </Text>
//                 </Box>
//               </Box>
//             </Flex>
//           </MotionBox>
//           {/* Step 7: Browse Products */}
//           <MotionBox variants={itemVariants}>
//             <Flex
//               direction={{ base: "column", md: "row" }}
//               align="center"
//               justify="space-between"
//               px={{ base: "2em", md: "8em" }}
//               mt="2em"
//               mb="4em"
//               position="relative"
//             >
//               {/* Left Text Section */}
//               <Box
//                 ml={{ base: "1em", md: "0.2em" }}
//                 flex="1"
//                 textAlign={{ base: "center", md: "left" }}
//               >
//                 <Flex align="center" mb="1.5em">
//                   <Circle
//                     size="3em"
//                     bg="green.400"
//                     color="white"
//                     fontWeight="bold"
//                   >
//                     7
//                   </Circle>
//                   <Box h="4px" w="4em" bg="green.400" ml="0.5em" />
//                 </Flex>
//                 <Box>
//                   <Heading fontSize="4xl" mb="0.5em">
//                     Track Orders
//                   </Heading>
//                   <Text fontSize="lg" color="gray.600">
//                     Monitor your order status and delivery progress{" "}
//                   </Text>
//                 </Box>
//               </Box>

//               {/* Right Image Section with bouncing number 1 */}
//               <Box
//                 flex="1"
//                 textAlign="center"
//                 mt={{ base: "2em", md: "0" }}
//                 position="relative"
//               >
//                 {/* Bouncing Number 1 at the Top of Phone */}
//                 <MotionCircle
//                   size="3.5em"
//                   bg="blue.500"
//                   color="white"
//                   fontWeight="bold"
//                   position="absolute"
//                   top="1.9em"
//                   left={{ base: "79%", md: "62%" }}
//                   transform="translateX(-50%)"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{
//                     duration: 1.8,
//                     ease: "easeInOut",
//                     repeat: Infinity,
//                   }}
//                   zIndex="2"
//                 >
//                   7
//                 </MotionCircle>

//                 {/* Phone container with smooth ease in-out hover effect */}
//                 <MotionBox
//                   display="inline-block"
//                   p="0.7em"
//                   borderRadius="2.3em"
//                   backgroundColor="black"
//                   mt={"3em"}
//                   boxShadow="xl"
//                   w={{ base: "13em", md: "13em" }}
//                   whileHover={{
//                     scale: 1.08,
//                     transition: {
//                       duration: 0.6,
//                       ease: "easeInOut",
//                     },
//                   }}
//                 >
//                   <Image
//                     src="ahiaoma_buyer_app_screenshots/view_orders.png"
//                     alt="Browse Products screen"
//                     borderRadius="1.5em"
//                     w="100%"
//                     h={"26em"}
//                   />
//                 </MotionBox>
//               </Box>
//             </Flex>
//           </MotionBox>
//           {/* Step 8: Browse Products */}
//           <MotionBox variants={itemVariants}>
//             <Flex
//               direction={{ base: "column-reverse", md: "row" }}
//               align="center"
//               justify="space-between"
//               px={{ base: "2em", md: "8em" }}
//               mt="2em"
//               mb="4em"
//               position="relative"
//             >
//               {/* Left Text Section */}

//               {/* Right Image Section with bouncing number 1 */}
//               <Box
//                 flex="1"
//                 textAlign="center"
//                 mt={{ base: "2em", md: "0" }}
//                 position="relative"
//               >
//                 {/* Bouncing Number 1 at the Top of Phone */}
//                 <MotionCircle
//                   size="3.5em"
//                   bg="blue.500"
//                   color="white"
//                   fontWeight="bold"
//                   position="absolute"
//                   top="1.9em"
//                   left={{ base: "79%", md: "64%" }}
//                   transform="translateX(-50%)"
//                   animate={{ scale: [1, 1.2, 1] }}
//                   transition={{
//                     duration: 1.8,
//                     ease: "easeInOut",
//                     repeat: Infinity,
//                   }}
//                   zIndex="2"
//                 >
//                   8
//                 </MotionCircle>

//                 {/* Phone container with smooth ease in-out hover effect */}
//                 <MotionBox
//                   display="inline-block"
//                   p="0.7em"
//                   borderRadius="2.3em"
//                   backgroundColor="black"
//                   mt={"3em"}
//                   boxShadow="xl"
//                   w={{ base: "13em", md: "13em" }}
//                   whileHover={{
//                     scale: 1.08,
//                     transition: {
//                       duration: 0.6,
//                       ease: "easeInOut",
//                     },
//                   }}
//                 >
//                   <Image
//                     src="ahiaoma_buyer_app_screenshots/reject_or_confirm_receipt.png"
//                     alt="Browse Products screen"
//                     borderRadius="1.5em"
//                     w="100%"
//                     h={"26em"}
//                   />
//                 </MotionBox>
//               </Box>
//               <Box
//                 ml={{ base: "1em", md: "9em" }}
//                 flex="1"
//                 textAlign={{ base: "center", md: "left" }}
//               >
//                 <Flex align="center" mb="1.5em">
//                   <Circle
//                     size="3em"
//                     bg="green.400"
//                     color="white"
//                     fontWeight="bold"
//                   >
//                     8
//                   </Circle>
//                   <Box
//                     h="4px"
//                     w="4em"
//                     bg="green.400"
//                     rounded={"1em"}
//                     ml="0.5em"
//                   />
//                 </Flex>
//                 <Box>
//                   <Heading fontSize="3xl" mb="0.5em">
//                     Confirm Receipt
//                   </Heading>
//                   <Text fontSize="1.1em" color="gray.600">
//                     Confirm delivery and rate your shopping experience{" "}
//                   </Text>
//                 </Box>
//               </Box>
//             </Flex>
//           </MotionBox>
//           <Box backgroundColor={"green.50"} py={"2em"}>
//             <Box textAlign={"center"}>
//               <Box fontSize={"3xl"} fontWeight={"bold"}>
//                 <Heading>How to Sell on Ahiaoma</Heading>
//               </Box>
//               <Box fontSize={"xl"} color={"gray.600"}>
//                 <Text>
//                   Start your selling journey and reach millions of customers
//                   across Nigeria
//                 </Text>
//               </Box>
//             </Box>
//             {/* Step 1: Browse Products */}
//             <MotionBox variants={itemVariants}>
//               <Flex
//                 direction={{ base: "column", md: "row" }}
//                 align="center"
//                 justify="space-between"
//                 px={{ base: "2em", md: "8em" }}
//                 mt="2em"
//                 mb="4em"
//                 position="relative"
//               >
//                 {/* Left Text Section */}
//                 <Box
//                   ml={{ base: "1em", md: "0.2em" }}
//                   flex="1"
//                   textAlign={{ base: "center", md: "left" }}
//                 >
//                   <Flex align="center" mb="1.5em">
//                     <Circle
//                       size="3em"
//                       bg="green.400"
//                       color="white"
//                       fontWeight="bold"
//                     >
//                       1
//                     </Circle>
//                     <Box
//                       h="4px"
//                       rounded={"2em"}
//                       w="4em"
//                       bg="green.400"
//                       ml="0.5em"
//                     />
//                   </Flex>
//                   <Box>
//                     <Heading fontSize="4xl" mb="0.5em">
//                       Smart Dashboard{" "}
//                     </Heading>
//                     <Text fontSize="lg" color="gray.600">
//                       Access your personalized dashboard with dynamic insights
//                       and AI-powered suggestions to grow your business
//                     </Text>
//                   </Box>
//                 </Box>

//                 {/* Right Image Section with bouncing number 1 */}
//                 <Box
//                   flex="1"
//                   textAlign="center"
//                   mt={{ base: "2em", md: "0" }}
//                   position="relative"
//                 >
//                   {/* Bouncing Number 1 at the Top of Phone */}
//                   <MotionCircle
//                     size="3.5em"
//                     bg="blue.500"
//                     color="white"
//                     fontWeight="bold"
//                     position="absolute"
//                     top="1.9em"
//                     left={{ base: "79%", md: "62%" }}
//                     transform="translateX(-50%)"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{
//                       duration: 1.8,
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     }}
//                     zIndex="2"
//                   >
//                     1
//                   </MotionCircle>

//                   {/* Phone container with smooth ease in-out hover effect */}
//                   <MotionBox
//                     display="inline-block"
//                     p="0.7em"
//                     borderRadius="2.3em"
//                     backgroundColor="black"
//                     mt={"3em"}
//                     boxShadow="xl"
//                     w={{ base: "13em", md: "13em" }}
//                     whileHover={{
//                       scale: 1.08,
//                       transition: {
//                         duration: 0.6,
//                         ease: "easeInOut",
//                       },
//                     }}
//                   >
//                     <Image
//                       src="seller_screenshots/smart_dashboard_with_dynamic_insights_and_suggestions.png"
//                       alt="Browse Products screen"
//                       borderRadius="1.5em"
//                       w="100%"
//                       h={"26em"}
//                     />
//                   </MotionBox>
//                 </Box>
//               </Flex>
//             </MotionBox>
//             {/* Step 2: Browse Products */}
//             <MotionBox variants={itemVariants}>
//               <Flex
//                 direction={{ base: "column-reverse", md: "row" }}
//                 align="center"
//                 justify="space-between"
//                 px={{ base: "2em", md: "8em" }}
//                 mt="2em"
//                 mb="4em"
//                 position="relative"
//               >
//                 {/* Left Text Section */}

//                 {/* Right Image Section with bouncing number 1 */}
//                 <Box
//                   flex="1"
//                   textAlign="center"
//                   mt={{ base: "2em", md: "0" }}
//                   position="relative"
//                 >
//                   {/* Bouncing Number 1 at the Top of Phone */}
//                   <MotionCircle
//                     size="3.5em"
//                     bg="blue.500"
//                     color="white"
//                     fontWeight="bold"
//                     position="absolute"
//                     top="1.9em"
//                     left={{ base: "79%", md: "64%" }}
//                     transform="translateX(-50%)"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{
//                       duration: 1.8,
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     }}
//                     zIndex="2"
//                   >
//                     2
//                   </MotionCircle>

//                   {/* Phone container with smooth ease in-out hover effect */}
//                   <MotionBox
//                     display="inline-block"
//                     p="0.7em"
//                     borderRadius="2.3em"
//                     backgroundColor="black"
//                     mt={"3em"}
//                     boxShadow="xl"
//                     w={{ base: "13em", md: "13em" }}
//                     whileHover={{
//                       scale: 1.08,
//                       transition: {
//                         duration: 0.6,
//                         ease: "easeInOut",
//                       },
//                     }}
//                   >
//                     <Image
//                       src="seller_screenshots/get_access_to_quick_actions_and_recent_activities.png"
//                       alt="Browse Products screen"
//                       borderRadius="1.5em"
//                       w="100%"
//                       h={"26em"}
//                     />
//                   </MotionBox>
//                 </Box>
//                 <Box
//                   ml={{ base: "1em", md: "9em" }}
//                   flex="1"
//                   textAlign={{ base: "center", md: "left" }}
//                 >
//                   <Flex align="center" mb="1.5em">
//                     <Circle
//                       size="3em"
//                       bg="green.400"
//                       color="white"
//                       fontWeight="bold"
//                     >
//                       2
//                     </Circle>
//                     <Box
//                       h="4px"
//                       w="4em"
//                       bg="green.400"
//                       rounded={"2em"}
//                       ml="0.5em"
//                     />
//                   </Flex>
//                   <Box>
//                     <Heading fontSize="3xl" mb="0.5em">
//                       Quick Actions & Activities
//                     </Heading>
//                     <Text fontSize="1.1em" color="gray.600">
//                       Get instant access to quick actions and monitor your
//                       recent business activities in real-time{" "}
//                     </Text>
//                   </Box>
//                 </Box>
//               </Flex>
//             </MotionBox>
//             {/* Step 3: Browse Products */}
//             <MotionBox variants={itemVariants}>
//               <Flex
//                 direction={{ base: "column", md: "row" }}
//                 align="center"
//                 justify="space-between"
//                 px={{ base: "2em", md: "8em" }}
//                 mt="2em"
//                 mb="4em"
//                 position="relative"
//               >
//                 {/* Left Text Section */}
//                 <Box
//                   ml={{ base: "1em", md: "0.2em" }}
//                   flex="1"
//                   textAlign={{ base: "center", md: "left" }}
//                 >
//                   <Flex align="center" mb="1.5em">
//                     <Circle
//                       size="3em"
//                       bg="green.400"
//                       color="white"
//                       fontWeight="bold"
//                     >
//                       3
//                     </Circle>
//                     <Box
//                       h="4px"
//                       w="4em"
//                       rounded={"2em"}
//                       bg="green.400"
//                       ml="0.5em"
//                     />
//                   </Flex>
//                   <Box>
//                     <Heading fontSize="4xl" mb="0.5em">
//                       List Your Products{" "}
//                     </Heading>
//                     <Text fontSize="lg" color="gray.600">
//                       Easily add and manage your product listings with detailed
//                       descriptions, images, and pricing
//                     </Text>
//                   </Box>
//                 </Box>

//                 {/* Right Image Section with bouncing number 1 */}
//                 <Box
//                   flex="1"
//                   textAlign="center"
//                   mt={{ base: "2em", md: "0" }}
//                   position="relative"
//                 >
//                   {/* Bouncing Number 1 at the Top of Phone */}
//                   <MotionCircle
//                     size="3.5em"
//                     bg="blue.500"
//                     color="white"
//                     fontWeight="bold"
//                     position="absolute"
//                     top="1.9em"
//                     left={{ base: "79%", md: "62%" }}
//                     transform="translateX(-50%)"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{
//                       duration: 1.8,
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     }}
//                     zIndex="2"
//                   >
//                     3
//                   </MotionCircle>

//                   {/* Phone container with smooth ease in-out hover effect */}
//                   <MotionBox
//                     display="inline-block"
//                     p="0.7em"
//                     borderRadius="2.3em"
//                     backgroundColor="black"
//                     mt={"3em"}
//                     boxShadow="xl"
//                     w={{ base: "13em", md: "13em" }}
//                     whileHover={{
//                       scale: 1.08,
//                       transition: {
//                         duration: 0.6,
//                         ease: "easeInOut",
//                       },
//                     }}
//                   >
//                     <Image
//                       src="seller_screenshots/list_product.png"
//                       alt="Browse Products screen"
//                       borderRadius="1.5em"
//                       w="100%"
//                       h={"26em"}
//                     />
//                   </MotionBox>
//                 </Box>
//               </Flex>
//             </MotionBox>
//             {/* Step 4: Browse Products */}
//             <MotionBox variants={itemVariants}>
//               <Flex
//                 direction={{ base: "column-reverse", md: "row" }}
//                 align="center"
//                 justify="space-between"
//                 px={{ base: "2em", md: "8em" }}
//                 mt="2em"
//                 mb="4em"
//                 position="relative"
//               >
//                 {/* Left Text Section */}

//                 {/* Right Image Section with bouncing number 1 */}
//                 <Box
//                   flex="1"
//                   textAlign="center"
//                   mt={{ base: "2em", md: "0" }}
//                   position="relative"
//                 >
//                   {/* Bouncing Number 1 at the Top of Phone */}
//                   <MotionCircle
//                     size="3.5em"
//                     bg="blue.500"
//                     color="white"
//                     fontWeight="bold"
//                     position="absolute"
//                     top="1.9em"
//                     left={{ base: "79%", md: "64%" }}
//                     transform="translateX(-50%)"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{
//                       duration: 1.8,
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     }}
//                     zIndex="2"
//                   >
//                     4
//                   </MotionCircle>

//                   {/* Phone container with smooth ease in-out hover effect */}
//                   <MotionBox
//                     display="inline-block"
//                     p="0.7em"
//                     borderRadius="2.3em"
//                     backgroundColor="black"
//                     mt={"3em"}
//                     boxShadow="xl"
//                     w={{ base: "13em", md: "13em" }}
//                     whileHover={{
//                       scale: 1.08,
//                       transition: {
//                         duration: 0.6,
//                         ease: "easeInOut",
//                       },
//                     }}
//                   >
//                     <Image
//                       src="seller_screenshots/view_incoming_orders.png"
//                       alt="Browse Products screen"
//                       borderRadius="1.5em"
//                       w="100%"
//                       h={"26em"}
//                     />
//                   </MotionBox>
//                 </Box>
//                 <Box
//                   ml={{ base: "1em", md: "9em" }}
//                   flex="1"
//                   textAlign={{ base: "center", md: "left" }}
//                 >
//                   <Flex align="center" mb="1.5em">
//                     <Circle
//                       size="3em"
//                       bg="green.400"
//                       color="white"
//                       fontWeight="bold"
//                     >
//                       4
//                     </Circle>
//                     <Box
//                       h="4px"
//                       w="4em"
//                       bg="green.400"
//                       rounded={"2em"}
//                       ml="0.5em"
//                     />
//                   </Flex>
//                   <Box>
//                     <Heading fontSize="3xl" mb="0.5em">
//                       View Incoming Orders
//                     </Heading>
//                     <Text fontSize="1.1em" color="gray.600">
//                       Monitor all incoming orders from customers and manage your
//                       sales pipeline effectively{" "}
//                     </Text>
//                   </Box>
//                 </Box>
//               </Flex>
//             </MotionBox>
//             {/* Step 5: Browse Products */}
//             <MotionBox variants={itemVariants}>
//               <Flex
//                 direction={{ base: "column", md: "row" }}
//                 align="center"
//                 justify="space-between"
//                 px={{ base: "2em", md: "8em" }}
//                 mt="2em"
//                 mb="4em"
//                 position="relative"
//               >
//                 {/* Left Text Section */}
//                 <Box
//                   ml={{ base: "1em", md: "0.2em" }}
//                   flex="1"
//                   textAlign={{ base: "center", md: "left" }}
//                 >
//                   <Flex align="center" mb="1.5em">
//                     <Circle
//                       size="3em"
//                       bg="green.400"
//                       color="white"
//                       fontWeight="bold"
//                     >
//                       5
//                     </Circle>
//                     <Box
//                       h="4px"
//                       w="4em"
//                       rounded={"2em"}
//                       bg="green.400"
//                       ml="0.5em"
//                     />
//                   </Flex>
//                   <Box>
//                     <Heading fontSize="4xl" mb="0.5em">
//                       Order Management{" "}
//                     </Heading>
//                     <Text fontSize="lg" color="gray.600">
//                       Accept or reject orders based on your inventory and
//                       business preferences
//                     </Text>
//                   </Box>
//                 </Box>

//                 {/* Right Image Section with bouncing number 1 */}
//                 <Box
//                   flex="1"
//                   textAlign="center"
//                   mt={{ base: "2em", md: "0" }}
//                   position="relative"
//                 >
//                   {/* Bouncing Number 1 at the Top of Phone */}
//                   <MotionCircle
//                     size="3.5em"
//                     bg="blue.500"
//                     color="white"
//                     fontWeight="bold"
//                     position="absolute"
//                     top="1.9em"
//                     left={{ base: "79%", md: "62%" }}
//                     transform="translateX(-50%)"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{
//                       duration: 1.8,
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     }}
//                     zIndex="2"
//                   >
//                     5
//                   </MotionCircle>

//                   {/* Phone container with smooth ease in-out hover effect */}
//                   <MotionBox
//                     display="inline-block"
//                     p="0.7em"
//                     borderRadius="2.3em"
//                     backgroundColor="black"
//                     mt={"3em"}
//                     boxShadow="xl"
//                     w={{ base: "13em", md: "13em" }}
//                     whileHover={{
//                       scale: 1.08,
//                       transition: {
//                         duration: 0.6,
//                         ease: "easeInOut",
//                       },
//                     }}
//                   >
//                     <Image
//                       src="seller_screenshots/view_reject_or_confirm_order.png"
//                       alt="Browse Products screen"
//                       borderRadius="1.5em"
//                       w="100%"
//                       h={"26em"}
//                     />
//                   </MotionBox>
//                 </Box>
//               </Flex>
//             </MotionBox>
//             {/* Step 6: Browse Products */}
//             <MotionBox variants={itemVariants}>
//               <Flex
//                 direction={{ base: "column-reverse", md: "row" }}
//                 align="center"
//                 justify="space-between"
//                 px={{ base: "2em", md: "8em" }}
//                 mt="2em"
//                 mb="4em"
//                 position="relative"
//               >
//                 {/* Left Text Section */}

//                 {/* Right Image Section with bouncing number 1 */}
//                 <Box
//                   flex="1"
//                   textAlign="center"
//                   mt={{ base: "2em", md: "0" }}
//                   position="relative"
//                 >
//                   {/* Bouncing Number 1 at the Top of Phone */}
//                   <MotionCircle
//                     size="3.5em"
//                     bg="blue.500"
//                     color="white"
//                     fontWeight="bold"
//                     position="absolute"
//                     top="1.9em"
//                     left={{ base: "79%", md: "64%" }}
//                     transform="translateX(-50%)"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{
//                       duration: 1.8,
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     }}
//                     zIndex="2"
//                   >
//                     6
//                   </MotionCircle>

//                   {/* Phone container with smooth ease in-out hover effect */}
//                   <MotionBox
//                     display="inline-block"
//                     p="0.7em"
//                     borderRadius="2.3em"
//                     backgroundColor="black"
//                     mt={"3em"}
//                     boxShadow="xl"
//                     w={{ base: "13em", md: "13em" }}
//                     whileHover={{
//                       scale: 1.08,
//                       transition: {
//                         duration: 0.6,
//                         ease: "easeInOut",
//                       },
//                     }}
//                   >
//                     <Image
//                       src="seller_screenshots/view_detailed_order_information.png"
//                       alt="Browse Products screen"
//                       borderRadius="1.5em"
//                       w="100%"
//                       h={"26em"}
//                     />
//                   </MotionBox>
//                 </Box>
//                 <Box
//                   ml={{ base: "1em", md: "9em" }}
//                   flex="1"
//                   textAlign={{ base: "center", md: "left" }}
//                 >
//                   <Flex align="center" mb="1.5em">
//                     <Circle
//                       size="3em"
//                       bg="green.400"
//                       color="white"
//                       fontWeight="bold"
//                     >
//                       6
//                     </Circle>
//                     <Box
//                       h="4px"
//                       w="4em"
//                       bg="green.400"
//                       rounded={"2em"}
//                       ml="0.5em"
//                     />
//                   </Flex>
//                   <Box>
//                     <Heading fontSize="3xl" mb="0.5em">
//                       Detailed Order Info{" "}
//                     </Heading>
//                     <Text fontSize="1.1em" color="gray.600">
//                       Access comprehensive order details including customer
//                       information and delivery requirements{" "}
//                     </Text>
//                   </Box>
//                 </Box>
//               </Flex>
//             </MotionBox>
//             {/* Step 7: Browse Products */}
//             <MotionBox variants={itemVariants}>
//               <Flex
//                 direction={{ base: "column", md: "row" }}
//                 align="center"
//                 justify="space-between"
//                 px={{ base: "2em", md: "8em" }}
//                 mt="2em"
//                 mb="4em"
//                 position="relative"
//               >
//                 {/* Left Text Section */}
//                 <Box
//                   ml={{ base: "1em", md: "0.2em" }}
//                   flex="1"
//                   textAlign={{ base: "center", md: "left" }}
//                 >
//                   <Flex align="center" mb="1.5em">
//                     <Circle
//                       size="3em"
//                       bg="green.400"
//                       color="white"
//                       fontWeight="bold"
//                     >
//                       7
//                     </Circle>
//                     <Box
//                       h="4px"
//                       w="4em"
//                       rounded={"2em"}
//                       bg="green.400"
//                       ml="0.5em"
//                     />
//                   </Flex>
//                   <Box>
//                     <Heading fontSize="4xl" mb="0.5em">
//                       Customer Insights{" "}
//                     </Heading>
//                     <Text fontSize="lg" color="gray.600">
//                       View buyer details and actions to better understand your
//                       customer base
//                     </Text>
//                   </Box>
//                 </Box>

//                 {/* Right Image Section with bouncing number 1 */}
//                 <Box
//                   flex="1"
//                   textAlign="center"
//                   mt={{ base: "2em", md: "0" }}
//                   position="relative"
//                 >
//                   {/* Bouncing Number 1 at the Top of Phone */}
//                   <MotionCircle
//                     size="3.5em"
//                     bg="blue.500"
//                     color="white"
//                     fontWeight="bold"
//                     position="absolute"
//                     top="1.9em"
//                     left={{ base: "79%", md: "62%" }}
//                     transform="translateX(-50%)"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{
//                       duration: 1.8,
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     }}
//                     zIndex="2"
//                   >
//                     7
//                   </MotionCircle>

//                   {/* Phone container with smooth ease in-out hover effect */}
//                   <MotionBox
//                     display="inline-block"
//                     p="0.7em"
//                     borderRadius="2.3em"
//                     backgroundColor="black"
//                     mt={"3em"}
//                     boxShadow="xl"
//                     w={{ base: "13em", md: "13em" }}
//                     whileHover={{
//                       scale: 1.08,
//                       transition: {
//                         duration: 0.6,
//                         ease: "easeInOut",
//                       },
//                     }}
//                   >
//                     <Image
//                       src="seller_screenshots/view_buyer_detail.png"
//                       alt="Browse Products screen"
//                       borderRadius="1.5em"
//                       w="100%"
//                       h={"26em"}
//                     />
//                   </MotionBox>
//                 </Box>
//               </Flex>
//             </MotionBox>
//             {/* Step 8: Browse Products */}
//             <MotionBox variants={itemVariants}>
//               <Flex
//                 direction={{ base: "column-reverse", md: "row" }}
//                 align="center"
//                 justify="space-between"
//                 px={{ base: "2em", md: "8em" }}
//                 mt="2em"
//                 mb="4em"
//                 position="relative"
//               >
//                 {/* Left Text Section */}

//                 {/* Right Image Section with bouncing number 1 */}
//                 <Box
//                   flex="1"
//                   textAlign="center"
//                   mt={{ base: "2em", md: "0" }}
//                   position="relative"
//                 >
//                   {/* Bouncing Number 1 at the Top of Phone */}
//                   <MotionCircle
//                     size="3.5em"
//                     bg="blue.500"
//                     color="white"
//                     fontWeight="bold"
//                     position="absolute"
//                     top="1.9em"
//                     left={{ base: "79%", md: "64%" }}
//                     transform="translateX(-50%)"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{
//                       duration: 1.8,
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     }}
//                     zIndex="2"
//                   >
//                     8
//                   </MotionCircle>

//                   {/* Phone container with smooth ease in-out hover effect */}
//                   <MotionBox
//                     display="inline-block"
//                     p="0.7em"
//                     borderRadius="2.3em"
//                     backgroundColor="black"
//                     mt={"3em"}
//                     boxShadow="xl"
//                     w={{ base: "13em", md: "13em" }}
//                     whileHover={{
//                       scale: 1.08,
//                       transition: {
//                         duration: 0.6,
//                         ease: "easeInOut",
//                       },
//                     }}
//                   >
//                     <Image
//                       src="seller_screenshots/view_real_time_performance.png"
//                       alt="Browse Products screen"
//                       borderRadius="1.5em"
//                       w="100%"
//                       h={"26em"}
//                     />
//                   </MotionBox>
//                 </Box>
//                 <Box
//                   ml={{ base: "1em", md: "9em" }}
//                   flex="1"
//                   textAlign={{ base: "center", md: "left" }}
//                 >
//                   <Flex align="center" mb="1.5em">
//                     <Circle
//                       size="3em"
//                       bg="green.400"
//                       color="white"
//                       fontWeight="bold"
//                     >
//                       8
//                     </Circle>
//                     <Box
//                       h="4px"
//                       w="4em"
//                       bg="green.400"
//                       rounded={"2em"}
//                       ml="0.5em"
//                     />
//                   </Flex>
//                   <Box>
//                     <Heading fontSize="3xl" mb="0.5em">
//                       Performance Analytics
//                     </Heading>
//                     <Text fontSize="1.1em" color="gray.600">
//                       Track your real-time performance metrics and sales
//                       analytics to optimize your business
//                     </Text>
//                   </Box>
//                 </Box>
//               </Flex>
//             </MotionBox>
//             {/* Step 9: Browse Products */}
//             <MotionBox variants={itemVariants}>
//               <Flex
//                 direction={{ base: "column", md: "row" }}
//                 align="center"
//                 justify="space-between"
//                 px={{ base: "2em", md: "8em" }}
//                 mt="2em"
//                 mb="4em"
//                 position="relative"
//               >
//                 {/* Left Text Section */}
//                 <Box
//                   ml={{ base: "1em", md: "0.2em" }}
//                   flex="1"
//                   textAlign={{ base: "center", md: "left" }}
//                 >
//                   <Flex align="center" mb="1.5em">
//                     <Circle
//                       size="3em"
//                       bg="green.400"
//                       color="white"
//                       fontWeight="bold"
//                     >
//                       9
//                     </Circle>
//                     <Box
//                       h="4px"
//                       rounded={"2em"}
//                       w="4em"
//                       bg="green.400"
//                       ml="0.5em"
//                     />
//                   </Flex>
//                   <Box>
//                     <Heading fontSize="4xl" mb="0.5em">
//                       Order History{" "}
//                     </Heading>
//                     <Text fontSize="lg" color="gray.600">
//                       Review all processed orders and maintain complete records
//                       of your sales history
//                     </Text>
//                   </Box>
//                 </Box>

//                 {/* Right Image Section with bouncing number 1 */}
//                 <Box
//                   flex="1"
//                   textAlign="center"
//                   mt={{ base: "2em", md: "0" }}
//                   position="relative"
//                 >
//                   {/* Bouncing Number 1 at the Top of Phone */}
//                   <MotionCircle
//                     size="3.5em"
//                     bg="blue.500"
//                     color="white"
//                     fontWeight="bold"
//                     position="absolute"
//                     top="1.9em"
//                     left={{ base: "79%", md: "62%" }}
//                     transform="translateX(-50%)"
//                     animate={{ scale: [1, 1.2, 1] }}
//                     transition={{
//                       duration: 1.8,
//                       ease: "easeInOut",
//                       repeat: Infinity,
//                     }}
//                     zIndex="2"
//                   >
//                     9
//                   </MotionCircle>

//                   {/* Phone container with smooth ease in-out hover effect */}
//                   <MotionBox
//                     display="inline-block"
//                     p="0.7em"
//                     borderRadius="2.3em"
//                     backgroundColor="black"
//                     mt={"3em"}
//                     boxShadow="xl"
//                     w={{ base: "13em", md: "13em" }}
//                     whileHover={{
//                       scale: 1.08,
//                       transition: {
//                         duration: 0.6,
//                         ease: "easeInOut",
//                       },
//                     }}
//                   >
//                     <Image
//                       src="seller_screenshots/view_processed_orders.png"
//                       alt="Browse Products screen"
//                       borderRadius="1.5em"
//                       w="100%"
//                       h={"26em"}
//                     />
//                   </MotionBox>
//                 </Box>
//               </Flex>
//             </MotionBox>
//           </Box>
//           {/* Footer */}
//           <Box
//             bg="#000"
//             color="#fff"
//             p={4}
//             fontFamily="Arial, sans-serif"
//             mt={10}
//           >
//             {/* Main Footer Content */}
//             <Flex
//               flexDirection={{ base: "column", md: "row" }}
//               maxW="1200px"
//               mx="auto"
//               justify={{ base: "center", md: "space-between" }}
//               align={{ base: "start", md: "center" }}
//               gap={8}
//             >
//               {/* About Section */}
//               <Box minW="200px" mb={{ base: 4, md: 0 }}>
//                 <Text fontWeight="bold" fontSize="xl" color="#00C853">
//                   Ahiaoma
//                 </Text>
//                 <Text mt={2} fontSize="md" color={"gray.400"}>
//                   Nigeria's premier marketplace connecting millions of buyers
//                   and sellers. Shop with confidence, sell with ease.
//                 </Text>
//               </Box>

//               {/* Quick Links */}
//               <Box minW="200px" mb={{ base: 4, md: 0 }}>
//                 <Text fontWeight="bold" fontSize="lg" mb={4}>
//                   Quick Links
//                 </Text>
//                 <VStack align="start" gap={2}>
//                   <Flex gap="5px" align="center">
//                     <IoEllipseSharp size="8px" color="green" />
//                     <Link href="/about">
//                       <Text cursor="pointer" color="gray.400" fontSize="lg">
//                         About Us
//                       </Text>
//                     </Link>
//                   </Flex>
//                   <Flex gap="5px" align="center">
//                     <IoEllipseSharp size="8px" color="green" />
//                     <Link href="/#powerful-features">
//                       <Text cursor="pointer" color="gray.400" fontSize="lg">
//                         How It Works
//                       </Text>
//                     </Link>
//                   </Flex>
//                   <Flex gap="5px" align="center">
//                     <IoEllipseSharp size="8px" color="green" />
//                     <Text cursor="pointer" color="gray.400" fontSize="lg">
//                       Seller Center
//                     </Text>
//                   </Flex>
//                   <Flex gap="5px" align="center">
//                     <IoEllipseSharp size="8px" color="green" />
//                     <Text cursor="pointer" color="gray.400" fontSize="lg">
//                       Help Center
//                     </Text>
//                   </Flex>
//                 </VStack>
//               </Box>

//               {/* Contact */}
//               <Box minW="200px" mb={{ base: 4, md: 0 }}>
//                 <Text fontWeight="bold" fontSize="lg" mb={4}>
//                   Contact
//                 </Text>
//                 <VStack align="start" gap={2}>
//                   <HStack align="center" gap={2}>
//                     <Box bg="#4CAF50" p={2} borderRadius="md" h="2.2em">
//                       <Icon as={MdOutlineEmail} color="#fff" boxSize={4} />
//                     </Box>
//                     <Text fontSize="lg" color="gray.400">
//                       ahiaoma37@gmail.com
//                     </Text>
//                   </HStack>
//                   <HStack align="center" gap={2}>
//                     <Box bg="#2196F3" p={2} borderRadius="md" h="2.2em">
//                       <Icon as={FaPhone} color="#fff" boxSize={4} />
//                     </Box>
//                     <Text fontSize="lg" color="gray.400">
//                       +234 907 940 5147
//                     </Text>
//                   </HStack>
//                 </VStack>
//               </Box>
//             </Flex>

//             {/* Divider */}
//             <Box border="1px" borderColor="gray.600" my={4} w="100%" />

//             {/* Bottom row for privacy/terms, responsive */}
//             <Flex
//               flexDirection={{ base: "column", md: "row" }}
//               align="center"
//               justify="space-between"
//               maxW="1200px"
//               mx="auto"
//               px={4}
//               gap={{ base: 2, md: 0 }}
//             >
//               <Text fontSize="sm" textAlign="center">
//                 © 2025 Ahiaoma. All rights reserved.
//               </Text>
//               {/* Privacy and other links */}
//               <Flex
//                 gap={4}
//                 justify={{ base: "center", md: "flex-end" }}
//                 w="100%"
//                 mt={{ base: 2, md: 0 }}
//                 flexWrap="wrap"
//               >
//                 <Text cursor="pointer" fontSize="sm">
//                   Privacy Policy
//                 </Text>
//                 <Text cursor="pointer" fontSize="sm">
//                   Terms of Service
//                 </Text>
//                 <Text cursor="pointer" fontSize="sm">
//                   Cookies Policy
//                 </Text>
//               </Flex>
//             </Flex>
//           </Box>
//         </Box>
//       </MotionBox>
//     </>
//   );
// };
