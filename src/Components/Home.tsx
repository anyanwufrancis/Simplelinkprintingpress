"use client";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Image,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import {
  IoChevronBack,
  IoChevronForward,
  IoSettingsOutline,
} from "react-icons/io5";
import { FiPrinter, FiMaximize2 } from "react-icons/fi";
import { FaLaptopCode, FaCube } from "react-icons/fa";
import Header from "./shared/header";
import { FaStar } from "react-icons/fa6";
import Footer from "./shared/footer";

const MotionBox = motion(Box);

// Slider data
const slides = [
  {
    image: "/bilborad 2.jpg",
    title: "Professional Printing Solutions",
    text: "High-quality printing services tailored to your business needs.",
  },
  {
    image: "/printing ma 2.jpg",
    title: "Quality Services For Less Printing",
    text: "We offer the best digital services at unbeatable prices. Quality You Can Trust",
  },
  {
    image: "/clothes.png",
    title: "Dedicated To Excellence",
    text: "We offer The Best Printing Services At Unbeatable Prices. Quality You can Trust",
  },
];

// Categories
type CategoryKey = "all" | "gift" | "tshirt" | "card" | "mug";
type CategoryItem = {
  id: number;
  category: string;
  image: string;
  name?: string;
  span?: number;
};

const categoryItems: Record<CategoryKey, CategoryItem[]> = {
  all: [
    {
      id: 1,
      category: "Gift Packaging",
      image: "/gift.png",
      name: "Gift Box",
      span: 1,
    },
    {
      id: 2,
      category: "T Shirt Printing",
      image: "/clothes.png",
      name: "T-Shirt Design",
      span: 2,
    },
    {
      id: 3,
      category: "Card Design",
      image: "/thank-you-card-design.jpg",
      name: "Greeting Card",
      span: 1,
    },
    {
      id: 4,
      category: "Mug Printing",
      image: "/cup 4.png",
      name: "Coffee Mug",
      span: 1,
    },
    {
      id: 5,
      category: "T Shirt Printing",
      image: "/tshrit.jpg",
      name: "T-Shirt Custom",
      span: 1,
    },
    {
      id: 6,
      category: "Card Design",
      image: "/buisness card.png",
      name: "Business Card",
      span: 2,
    },
    {
      id: 7,
      category: "Mug Printing",
      image: "/cup.jpg",
      name: "Tea Mug",
      span: 1,
    },
  ],
  gift: [
    { id: 1, category: "Gift Packaging", image: "/gift.png", name: "Gift Box" },
  ],
  tshirt: [
    {
      id: 2,
      category: "T Shirt Printing",
      image: "/clothes.png",
      name: "T-Shirt Design",
    },
    {
      id: 5,
      category: "T Shirt Printing",
      image: "/tshrit.jpg",
      name: "T-Shirt Custom",
    },
  ],
  card: [
    {
      id: 3,
      category: "Card Design",
      image: "/thank-you-card-design.jpg",
      name: "Thank You Card",
    },
    {
      id: 6,
      category: "Card Design",
      image: "/buisness card.png",
      name: "Business Card",
    },
  ],
  mug: [
    {
      id: 4,
      category: "Mug Printing",
      image: "/cup 4.png",
      name: "Coffee Mug",
    },
    { id: 7, category: "Mug Printing", image: "/cup.jpg", name: "Tea Mug" },
  ],
};

const categories: { key: CategoryKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "gift", label: "Gift Packaging" },
  { key: "tshirt", label: "T Shirt Printing" },
  { key: "card", label: "Card Design" },
  { key: "mug", label: "Mug Printing" },
];

// Features
const features = [
  {
    icon: FaLaptopCode,
    title: "Digital Printing",
    description:
      "Quick, cost-effective for small quantities, highly customizable, minimal waste.",
  },
  {
    icon: FaCube,
    title: "3D Printing",
    description:
      "Builds objects layer by layer, allows complex designs, suitable for prototypes and low-volume production.",
  },
  {
    icon: IoSettingsOutline,
    title: "Offset Printing",
    description:
      "High-quality and consistent, ideal for large volumes, precise color matching and fast production.",
  },
];

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [category, setCategory] = useState<CategoryKey>("all");
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const displayedItems = categoryItems[category] ?? [];

  return (
    <>
      <Header />
      {/* Slider */}
      <Box position="relative" minH="70vh" overflow="hidden" pt="80px">
        <AnimatePresence mode="wait">
          <MotionBox
            key={slideIndex}
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            bgImage={`url('${slides[slideIndex].image}')`}
            bgSize="cover"
            bgPosition="center"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <Box position="absolute" inset={0} bg="blackAlpha.600" />
            <Flex
              position="relative"
              zIndex={2}
              direction="column"
              justify="center"
              align="flex-start"
              h="100%"
              mt={"2em"}
              ml={"2em"}
              px={{ base: 6, md: 12 }}
              color="white"
              maxW="1200px"
            >
              <Flex
                mt={"2em"}
                rounded={"1em"}
                py={"1em"}
                px={"1em"}
                backgroundColor={"pink.400"}
                align={"center"}
                gap={"0.5em"}
              >
                <FiPrinter />
                <Text>Welcome To Simple Link Printing Press</Text>
                <FiPrinter />
              </Flex>

              <Heading mt={"0.2em"} fontSize={{ base: "3xl", md: "6xl" }}>
                {slides[slideIndex].title}
              </Heading>

              <Text mb={"0.2em"} mt={4} maxW="600px" fontSize={{ base: "md", md: "3xl" }}>
                {slides[slideIndex].text}
              </Text>

              <Button mt={6} colorScheme="pink" size="lg">
                Contact Us
              </Button>
            </Flex>
          </MotionBox>
        </AnimatePresence>

        {/* Slider Arrows */}
        <Box
          position="absolute"
          top="50%"
          left="20px"
          transform="translateY(-50%)"
          bg="whiteAlpha.700"
          p={3}
          rounded={"0.5em"}
          cursor="pointer"
          zIndex={10}
          _hover={{ bg: "pink.400", color: "white" }}
          onClick={prevSlide}
        >
          <Icon as={IoChevronBack} boxSize={6} />
        </Box>
        <Box
          position="absolute"
          top="50%"
          right="20px"
          transform="translateY(-50%)"
          bg="whiteAlpha.700"
          p={3}
          rounded={"0.5em"}
          cursor="pointer"
          zIndex={10}
          _hover={{ bg: "pink.400", color: "white" }}
          onClick={nextSlide}
        >
          <Icon as={IoChevronForward} boxSize={6} />
        </Box>

        {/* Slider Dots */}
        <Flex
          position="absolute"
          bottom="20px"
          w="100%"
          justify="center"
          gap={2}
        >
          {slides.map((_, idx) => (
            <Box
              key={idx}
              w={idx === slideIndex ? 9 : 3}
              h={idx === slideIndex ? 3 : 2}
              bg={idx === slideIndex ? "pink.400" : "whiteAlpha.700"}
              // rounded="full"
              cursor="pointer"
              onClick={() => setSlideIndex(idx)}
            />
          ))}
        </Flex>
      </Box>
      {/* Features Section */}
      <Box py={{ base: 10, md: 16 }} px={{ base: 4, md: 12 }} bg="gray.50">
        <Heading
          textAlign="center"
          mb={10}
          fontSize={{ base: "2xl", md: "4xl" }}
        >
          Our Features
        </Heading>

        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          gap={6}
        >
          {features.map((feature, idx) => (
            <MotionBox
              key={idx}
              bg="white"
              p={6}
              rounded="xl"
              shadow="md"
              textAlign="center"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Flex
                w="70px"
                h="70px"
                mx="auto"
                mb={4}
                align="center"
                justify="center"
                bg="pink.100"
                rounded="full"
              >
                <Icon as={feature.icon} boxSize={8} color="pink.500" />
              </Flex>
              <Heading fontSize="xl" mb={3}>
                {feature.title}
              </Heading>
              <Text fontSize="md" color="gray.600">
                {feature.description}
              </Text>
            </MotionBox>
          ))}
        </Grid>
      </Box>
      {/* Projects Section */}
      <Heading
        mt="2em"
        mb="1em"
        fontSize={{ base: "2xl", md: "4xl" }}
        textAlign="center"
      >
        Our Projects
      </Heading>
      <Flex justify="center" gap={4} mb={6} flexWrap="wrap">
        {categories.map((cat) => (
          <Button
            key={cat.key}
            onClick={() => setCategory(cat.key)}
            colorScheme={category === cat.key ? "pink" : "gray"}
          >
            {cat.label}
          </Button>
        ))}
      </Flex>
      {/* ✅ FIXED GRID */}
      <Grid
        templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
        gap={6}
        px={{ base: 4, md: 12 }}
      >
        {displayedItems.map((item) => (
          <GridItem
            key={item.id}
            colSpan={{ base: 1, md: item.span ?? 1 }} // ✅ MOBILE FIX
          >
            <Box
              position="relative"
              overflow="hidden"
              rounded="xl"
              cursor="pointer"
            >
              <Image
                src={item.image}
                alt={item.name}
                w="100%"
                h="400px"
                objectFit="cover"
                transition="all 0.4s ease"
                _hover={{ transform: "scale(1.05)" }}
              />

              <MotionBox
                position="absolute"
                inset={0}
                bg="blackAlpha.600"
                opacity={0}
                _hover={{ opacity: 1 }}
                transition="opacity 0.3s ease"
                display="flex"
                flexDirection="column"
                justify="space-between"
              >
                <Flex justify="flex-end" p={3}>
                  <Icon
                    as={FiMaximize2}
                    boxSize={10}
                    color="white"
                    rounded={"0.5em"}
                    py={"0.5em"}
                    px={"0.5em"}
                    bg={"pink.400"}
                    onClick={() => setOpenCardId(item.id)}
                  />
                </Flex>

                <Box mt={"16em"} p={4}>
                  <Text fontWeight="bold" color="white" fontSize="lg">
                    {item.category}
                  </Text>
                  <Text fontWeight={"bold"} color="white" fontSize="2xl">
                    {item.name}
                  </Text>
                </Box>
              </MotionBox>

              <Modal
                isOpen={openCardId === item.id}
                onClose={() => setOpenCardId(null)}
                size="full"
              >
                <ModalOverlay />
                <ModalContent bg="blackAlpha.900">
                  <ModalCloseButton color="white" size="lg" />
                  <ModalBody
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    py={20}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      maxH="90vh"
                      objectFit="contain"
                    />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          </GridItem>
        ))}
      </Grid>
     <Box
     mt={"1em"}
  w="100%"
  h={{ base: "300px", md: "500px" }}
  position="relative"
  bgImage="url('/bgimage.jpg')"
  bgSize="cover"
  bgPosition="center"
  bgRepeat="no-repeat"
  display="flex"
  alignItems="center"
  justifyContent="center"
  overflow="hidden"

>
  {/* Blur overlay */}
  <Box
    position="absolute"
    inset={0}
    bg="blackAlpha.400"
    style={{ backdropFilter: "blur(5px)" }}
  />
<Button colorScheme="pink" mt={"14em"} ml={"2em"} size="lg">
                Contact Us
              </Button>
  <Heading
    color="white"
    // textAlign="center"
    px={{ base: 4, md: 8 }}
    fontSize={{ base: "2xl", md: "7xl" }}
    zIndex={1}
    py={4}
    ml={"-2em"}
    rounded="md"
    // bg="blackAlpha.600"
  >
    Bring Your Ideas to Life with Professional Print Solutions
  </Heading>
  
</Box>

     <Box textAlign={"center"} mt="4em" px={{ base: 4, md: 12 }}>
  <Heading mb="1em" fontSize={{ base: "2xl", md: "5xl" }} color="purple.900">
    Our Products
  </Heading>

  <Grid
    templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
    gap={{ base: 4, md: 6 }}
  >
    {[
      { img: "cup.jpg", title: "Printed Mug" },
      { img: "greeting card.png", title: "Greeting Cards" },
      { img: "cap.png", title: "Branded Cap" },
      { img: "palmphets 1.jpg", title: "Palmphet" },
      { img: "keychain.png", title: "Custom Key Chain" },
      { img: "jotter 2.jpg", title: "Custom Jotter" },
      { img: "modern-office-id-card-template-1-scaled.jpg", title: "Customise Id Card" },
      { img: "banner.webp", title: "Customise Banner" },
      { img: "Umbrella.jpg", title: "Customise Unbrella" },
      { img: "appron.jpg", title: "Custom Appron" },
      { img: "flyer.jpg", title: "Custom Flyer" },
      { img: "Complementary-Card1.jpg", title: "Customise Cmplementary Card" },
    ].map((item, idx) => (
      <Box key={idx} textAlign="center">
        <Box
          w="100%"
          h={{ base: "150px", md: "200px" }}
          mb={2}
          overflow="hidden"
          rounded="md"
        >
          <Image
            src={item.img}
            alt={item.title}
            w="100%"
            h="100%"
            objectFit="cover"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
          />
        </Box>

        <Heading fontSize="lg" fontWeight="bold" color="purple.900" mb={1}>
          {item.title}
        </Heading>

        <Flex justify="center" color="pink.400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </Flex>
      </Box>
    ))}
  </Grid>
</Box>
 {/* <Box bg="#1A1A1A" color="white" maxW="1100px" mx="auto" my={10} borderRadius="lg" overflow="hidden"> */}
      {/* <SimpleGrid columns={{ base: 1, md: 2 }}> */}
        
        {/* Left Side: Form Section */}
        {/* <Box p={8}>
          <Badge borderRadius="full" px={4} py={1} colorScheme="pink" mb={4}>
            Get Free Consultation
          </Badge>
          <Heading as="h1" size="xl" mb={6}>Request Quote</Heading> */}
          
          {/* <Stack spacing={4}>
            <SimpleGrid columns={2} spacing={3}>
              <Input placeholder="Full Name" bg="#222" border="1px solid #444" />
              <Input placeholder="Email" type="email" bg="#222" border="1px solid #444" />
            </SimpleGrid> */}

            {/* <SimpleGrid columns={2} spacing={3}>
              <Input placeholder="Phone Number" type="tel" bg="#222" border="1px solid #444" />
              <Select placeholder="Select Service" bg="#222" border="1px solid #444" color="gray.400">
                <option value="photography">Photography</option>
                <option value="printing">Printing</option>
              </Select>
            </SimpleGrid> */}

            {/* <SimpleGrid columns={2} spacing={3}>
              <Input placeholder="Project Title" bg="#222" border="1px solid #444" />
              <Select placeholder="Select Material" bg="#222" border="1px solid #444" color="gray.400">
                <option value="glossy">Glossy Paper</option>
                <option value="matte">Matte Finish</option>
              </Select>
            </SimpleGrid> */}
{/* 
            <SimpleGrid columns={2} spacing={3}>
              <Input placeholder="Quantity" type="number" bg="#222" border="1px solid #444" />
              <Input placeholder="Size/Dimensions" bg="#222" border="1px solid #444" />
            </SimpleGrid>

            <Textarea placeholder="Additional Requirements" bg="#222" border="1px solid #444" rows={4} />

            <Button colorScheme="pink" size="lg" width="fit-content" px={10} mt={4}>
              SUBMIT
            </Button> */}
          {/* </Stack>
        </Box> */}

        {/* Right Side: Visual Image Section
        <Flex bg="white" align="center" justify="center">
          <Image 
            src="your-polaroid-image.jpg" 
            alt="Polaroid Camera Setup" 
            objectFit="cover" 
            h="100%" 
            w="100%" 
          />
        </Flex> */}

      {/* </SimpleGrid>
    </Box> */}
<Footer/>

    </>
  );
};

export default Home;
