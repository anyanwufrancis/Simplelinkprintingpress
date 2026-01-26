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
  Input,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import {
  IoChevronBack,
  IoChevronForward,
  IoSettingsOutline,
} from "react-icons/io5";
import { FiPrinter, FiMaximize2 } from "react-icons/fi";
import { FaLaptopCode, FaCube, FaStar } from "react-icons/fa";
import Header from "./shared/header";
import Footer from "./shared/footer";

const MotionBox = motion(Box);

// ================= SLIDES =================
const slides = [
  {
    image: "/bilborad 2.jpg",
    title: "Professional Printing Solutions",
    text: "High-quality printing services tailored to your business needs.",
  },
  {
    image: "/printing ma 2.jpg",
    title: "Quality Services For Less Printing",
    text: "We offer the best digital services at unbeatable prices.",
  },
  {
    image: "/clothes.png",
    title: "Dedicated To Excellence",
    text: "We offer the best printing services at unbeatable prices.",
  },
];

// ================= CATEGORIES =================
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

const categories = [
  { key: "all", label: "All" },
  { key: "gift", label: "Gift Packaging" },
  { key: "tshirt", label: "T Shirt Printing" },
  { key: "card", label: "Card Design" },
  { key: "mug", label: "Mug Printing" },
];

// ================= HIGHLIGHT FUNCTION =================
const highlightText = (text: string, query: string) => {
  if (!query) return text;
  const regex = new RegExp(`(${query})`, "gi");
  return text.replace(
    regex,
    `<span style="color:#ff4d8d;font-weight:bold">$1</span>`,
  );
};

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [category, setCategory] = useState<CategoryKey>("all");
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  // 🔥 GLOBAL SEARCH STATE
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  // 🔥 ALL SEARCHABLE ITEMS (PROJECTS + PRODUCTS)
  const allItems = useMemo(() => {
    const projectItems = Object.values(categoryItems).flat();

    const productItems = [
      {
        id: 1001,
        category: "Printed Mug",
        name: "Printed Mug",
        image: "/cup.jpg",
      },
      {
        id: 1002,
        category: "Greeting Cards",
        name: "Greeting Cards",
        image: "/greeting card.png",
      },
      {
        id: 1003,
        category: "Branded Cap",
        name: "Branded Cap",
        image: "/cap.png",
      },
      { id: 1004, category: "Banner", name: "Banner", image: "/banner.webp" },
      { id: 1005, category: "Flyer", name: "Flyer", image: "/flyer.jpg" },
    ];

    return [...projectItems, ...productItems];
  }, []);

  // 🔥 GLOBAL SEARCH FILTER
  const searchResults = allItems.filter((item) => {
    if (!searchTerm) return false;
    return (
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // NORMAL PROJECT FILTER
  const displayedItems = (categoryItems[category] ?? []).filter((item) => {
    if (!searchTerm) return true;
    return (
      item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
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
  return (
    <>
      {/* HEADER WITH GLOBAL SEARCH */}
      <Header onOpenSearch={() => setIsSearchOpen(true)} />
      {/* 🔥 GLOBAL SEARCH MODAL */}
      <Modal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        size="full"
      >
        <ModalOverlay />
        <ModalContent bg="blackAlpha.900">
          <ModalCloseButton color="white" />
          <ModalBody py={20}>
            <Box maxW="900px" mx="auto">
              <Input
                placeholder="Search anything..."
                size="lg"
                bg="white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                mb={6}
              />

              {searchResults.length === 0 && searchTerm && (
                <Text color="white" fontSize="xl">
                  No results found for "{searchTerm}"
                </Text>
              )}

              <Grid
                templateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
                gap={6}
              >
                {searchResults.map((item) => (
                  <Box
                    key={item.id}
                    bg="white"
                    rounded="lg"
                    overflow="hidden"
                    cursor="pointer"
                    onClick={() => setIsSearchOpen(false)}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      h="200px"
                      w="100%"
                      objectFit="cover"
                    />
                    <Box p={3}>
                      <Text
                        fontWeight="bold"
                        dangerouslySetInnerHTML={{
                          __html: highlightText(item.name || "", searchTerm),
                        }}
                      />
                      <Text
                        fontSize="sm"
                        color="gray.500"
                        dangerouslySetInnerHTML={{
                          __html: highlightText(item.category, searchTerm),
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </Grid>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      {/* ================= YOUR EXISTING PAGE CONTINUES BELOW ================= */}
      {/* SLIDER */}
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
            transition={{ duration: 0.4 }}
          >
            <Box position="absolute" inset={0} bg="blackAlpha.600" />
            <Flex
              position="relative"
              zIndex={2}
              direction="column"
              justify="center"
              align="flex-start"
              h="100%"
              ml="2em"
              color="white"
            >
              <Heading fontSize={{ base: "3xl", md: "6xl" }}>
                {slides[slideIndex].title}
              </Heading>
              <Text mt={4} fontSize={{ base: "md", md: "2xl" }}>
                {slides[slideIndex].text}
              </Text>
              <Button mt={6} colorScheme="pink" size="lg">
                Contact Us
              </Button>
            </Flex>
          </MotionBox>
        </AnimatePresence>
      </Box>
      {/* Features Section */}{" "}
      <Box py={{ base: 10, md: 16 }} px={{ base: 4, md: 12 }} bg="gray.50">
        {" "}
        <Heading
          textAlign="center"
          mb={10}
          fontSize={{ base: "2xl", md: "4xl" }}
        >
          {" "}
          Our Features{" "}
        </Heading>{" "}
        <Grid
          templateColumns={{ base: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          gap={6}
        >
          {" "}
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
              {" "}
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
                {" "}
                <Icon as={feature.icon} boxSize={8} color="pink.500" />{" "}
              </Flex>{" "}
              <Heading fontSize="xl" mb={3}>
                {" "}
                {feature.title}{" "}
              </Heading>{" "}
              <Text fontSize="md" color="gray.600">
                {" "}
                {feature.description}{" "}
              </Text>{" "}
            </MotionBox>
          ))}{" "}
        </Grid>{" "}
      </Box>
      {/* PROJECTS GRID */}
      <Heading mt="2em" textAlign="center">
        Our Projects
      </Heading>
      <Flex justify="center" gap={4} mb={6} flexWrap="wrap">
        {categories.map((cat) => (
          <Button
            key={cat.key}
            onClick={() => setCategory(cat.key as CategoryKey)}
            colorScheme={category === cat.key ? "pink" : "gray"}
          >
            {cat.label}
          </Button>
        ))}
      </Flex>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3,1fr)" }}
        gap={6}
        px={10}
      >
        {displayedItems.map((item) => (
          <GridItem key={item.id} colSpan={{ base: 1, md: item.span ?? 1 }}>
            <Box position="relative" overflow="hidden" rounded="xl">
              <Image
                src={item.image}
                alt={item.name}
                w="100%"
                h="350px"
                objectFit="cover"
              />

              <MotionBox
                position="absolute"
                inset={0}
                bg="blackAlpha.600"
                opacity={0}
                _hover={{ opacity: 1 }}
              >
                <Flex justify="flex-end" p={3}>
                  <Icon
                    as={FiMaximize2}
                    boxSize={8}
                    color="white"
                    bg="pink.400"
                    p={2}
                    rounded="md"
                    onClick={() => setOpenCardId(item.id)}
                  />
                </Flex>

                <Box p={4} mt="200px">
                  <Text
                    color="white"
                    fontWeight="bold"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(item.category, searchTerm),
                    }}
                  />
                  <Text
                    color="white"
                    fontSize="xl"
                    fontWeight="bold"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(item.name || "", searchTerm),
                    }}
                  />
                </Box>
              </MotionBox>

              <Modal
                isOpen={openCardId === item.id}
                onClose={() => setOpenCardId(null)}
                size="full"
              >
                <ModalOverlay />
                <ModalContent bg="blackAlpha.900">
                  <ModalCloseButton color="white" />
                  <ModalBody
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Image src={item.image} alt={item.name} maxH="90vh" />
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
        <Button colorScheme="pink" mt={"14em"}
         ml={"2em"} 
         size="lg">
          {" "}
          Contact Us{" "}
        </Button>{" "}
        <Heading
          color="white"

          px={{ base: 4, md: 8 }}
          fontSize={{ base: "2xl", md: "7xl" }}
          zIndex={1}
          py={4}
          ml={"-2em"}
          rounded="md"
        >
          Bring Your Ideas to Life with Professional Print Solutions{" "}
        </Heading>{" "}
      </Box>{" "}
      <Box textAlign={"center"} mt="4em" px={{ base: 4, md: 12 }}>
        {" "}
        <Heading
          mb="1em"
          fontSize={{ base: "2xl", md: "5xl" }}
          color="purple.900"
        >
          {" "}
          Our Products{" "}
        </Heading>{" "}
        <Grid
          templateColumns={{ base: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
          gap={{ base: 4, md: 6 }}
        >
          {" "}
          {[
            { img: "cup.jpg", title: "Printed Mug" },
            { img: "greeting card.png", title: "Greeting Cards" },
            { img: "cap.png", title: "Branded Cap" },
            { img: "palmphets 1.jpg", title: "Palmphet" },
            { img: "keychain.png", title: "Custom Key Chain" },
            { img: "jotter 2.jpg", title: "Custom Jotter" },
            {
              img: "modern-office-id-card-template-1-scaled.jpg",
              title: "Customise Id Card",
            },
            { img: "banner.webp", title: "Customise Banner" },
            { img: "Umbrella.jpg", title: "Customise Unbrella" },
            { img: "appron.jpg", title: "Custom Appron" },
            { img: "flyer.jpg", title: "Custom Flyer" },
            {
              img: "Complementary-Card1.jpg",
              title: "Customise Cmplementary ard",
            },
          ].map((item, idx) => (
            <Box key={idx} textAlign="center">
              {" "}
              <Box
                w="100%"
                h={{ base: "150px", md: "200px" }}
                mb={2}
                overflow="hidden"
                rounded="md"
              >
                {" "}
                <Image
                  src={item.img}
                  alt={item.title}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="all 0.3s ease"
                  _hover={{ transform: "scale(1.05)" }}
                />{" "}
              </Box>{" "}
              <Heading
                fontSize="lg"
                fontWeight="bold"
                color="purple.900"
                mb={1}
              >
                {" "}
                {item.title}{" "}
              </Heading>{" "}
              <Flex justify="center" color="pink.400">
                {" "}
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />{" "}
              </Flex>{" "}
            </Box>
          ))}
        </Grid>{" "}
      </Box>
      <Footer />
    </>
  );
};

export default Home;
