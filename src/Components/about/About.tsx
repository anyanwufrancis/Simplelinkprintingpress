"use client";
import {
  Box,
  Text,
  Flex,
  Heading,
  VStack,
  List,
  ListItem,
  ListIcon,
  Grid,
  Image,
  // Card,
  HStack,
  Icon,
  Button,
  Link,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { IoEllipseSharp, IoRocketSharp } from "react-icons/io5";
import { MdCheckCircle, MdOutlineEmail } from "react-icons/md";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { BsFillStarFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import { useState } from "react";

const About = () => {
  const MotionBox = motion(Box);
  const MotionIcon = motion(IoEllipseSharp);
 const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
   // Variants for container and items for staggered animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
  return (
    <>
      {/* ABOUT HEADER WITH ROCKET AND FLOATING ICONS */}
      {/* Header Section */}
      {/* Header Navigation */}
      <MotionBox
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Box overflowX={"hidden"}>

    
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={4}
        bg="white"
        boxShadow="md"
        borderRadius="md"
      >
        {/* Logo */}
        <Flex align="center" gap={2} w="9em" color="green.600">
          <Image src="ahiaoma_text_logo.png" alt="Logo" />
        </Flex>

        <Flex gap={6} display={{ base: "none", md: "flex" }}>
          {/* Features Link */}
          <Link href="/">
            <Text
              _hover={{ color: "green.500" }}
              fontWeight="semibold"
              color="gray.700"
              cursor="pointer"
            >
              Home
            </Text>
          </Link>

          {/* About Us Link */}
          <Link href="/about">
            <Text
              _hover={{ color: "green.500" }}
              fontWeight="semibold"
              color="gray.700"
              cursor="pointer"
            >
              Features
            </Text>
          </Link>

          {/* Contact Us Link */}
          <Link href="/contact">
            <Text
              _hover={{ color: "green.500" }}
              fontWeight="semibold"
              color="gray.700"
              cursor="pointer"
            >
              Contact
            </Text>
          </Link>
        </Flex>

        {/* Join Waitlist Button */}
        <MotionBox variants={itemVariants}>
        <Button
          bg="green.600"
          rounded="full"
          px={4}
          py={2}
          color="white"
          _hover={{ bg: "green.700" }}
          display={{ base: "none", md: "block" }}
        >
          Join Waitlist
        </Button>
        </MotionBox>
      </Flex>

      {/* Mobile Menu Icon (hidden when open) */}
{!isOpen && (
  <Box
    display={{ base: "flex", md: "none" }}
    position="absolute"
    top={4}
    right={4}
    zIndex={20}
    cursor="pointer"
    w="2em"
    h="3em"
    alignItems="center"
    justifyContent="center"
  >
    <Image
      src="menu.png"
      alt="Menu"
      onClick={toggleDropdown}
      w="100%"
      h="100%"
      objectFit="contain"
    />
  </Box>
)}

{/* Dropdown menu */}
{isOpen && (
  <MotionBox
    position="absolute"
    top={0}
    left={0}
    right={0}
    zIndex={15}
    bg="white"
    initial={{ y: "-100%" }}
    animate={{ y: 0 }}
    exit={{ y: "-100%" }}
    transition={{ type: "spring", stiffness: 100, damping: 20 }}
    boxShadow="lg"
    w="100%"
    px={4}
    py={4}
  >
    {/* Header inside dropdown */}
    <Flex justify="space-between" mb={4} align="center">
      <Box></Box>

      {/* Cancel Icon */}
      <Box cursor="pointer" onClick={toggleDropdown}>
        <FiX size={24} />
      </Box>
    </Flex>

    {/* Links */}
    <VStack spacing={4} align="stretch">

      <Link
        href="/"
        onClick={toggleDropdown}
        _hover={{ bg: "#e0e0e0" }}
        px={4}
        py={2}
        borderRadius="md"
        transition="background-color 0.2s"
      >
        Home
      </Link>
      <Link
        href="/#powerful-features"
        onClick={toggleDropdown}
        _hover={{ bg: "#e0e0e0" }}
        px={4}
        py={2}
        borderRadius="md"
        transition="background-color 0.2s"
      >
        Features
      </Link>

      {/* <Link
        href="/about"
        onClick={toggleDropdown}
        _hover={{ bg: "#e0e0e0" }}
        px={4}
        py={2}
        borderRadius="md"
        transition="background-color 0.2s"
      >
        About Us
      </Link> */}

      <Link
        href="/contact"
        onClick={toggleDropdown}
        _hover={{ bg: "#e0e0e0" }}
        px={4}
        py={2}
        borderRadius="md"
        transition="background-color 0.2s"
      >
        Contact Us
      </Link>
    </VStack>
  </MotionBox>
)}
<MotionBox variants={itemVariants}>
      <Box
        bg="linear-gradient(to right bottom, #e5faeed8, #ffffff)"
        mb="7em"
        py="0.5em"
      >
        {/* Header */}
        <Flex align="center" justify="center" mt="2em">
          <Flex
            align="center"
            justify="center"
            gap="0.5em"
            px="1em"
            py="0.5em"
            bg="lightgreen"
            borderRadius="1em"
            boxShadow="md"
          >
            <Box fontSize="xl" color="red.700">
              <IoRocketSharp />
            </Box>
            <Text color="green" textAlign="center" fontSize="md">
              About Ahiaoma
            </Text>
          </Flex>
        </Flex>

        {/* Floating animated icons + text */}
        <Flex
          align="center"
          justify="center"
          textAlign="center"
          flexDir="column"
          mb="4em"
          position="relative"
        >
          <MotionBox position="absolute" left="10%" top="65%">
            <MotionIcon
              color="rgb(70, 116, 161)"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </MotionBox>
          <MotionBox position="absolute" right="15%" bottom="60%">
            <MotionIcon
              color="aqua"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 2.5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </MotionBox>
          <MotionBox position="absolute" left="5%" top="10%">
            <MotionIcon
              color="lightgreen"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          </MotionBox>

          {/* Main Text */}
          <VStack align="center" gap={4} mt={8}>
            <Heading
              fontSize={{ base: "6xl", md: "7xl" }}
              fontWeight="bolder"
              color="gray.600"
              textAlign="center"
            >
              Your Marketplace for Fair and Fresh Food
            </Heading>
            <Box
              mt="0.5em"
              fontWeight="normal"
              fontSize="xl"
              w={{ base: "90%", md: "37.5em" }}
              textAlign="center"
              color="gray"
            >
              <Text>
                Connecting food producers directly to buyers through a seamless
                digital platform. We're on a mission to fix Nigeria's broken
                agricultural supply chain, ensuring fair pricing, reducing
                waste, and delivering fresh, quality food efficiently.
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Box>
        </MotionBox>

      {/* Challenges and Solution Section */}
      <Flex gap="2em" px="1em" mb="2em" flexWrap="wrap" justify="center">
      <MotionBox variants={itemVariants}>
        {/* The Challenges */}
        <Box px="1em" mt="4em" maxW="600px" w="100%">
          <Heading mb="0.5em">The Challenge</Heading>
          <List gap={3} fontSize="large" color="gray">
            <ListItem mb="0.3em">
              <Flex gap={"0.3em"} align={"center"}>
              <Box px={"-0.5em"} h={"1.3em"} backgroundColor={"red.200"} w={"1em"} rounded={"3xl"}>
              <ListIcon as={RiCheckboxBlankCircleFill} boxSize={3} mb={"0.4em"} ml={"0.2em"} color="red.500" />
              </Box>
              Up to 45% of produce is lost annually, amounting to over ₦3
              trillion
              </Flex>
            </ListItem>
            <ListItem mb="0.3em">
              <Flex gap={"0.3em"}>
              <Box  px={"-0.5em"} h={"1.3em"} backgroundColor={"red.200"} w={"1em"} rounded={"3xl"}>
              <ListIcon as={RiCheckboxBlankCircleFill} boxSize={3} mb={"0.4em"} ml={"0.2em"} color="red.500" />
              </Box>
              Inefficient logistics channels and lack of modern storage
              facilities
              </Flex>
            </ListItem>
            <ListItem mb="0.3em">
              <Flex gap={"0.3em"}>
              <Box  px={"-0.5em"} h={"1.3em"} backgroundColor={"red.200"} w={"1em"} rounded={"3xl"}>
              <ListIcon as={RiCheckboxBlankCircleFill} boxSize={3} mb={"0.4em"} ml={"0.2em"} color="red.500" />
              </Box>
              Limited market access and exploitative middlemen drive up costs
              </Flex>
            </ListItem>
            <ListItem>
              <Flex gap={"0.3em"}>
              <Box  px={"-0.5em"} h={"1.3em"} backgroundColor={"red.200"} w={"1em"} rounded={"3xl"}>
              <ListIcon as={RiCheckboxBlankCircleFill} boxSize={3} mb={"0.4em"} ml={"0.2em"} color="red.500" />
              </Box>
              Limited market access and exploitative middlemen drive up costs
              </Flex>
            </ListItem>
          </List>
        </Box>
</MotionBox>
<MotionBox  variants={itemVariants}>
        {/* Our Solution */}
        <Box px="1em" mb="2em" maxW="600px" w="100%">
          <Heading mb="1em">Our Solution</Heading>
          <Text mb="1em">Ahiaoma bridges these gaps by providing:</Text>
          <List spacing={3} fontSize="large" color="gray">
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.800" />
              <Text as="span" ml="0.5em">
                Direct Connection: Linking food producers directly to buyers
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.800" />
              <Text as="span" ml="0.5em">
                Integrated Logistics: Streamlined delivery channels for
                efficiency
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.800" />
              <Text as="span" ml="0.5em">
                Fair Pricing Tool: Ensuring equitable prices for all
                stakeholders
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.800" />
              <Text as="span" ml="0.5em">
                Preservation Infrastructure: Solar-powered cold rooms and
                preservation hubs
              </Text>
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.800" />
              <Text as="span" ml="0.5em">
                Finance Access: Microloans and financial services for producers
              </Text>
            </ListItem>
          </List>
        </Box>
        </MotionBox> 
      </Flex>

      {/* Market Opportunity */}

      <Box backgroundColor={"green.50"} py={"2em"} px="1em" mb="2em">
        <MotionBox variants={itemVariants}>
        <Heading
          mb="0.5em"
          fontSize={{base:"5xl", md:"4xl"}}
          textAlign={"center"}
          fontWeight="bold"
        >
          Market Opportunity
        </Heading>
        <Text w={{base:"13em", md:"25em"}} ml={{base:"1.5em", md:"22em"}} fontSize={{base:"2xl", md:"xl"}} color="gray" textAlign={"center"}>
          Massive potential in Nigeria's agricultural market
        </Text>
        </MotionBox>
        <MotionBox variants={itemVariants}>
        <Grid
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap={4}
          mt={6}
        >
          {[
            {
              value: "₦3T",
              label: "TAM (Total Addressable Market)",
              desc: "Agricultural produce trade in Nigeria",
            },
            {
              value: "₦300B",
              label: "SAM (Serviceable Available Market)",
              desc: "Urban and semi-urban markets of Southeast Nigeria",
            },
            {
              value: "₦3B",
              label: "Target SOM",
              desc: "Transactions within 3 years (1% of SAM)",
            },
          ].map((item, idx) => (
            <Box
              key={idx}
              bg="white"
              py={8}
              w={"24em"}
              rounded={"2em"}
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                bg: "blue.50",
                transform: "translateY(-5px)",
                boxShadow: "lg",
              }}
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                w="3em"
                h="3em"
                color="white"
                borderRadius="full"
                bg="#3b5998"
                mx="auto"
              >
                <BsFillStarFill />
              </Box>
              <Text fontSize="4xl" fontWeight="bolder" mt={4}>
                {item.value}
              </Text>
              <Text color={"green"} fontSize={"lg"} fontWeight={"bolder"}>
                {item.label}
              </Text>
              <Text fontSize="lg" mt={2} color="gray.600">
                {item.desc}
              </Text>
            </Box>
          ))}
        </Grid>
        </MotionBox>
      </Box>
      <Box py={"2em"} px="1em" mb="2em">
        <MotionBox variants={itemVariants}>
        <Heading
          mb="0.5em"
          fontSize="2xl"
          textAlign={"center"}
          fontWeight="bold"
        >
          Traction & Growth
        </Heading>
        <Text fontSize="lg" color="gray" textAlign={"center"}>
          Building momentum across Nigeria's agricultural ecosystem{" "}
        </Text>
        </MotionBox>
        <MotionBox variants={itemVariants}>
          <SimpleGrid  
          columns={{ base: 2, md: 4 }}
        gap={{ base: "1em", md: "3em" }}
        w="90%"
        mx="auto"
        >
        {/* <Grid
          templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
          gap={4}
          mt={6}
          ml={{base:"2.4em", md:"1em"}}
        > */}
          {[
            {
              value: "65+",
              content: "Sellers Onboarded",
              // desc: "Agricultural produce trade in Nigeria",
            },
            {
              value: "150+",
              content: "Buyers Registered",
              // desc: "Urban and semi-urban markets of Southeast Nigeria",
            },
            {
              value: "1,000+",
              content: "Waitlist Users",
              // desc: "Transactions within 3 years (1% of SAM)",
            },
            {
              value: "3",
              content: "Logistic Partners",
              // desc: "Transactions within 3 years (1% of SAM)",
            },
          ].map((item, idx) => (
            <Box
              key={idx}
              bg="green.50"
              mt={"2em"}
              px={4}
              py={8}
                      // mx="auto"
              // ml={"1em"}
              w={{base:"10.5em", md:"19em"}}
              h={"8em"}
              border={"1px solid lightgreen"}
              rounded={"1em"}
              textAlign="center"
              transition="all 0.3s ease"
              _hover={{
                bg: "blue.50",
                transform: "translateY(-5px)",
                boxShadow: "lg",
              }}
            >
              <Text
                fontSize="4xl"
                color={"green"}
                fontWeight="bolder"
                mt={"-0.5em"}
              >
                {item.value}
              </Text>
              <Text color={"gray.500"} fontSize={"lg"} fontWeight={"bold"}>
                {item.content}
              </Text>
            </Box>
          ))}
          </SimpleGrid>
        {/* </Grid> */}
        </MotionBox>
      </Box>
      <MotionBox variants={itemVariants}>
      <Box textAlign={"center"}>
        <Heading>Meet Our Team</Heading>
        <Text color={"gray.500"} fontSize={{base:"xl", md:""}} w={{base:"19em", md:"auto"}} fontWeight={"semibold"} ml={{base:"1em",md:"auto"}}>The Visionaries building the future of Nigerian commerce</Text>
      </Box>
</MotionBox>
<MotionBox variants={itemVariants}>
      <Grid templateColumns="repeat(auto-fit, minmax(18em, 1fr))" gap="20px">
        {/* Card 1 with left margin to shift from the edge */}
        <Box
          // Removed hover scale effect
          _hover={{ boxShadow: "5xl" }}
          transition="all 0.3s ease"
          textAlign="center"
          ml={{base:"0.3em", md:"7em"}} // Add this line to shift from the left edge
        >
          <Box
            width="25em"
            height="15em"
            p="1em"
            bg="whitesmoke"
            shadow="md"
            alignContent={"center"}
            rounded="md"
          >
            <Box
              width="5em"
              border={"4px solid white"}
              height="5em"
              overflow="hidden"
              borderRadius="50%"
              mx="auto"
            >
              <Image
                src="FlorenceSydney.jpeg"
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <Heading fontSize="xl" mt="1em" mb="0.5em" textAlign="center">
              Florence Sydney
            </Heading>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize={"lg"}
              textAlign="center"
            >
              CEO / Founder
            </Text>
            <Text fontSize="md" color="gray.500" textAlign="center">
              6+ years in Marketing
            </Text>
          </Box>
        </Box>

        {/* Card 2 */}
        <Box
          // Removed hover scale effect
          _hover={{ boxShadow: "xl" }}
          transition="all 0.3s ease"
          textAlign="center"
           ml={{base:"0.3em", md:"4em"}} 
        >
          <Box
            width="25em"
            height="15em"
            p="1em"
            bg="whitesmoke"
            shadow="lg"
            rounded="md"
          >
            <Box
              width="5em"
              border={"4px solid white"}
              height="5em"
              overflow="hidden"
              borderRadius="50%"
              mx="auto"
            >
              <Image
                src="headshot_ephraim.jpeg"
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
            <Heading fontSize="xl" mt="1em" mb="0.5em" textAlign="center">
              Ephraim Umunnakwe
            </Heading>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize={"lg"}
              textAlign="center"
            >
              CTO / Co-Founder
            </Text>
            <Text fontSize="md" color="gray.500" textAlign="center">
              8+ years in Software Engineering
            </Text>
          </Box>
        </Box>

        {/* Card 3 */}
        <Box
          // Removed hover scale effect
          _hover={{ boxShadow: "xl" }}
          transition="all 0.3s ease"
          textAlign="center"
          ml={{base:"0.3em", md:"1em"}} 
        >
          <Box
            width="25em"
            height="15em"
            p="1em"
            bg="whitesmoke"
            shadow="md"
            rounded="md"
          >
            <Box
              width="5em"
              border={"4px solid white"}
              height="5em"
              overflow="hidden"
              borderRadius="50%"
              mx="auto"
            >
              <Image src="RuthSolomon.jpeg" boxSize="100%" objectFit="cover" />
            </Box>
            <Heading fontSize="xl" mt="1em" mb="0.5em" textAlign="center">
              Ruth Solomon
            </Heading>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize={"lg"}
              textAlign="center"
            >
              Head of Logistics & Partnerships
            </Text>
            <Text fontSize="md" color="gray.500" textAlign="center">
              7 years of experience in marketing and sales of FMCG
            </Text>
          </Box>
        </Box>

        {/* Last Card spanning full width and centered content */}
        <Box
          gridColumn="1 / 1"
          // Removed hover scale effect
          _hover={{ boxShadow: "xl" }}
          transition="all 1s ease"
          textAlign="center"
          mt="-0.9em"
           ml={{base:"0.3em", md:"6.9em"}} 
          mb={"2em"}
        >
          <Box
            width="25em"
            height="15em"
            p="1em"
            bg="whitesmoke"
            shadow="lg"
            rounded="md"
            mx="auto"
          >
            <Box
              width="5em"
              border={"4px solid white"}
              height="5em"
              overflow="hidden"
              borderRadius="50%"
              mx="auto"
            >
              <Image src="WilcoxEjima.jpeg" boxSize="100%" objectFit="cover" />
            </Box>
            <Heading fontSize="xl" mt="1em" mb="0.5em">
              Wilcox Egima
            </Heading>
            <Text
              color="green.500"
              fontWeight="bold"
              fontSize={"lg"}
              mb="0.5em"
            >
              Chief Agricultural Officer
            </Text>
            <Text fontSize="md" color="gray.500">
              5+ years of Experience
            </Text>
          </Box>
        </Box>
      </Grid>
      </MotionBox>
      <Box
        bg="#02A150"
        color="white"
        py={{ base: 10, md: 20 }}
        px={{ base: 5, md: 20 }}
      >
        <MotionBox variants={itemVariants}>
        {/* OUR VISION */}
        <Box maxW="800px">
          <Heading fontSize={{ base: "2xl", md: "3xl" }} mb={4}>
            Our Vision
          </Heading>

          <Text fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
            To become Nigeria's leading digital food marketplace; Connecting
            sellers and buyers, ensuring fair pricing, reducing waste, and
            delivering fresh, quality food efficiently.
          </Text>
        </Box>
</MotionBox>
        {/* COMPETITIVE ADVANTAGE BOX */}
        <MotionBox variants={itemVariants}>
        <Box
          bg="rgba(255,255,255,0.15)"
          backdropFilter="blur(6px)"
          borderRadius="lg"
          p={{ base: 5, md: 10 }}
          mt={10}
          maxW="900px"
        >
          <Heading fontSize="xl" mb={3}>
            Competitive Advantage
          </Heading>

          <Text mb={5}>Ahiaoma takes an integrated approach, combining:</Text>
          <List>
            {/* FLEX LIST (Now working correctly) */}
            <Flex
              direction={{ base: "column", md: "row" }}
              gap={{ base: 4, md: 10 }}
              align="flex-start"
            >
              {/* Item 1 */}
              <MotionBox variants={itemVariants}>
              <Flex align="center">
                <ListIcon as={IoEllipseSharp} color="white" boxSize={3} />
                <Text ml={2}>A digital Marketplace</Text>
              </Flex>
</MotionBox>
              {/* Item 2 */}
              <MotionBox variants={itemVariants}>
              <Flex align="center">
                <ListIcon as={IoEllipseSharp} color="white" boxSize={3} />
                <Text ml={2}>Logistics solutions</Text>
              </Flex>
              </MotionBox>

              {/* Item 3 */}
              <MotionBox variants={itemVariants}>
              <Flex align="center">
                <ListIcon as={IoEllipseSharp} color="white" boxSize={3} />
                <Text ml={2}>Preservation infrastructure</Text>
              </Flex>
            </MotionBox>
            </Flex>
          </List>

          <Text mt={6} fontSize="sm" opacity={0.9}>
            This holistic model enables us to solve supply chain challenges
            end-to-end.
          </Text>
        </Box>
      </MotionBox>
      </Box>
     {/* Footer */}
     <MotionBox variants={itemVariants}>
<Box bg="#000" color="#fff" p={8} fontFamily="Arial, sans-serif" mt={"-2em"}>
  {/* Main Footer Content */}
  <Flex
    flexDirection={{ base: "column", md: "row" }}
    // maxW="1200px"
    mx="auto"
    justify={{ base: "center", md: "space-between" }}
    align={{ base: "start", md: "center" }}
    gap={8}
  >
    {/* About Section */}
    <Box minW="200px" mb={{ base: 4, md: 0 }}>
      <Text fontWeight="bold" fontSize="xl" color="#00C853">
        Ahiaoma
      </Text>
      <Text mt={2} fontSize="md" color={"gray.400"}>
        Nigeria's premier marketplace connecting millions of buyers and
        sellers. Shop with confidence, sell with ease.
      </Text>
    </Box>

    {/* Quick Links */}
    <Box minW="200px" mb={{ base: 4, md: 0 }}>
      <Text fontWeight="bold" fontSize="lg" mb={4}>
        Quick Links
      </Text>
      <VStack align="start" gap={2}>
        <Flex gap="5px" align="center">
          <IoEllipseSharp size="8px" color="green" />
          <Link href="/about">
            <Text cursor="pointer" color="gray.400" fontSize="lg">
              About Us
            </Text>
          </Link>
        </Flex>
        <Flex gap="5px" align="center">
          <IoEllipseSharp size="8px" color="green" />
          <Link href="/#powerful-features">
            <Text cursor="pointer" color="gray.400" fontSize="lg">
              How It Works
            </Text>
          </Link>
        </Flex>
        <Flex gap="5px" align="center">
          <IoEllipseSharp size="8px" color="green" />
          <Text cursor="pointer" color="gray.400" fontSize="lg">
            Seller Center
          </Text>
        </Flex>
        <Flex gap="5px" align="center">
          <IoEllipseSharp size="8px" color="green" />
          <Text cursor="pointer" color="gray.400" fontSize="lg">
            Help Center
          </Text>
        </Flex>
      </VStack>
    </Box>

    {/* Contact */}
    <Box minW="200px" mb={{ base: 4, md: 0 }}>
      <Text fontWeight="bold" fontSize="lg" mb={4}>
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
            +234 907 940 5147
          </Text>
        </HStack>
      </VStack>
    </Box>
  </Flex>

   {/* Divider */}
  <Box border="1px"  borderColor="gray.600" my={4} w="100%" />

  {/* Bottom row for privacy/terms, responsive */}
  <Flex
    flexDirection={{ base: "column", md: "row" }}
    align="center"
    justify="space-between"
    // maxW="1200px"
    mx="auto"
    px={4}
    gap={{ base: 2, md: 0 }}
  >
    <Text fontSize="sm" ml={{base:"-1em",md:"-3em"}} w={{base:"24em", md:"29em"}} textAlign="center">
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
</Box>
</MotionBox>
        </Box>
        </MotionBox>
    </>
  );
};

export default About;
