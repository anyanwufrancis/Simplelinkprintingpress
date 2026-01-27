import React, { useState, useEffect } from 'react';
import { Box, Container, Text, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Icon, Flex, Image, Button, Heading, Grid, SimpleGrid } from '@chakra-ui/react';
import { FaHome, FaChevronRight, FaClipboardList, FaUsers, FaAward, FaUsersCog } from 'react-icons/fa';
import { MdPrint } from 'react-icons/md';
import Header from '../shared/header';
import Footer from '../shared/footer';

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const servicesSlide1 = [
    {
      image: '/public/Gemini_Generated_Image_bgsbqwbgsbqwbgsb.png',
      title: 'Banner Printing',
      description: 'Durable And Eye-Catching Banners For Promotions, Events, And Branding—Designed To Make A Bold Statement Indoors Or Outdoors.',
    },
    {
      image: '/public/Flyer_1_1000w.avif',
      title: 'Flyer Printing',
      description: 'High-Quality Flyer Printing For Promotions, Events, And Marketing Campaigns—Crafted To Grab Attention And Drive Results.',
    },
    {
      image: '/public/T-Shirts.jpg',
      title: 'Shirt Printing',
      description: 'Custom Shirt Printing Services For Events, Brands, And Teams—Delivering Comfort, Durability, And Standout Designs.',
    },
  ];

  const servicesSlide2 = [
    {
      image: '/public/business-card.webp',
      title: 'Business Card Printing',
      description: 'Professional Business Cards That Make Lasting First Impressions—Premium Quality With Custom Designs.',
    },
    {
      image: '/public/poster.jpg',
      title: 'Poster Printing',
      description: 'Vibrant Poster Printing For Events, Promotions, And Advertising—High-Resolution Prints That Capture Attention.',
    },
    {
      image: '/public/sticker.webp',
      title: 'Sticker Printing',
      description: 'Custom Sticker Printing For Branding, Promotions, And Personal Use—Durable, Weather-Resistant, And Eye-Catching.',
    },
  ];

  const stats = [
    {
      icon: FaClipboardList,
      count: '1,000+',
      label: 'Projects Done',
    },
    {
      icon: FaUsers,
      count: '1,000+',
      label: 'Satisfied Clients',
    },
    {
      icon: FaAward,
      count: '20+',
      label: 'Awards Won',
    },
    {
      icon: FaUsersCog,
      count: '50+',
      label: 'Expert Team',
    },
  ];


  return (
    <Box position="relative" w="100%" overflow="hidden">
      <Header onOpenSearch={function (): void {
        throw new Error('Function not implemented.');
      } } />
      <Box
        position="relative"
        h={{ base: "250px", md: "300px" }}
        bg="gray.800"
        overflow="hidden"
      >
        <Box position="absolute" top="0" left="0" w="100%" h="100%">
          <Box
            position="absolute"
            top="-20%"
            left="30%"
            w="40%"
            h="140%"
            bg="blue.900"
            transform="rotate(15deg)"
            opacity={0.9}
          />

          {/* Maroon/burgundy diagonal shape */}
          <Box
            position="absolute"
            top="-30%"
            left="0%"
            w="35%"
            h="160%"
            bg="red.900"
            transform="rotate(25deg)"
            opacity={0.8}
          />

          {/* Brown diagonal shape */}
          <Box
            position="absolute"
            top="-10%"
            right="10%"
            w="45%"
            h="120%"
            bg="#8B4513"
            transform="rotate(-20deg)"
            opacity={0.85}
          />

          {/* Gold/tan accent shape */}
          <Box
            position="absolute"
            top="-15%"
            right="5%"
            w="20%"
            h="130%"
            bg="#C4A661"
            transform="rotate(-15deg)"
            opacity={0.7}
          />

          {/* Dark overlay shapes */}
          <Box
            position="absolute"
            bottom="-20%"
            right="-5%"
            w="50%"
            h="100%"
            bg="gray.900"
            transform="rotate(-25deg)"
            opacity={0.9}
          />
        </Box>

        {/* Content */}
        <Container
          maxW="container.xl"
          position="relative"
          zIndex={2}
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="bold"
            color="white"
            textAlign="center"
            letterSpacing="wide"
          >
            ABOUT US
          </Text>
        </Container>
      </Box>

      {/* Pink breadcrumb bar */}
      <Box bg="#FF1498" py={4}>
        <Container maxW="container.xl">
          <Breadcrumb
            spacing={3}
            separator={<Icon as={FaChevronRight} color="white" boxSize={3} />}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                display="flex"
                alignItems="center"
                color="white"
                fontSize="lg"
                _hover={{ textDecoration: "none", opacity: 0.8 }}
              >
                <Icon as={FaHome} boxSize={8} mr={2} />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                color="white"
                fontSize="2xl"
                fontWeight="semibold"
                _hover={{ textDecoration: "none" }}
              >
                About Us
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </Box>

      {/* Know About Us Section */}
      <Container maxW="container.xl" py={{ base: 12, md: 10 }}>
        <Flex direction="column" align="center" gap={2}>
          <Flex
            align="center"
            gap={3}
            bg="#FF1498"
            px={8}
            py={1}
            borderRadius="sm"
            color="white"
          >
            <Icon as={MdPrint} boxSize={5} />
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="medium"
              fontStyle="italic"
            >
              Know About Us
            </Text>
            <Icon as={MdPrint} boxSize={5} />
          </Flex>

          {/* About Us heading */}
          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="semibold"
            color="navy"
            textAlign="center"
          >
            About Us
          </Text>
        </Flex>
      </Container>

      {/* We Take Care Of Print Section */}
      <Box
        position="relative"
        bg="gray.100"
        py={{ base: 8, md: 12 }}
        overflow="hidden"
      >
        <Container maxW="container.xl" px={{ base: 4, md: 8 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            position="relative"
            gap={{ base: 8, md: 0 }}
          >
            {/* Left Image */}
            <Box
              w={{ base: "100%", md: "50%" }}
              position="relative"
              zIndex={2}
              pl={{ base: 0, md: 8 }}
            >
              <Image
                src="/public/Screenshot_22-1-2026_134113_demo.templatemonster.com.jpeg"
                alt="Color Swatch Fan"
                w="100%"
                maxW={{ base: "100%", md: "550px" }}
                h={{ base: "300px", md: "350px" }}
                objectFit="cover"
                borderRadius="15px"
                boxShadow="2xl"
              />
            </Box>

            {/* Right Pink Box */}
            <Box
              w={{ base: "100%", md: "65%" }}
              bg="#FF1498"
              position={{ base: "relative", md: "absolute" }}
              right={{ base: 0, md: "-50px" }}
              borderRadius="20px"
              py={{ base: 10, md: 16 }}
              px={{ base: 8, md: 16 }}
              ml={{ base: 0, md: "20%" }}
              zIndex={1}
            >
              <Box
                maxW={{ base: "100%", md: "650px" }}
                ml={{ base: 0, md: "100px" }}
                pr={{ base: 0, md: 8 }}
              >
                <Heading
                  as="h2"
                  fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                  fontWeight="bold"
                  color="wheat"
                  mb={6}
                  lineHeight="1.3"
                >
                  We Take Care Of Print, You Take Care Of Business
                </Heading>

                <Box w="300px" h="2px" bg="white" mb={8} />

                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="wheat"
                  mb={10}
                  lineHeight="1.8"
                >
                  We Take Care Of Print, You Take Care Of Business. Our Team
                  Delivers High-Quality Printing Solutions So You Can Focus On
                  What You Do Best. We Take Care Of Print, You Take Care Of
                  Business. Our Team Delivers High-Quality Printing Solutions So
                  You Can Focus On What You Do Best.
                </Text>

                <Button
                  size="lg"
                  variant="outline"
                  color="wheat"
                  borderColor="white"
                  borderWidth="3px"
                  px={12}
                  py={7}
                  fontSize="md"
                  fontWeight="bold"
                  borderRadius="lg"
                  _hover={{
                    bg: "navy",
                    color: "white",
                  }}
                  textTransform="uppercase"
                  letterSpacing="wider"
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Our Services Section with Auto-Sliding */}
      <Box bg="white" py={{ base: 12, md: 16 }}>
        <Container maxW="container.xl">
          {/* Section Header */}
          <Flex direction="column" align="center" mb={12} gap={3}>
            <Flex
              align="center"
              gap={3}
              bg="#FF1498"
              px={8}
              py={2}
              borderRadius="sm"
              color="white"
            >
              <Icon as={MdPrint} boxSize={5} />
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="medium"
                fontStyle="italic"
              >
                What We Offer
              </Text>
              <Icon as={MdPrint} boxSize={5} />
            </Flex>

            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="semibold"
              color="navy"
              textAlign="center"
            >
              Our Services
            </Heading>
          </Flex>

          {/* Services Slider */}
          <Box position="relative" overflow="hidden">
            <Box
              display="flex"
              transition="transform 3s ease-in-out"
              transform={`translateX(-${currentSlide * 100}%)`}
            >
              {/* Slide 1 */}
              <Box minW="100%" px={2}>
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                  gap={8}
                >
                  {servicesSlide1.map((service, index) => (
                    <Box
                      key={index}
                      borderRadius="20px"
                      overflow="hidden"
                      boxShadow="xl"
                      transition="transform 0.3s"
                      _hover={{ transform: "translateY(-10px)" }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        w="100%"
                        h="250px"
                        objectFit="cover"
                      />
                      <Box bg="white" p={6} textAlign="center">
                        <Heading
                          as="h3"
                          fontSize="2xl"
                          fontWeight="bold"
                          color="navy"
                          mb={3}
                        >
                          {service.title}
                        </Heading>
                        <Text fontSize="md" color="gray.600" lineHeight="1.7">
                          {service.description}
                        </Text>
                      </Box>
                    </Box>
                  ))}
                </Grid>
              </Box>

              {/* Slide 2 */}
              <Box minW="100%" px={2}>
                <Grid
                  templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                  gap={8}
                >
                  {servicesSlide2.map((service, index) => (
                    <Box
                      key={index}
                      borderRadius="20px"
                      overflow="hidden"
                      boxShadow="xl"
                      transition="transform 0.3s"
                      _hover={{ transform: "translateY(-10px)" }}
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        w="100%"
                        h="250px"
                        objectFit="cover"
                      />
                      <Box bg="white" p={6} textAlign="center">
                        <Heading
                          as="h3"
                          fontSize="2xl"
                          fontWeight="bold"
                          color="navy"
                          mb={3}
                        >
                          {service.title}
                        </Heading>
                        <Text fontSize="md" color="gray.600" lineHeight="1.7">
                          {service.description}
                        </Text>
                      </Box>
                    </Box>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Box>

          {/* Slide Indicators */}
          <Flex justify="center" mt={8} gap={3}>
            <Box
              w="12px"
              h="12px"
              borderRadius="full"
              bg={currentSlide === 0 ? "#FF1498" : "gray.300"}
              cursor="pointer"
              onClick={() => setCurrentSlide(0)}
              transition="all 0.3s"
            />
            <Box
              w="12px"
              h="12px"
              borderRadius="full"
              bg={currentSlide === 1 ? "#FF1498" : "gray.300"}
              cursor="pointer"
              onClick={() => setCurrentSlide(1)}
              transition="all 0.3s"
            />
          </Flex>
        </Container>
      </Box>

      {/* Statistics Section */}
      <Box
        position="relative"
        bgImage="url('/public/Gemini_Generated_Image_a83761a83761a837.png')"
        bgSize="cover"
        bgPosition="center"
        bgAttachment="fixed"
        py={{ base: 16, md: 20 }}
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: "rgba(0, 0, 0, 0.4)",
          zIndex: 1,
        }}
      >
        <Container maxW="container.xl" position="relative" zIndex={2}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            {stats.map((stat, index) => (
              <Flex
                key={index}
                direction="column"
                align="center"
                justify="center"
                textAlign="center"
                gap={4}
              >
                {/* Icon Box */}
                <Box
                  w="90px"
                  h="90px"
                  bg="#FF1498"
                  border="3px solid white"
                  borderRadius="md"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon as={stat.icon} boxSize={10} color="white" />
                </Box>

                {/* Count */}
                <Text
                  fontSize={{ base: "4xl", md: "5xl" }}
                  fontWeight="bold"
                  color="white"
                  lineHeight="1"
                >
                  {stat.count}
                </Text>

                {/* Label */}
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="medium"
                  color="white"
                >
                  {stat.label}
                </Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Our History Section */}
      <Box bg="white" py={{ base: 12, md: 16 }}>
        <Container maxW="container.xl">
          <Flex direction="column" align="center" mb={12} gap={3}>
            <Flex
              align="center"
              gap={3}
              bg="#FF1498"
              px={8}
              py={2}
              borderRadius="sm"
              color="white"
            >
              <Icon as={MdPrint} boxSize={5} />
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="medium"
                fontStyle="italic"
              >
                Our Journey
              </Text>
              <Icon as={MdPrint} boxSize={5} />
            </Flex>

            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="semibold"
              color="navy"
              textAlign="center"
            >
              Our History
            </Heading>
          </Flex>

          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={10}
          >
            <Box w={{ base: "100%", md: "50%" }}>
              <Image
                src="/public/Gemini_Generated_Image_fmujd3fmujd3fmuj.png"
                alt="Our History"
                w="150%"
                h={{ base: "300px", md: "400px" }}
                objectFit="fill"
                borderRadius="10px"
                boxShadow="xl"
              />
            </Box>

            <Box w={{ base: "100%", md: "50%" }}>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700"
                lineHeight="1.8"
                mb={4}
              >
                Simplelink printing press is an emergent organization with the
                purpose and determination to address the gaps in corporation
                branding and printing solutions in the country in the wake of
                emerging technology. It is founded as a division of simplelink
                association Ltd, which was registered as a limited liability
                company on 17th October, 2009. our existence as a company in
                Nigeria has made us to succeed in bridging the gaps in the use
                of innovative technology to provide printing solutions.
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700"
                lineHeight="1.8"
                mb={4}
              >
                This has subsequently helped to achieve a reputation for the
                organization which presently is known for quality service and
                consistent concern for customer satisfaction.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Our Company Section */}
      <Box bg="gray.50" py={{ base: 12, md: 16 }}>
        <Container maxW="container.xl">
          <Flex direction="column" align="center" mb={12} gap={3}>
            <Flex
              align="center"
              gap={3}
              bg="#FF1498"
              px={8}
              py={2}
              borderRadius="sm"
              color="white"
            >
              <Icon as={MdPrint} boxSize={5} />
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="medium"
                fontStyle="italic"
              >
                Who We Are
              </Text>
              <Icon as={MdPrint} boxSize={5} />
            </Flex>

            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="semibold"
              color="navy"
              textAlign="center"
            >
              Our Company
            </Heading>
          </Flex>

          <Flex
            direction={{ base: "column-reverse", md: "row" }}
            align="center"
            gap={10}
          >
            <Box w={{ base: "100%", md: "50%" }}>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700"
                lineHeight="1.8"
                mb={4}
              >
                Simplelink printing press was registered in Nigeria with the aim
                of providing high quality corporate branding and printing
                services in all areas of concern involving printing of fliers,
                bill board/banners, calenders, diaries, conference
                bags/conference materials, folder/files/table blotters, season
                cards, cooperates gifts/medals/trophies,
                books/jottera/journals/magazines/newsletters, posters/handbills
                etc. We have track record of excellence in delivery proven
                solutions in all of these areas.
              </Text>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.700"
                lineHeight="1.8"
                mb={4}
              >
                In simplelink printing press, we exceed customer's expectation
                and give unsolicited extras.
              </Text>
            </Box>

            <Box w={{ base: "100%", md: "50%" }}>
              <Image
                src="/public/Gemini_Generated_Image_dptr3dptr3dptr3d.png"
                alt="Our Company"
                w="100%"
                h={{ base: "300px", md: "400px" }}
                objectFit="cover"
                borderRadius="20px"
                boxShadow="xl"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Vision & Mission Section */}
      <Box bg="white" py={{ base: 12, md: 16 }}>
        <Container maxW="container.xl">
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gap={10}
          >
            {/* Vision */}
            <Box
              bg="linear-gradient(135deg, #FF1498 0%, #FF69B4 100%)"
              p={{ base: 8, md: 10 }}
              borderRadius="20px"
              boxShadow="xl"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: "absolute",
                top: "-50%",
                right: "-50%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
              }}
            >
              <Flex
                direction="column"
                align="center"
                position="relative"
                zIndex={1}
              >
                <Icon as={FaAward} boxSize={16} color="white" mb={6} />
                <Heading
                  as="h3"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={6}
                  textAlign="center"
                >
                  Our Vision
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="white"
                  lineHeight="1.8"
                  textAlign="center"
                >
                  Our Vision is to be the most formidable and recognized company
                  known for high quality and printing solutions in Nigeria.
                </Text>
              </Flex>
            </Box>

            {/* Mission */}
            <Box
              bg="linear-gradient(135deg, #001f3f 0%, #003d7a 100%)"
              p={{ base: 8, md: 10 }}
              borderRadius="20px"
              boxShadow="xl"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: "absolute",
                top: "-50%",
                right: "-50%",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
              }}
            >
              <Flex
                direction="column"
                align="center"
                position="relative"
                zIndex={1}
              >
                <Icon as={FaUsersCog} boxSize={16} color="white" mb={6} />
                <Heading
                  as="h3"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  color="white"
                  mb={6}
                  textAlign="center"
                >
                  Our Mission
                </Heading>
                <Text
                  fontSize={{ base: "md", md: "lg" }}
                  color="white"
                  lineHeight="1.8"
                  textAlign="center"
                >
                  Our mission is to provide branding and printing services to
                  our clients and customers at an affordable price, while
                  maximizing our potentials and using the best hands to achieve
                  value and satisfaction for both internal and external
                  stakeholders in our operation.
                </Text>
              </Flex>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Core Values Section */}
      <Box bg="gray.50" py={{ base: 12, md: 16 }} position="relative">
        <Container maxW="container.xl">
          <Flex direction="column" align="center" mb={12} gap={3}>
            <Flex
              align="center"
              gap={3}
              bg="#FF1498"
              px={8}
              py={2}
              borderRadius="sm"
              color="white"
            >
              <Icon as={MdPrint} boxSize={5} />
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="medium"
                fontStyle="italic"
              >
                What Drives Us
              </Text>
              <Icon as={MdPrint} boxSize={5} />
            </Flex>

            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="semibold"
              color="navy"
              textAlign="center"
              mb={4}
            >
              Our Core Values
            </Heading>

            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              textAlign="center"
              maxW="800px"
            >
              We exist to faster mutually beneficial business relationships. In
              this regard, we adhere strickly to certain cherish values to
              define our operation in the markrt place. our core values include:
            </Text>
          </Flex>

          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={8}
          >
            {/* Value 1: Quality */}
            <Box
              bg="white"
              p={8}
              borderRadius="20px"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-10px)",
                boxShadow: "2xl",
              }}
              borderTop="5px solid #FF1498"
            >
              <Flex direction="column" align="center" textAlign="center">
                <Box
                  w="80px"
                  h="80px"
                  bg="#FF1498"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={6}
                >
                  <Icon as={FaAward} boxSize={10} color="white" />
                </Box>
                <Heading
                  as="h4"
                  fontSize="2xl"
                  fontWeight="bold"
                  color="navy"
                  mb={4}
                >
                  Excellence
                </Heading>
                <Text fontSize="md" color="gray.600" lineHeight="1.8">
                  We never compromise on quality. Every project receives our
                  meticulous attention to detail, ensuring results that exceed
                  expectations and stand the test of time.
                </Text>
              </Flex>
            </Box>

            {/* Value 2: Customer Focus */}
            <Box
              bg="white"
              p={8}
              borderRadius="20px"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-10px)",
                boxShadow: "2xl",
              }}
              borderTop="5px solid #FF1498"
            >
              <Flex direction="column" align="center" textAlign="center">
                <Box
                  w="80px"
                  h="80px"
                  bg="#FF1498"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={6}
                >
                  <Icon as={FaUsers} boxSize={10} color="white" />
                </Box>
                <Heading
                  as="h4"
                  fontSize="2xl"
                  fontWeight="bold"
                  color="navy"
                  mb={4}
                >
                  Customer Service
                </Heading>
                <Text fontSize="md" color="gray.600" lineHeight="1.8">
                  Your success is our priority. We listen, understand, and
                  deliver solutions tailored to your unique needs, building
                  lasting relationships based on trust.
                </Text>
              </Flex>
            </Box>

            {/* Value 3: Innovation */}
            <Box
              bg="white"
              p={8}
              borderRadius="20px"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-10px)",
                boxShadow: "2xl",
              }}
              borderTop="5px solid #FF1498"
            >
              <Flex direction="column" align="center" textAlign="center">
                <Box
                  w="80px"
                  h="80px"
                  bg="#FF1498"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={6}
                >
                  <Icon as={MdPrint} boxSize={10} color="white" />
                </Box>
                <Heading
                  as="h4"
                  fontSize="2xl"
                  fontWeight="bold"
                  color="navy"
                  mb={4}
                >
                  Impeccability
                </Heading>
                <Text fontSize="md" color="gray.600" lineHeight="1.8">
                  We hold ourselves to the highest standards of professionalism
                  and excellence. Every interaction, every deliverable reflects
                  our commitment to doing things right the first time.
                </Text>
              </Flex>
            </Box>

            {/* Value 4: Integrity */}
            <Box
              bg="white"
              p={8}
              borderRadius="20px"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-10px)",
                boxShadow: "2xl",
              }}
              borderTop="5px solid #FF1498"
            >
              <Flex direction="column" align="center" textAlign="center">
                <Box
                  w="80px"
                  h="80px"
                  bg="#FF1498"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={6}
                >
                  <Icon as={FaClipboardList} boxSize={10} color="white" />
                </Box>
                <Heading
                  as="h4"
                  fontSize="2xl"
                  fontWeight="bold"
                  color="navy"
                  mb={4}
                >
                  Integrity
                </Heading>
                <Text fontSize="md" color="gray.600" lineHeight="1.8">
                  Honesty and transparency guide everything we do. We build
                  trust through ethical practices, fair pricing, and keeping our
                  promises every single time.
                </Text>
              </Flex>
            </Box>

            {/* Value 5: Sustainability */}
            <Box
              bg="white"
              p={8}
              borderRadius="20px"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-10px)",
                boxShadow: "2xl",
              }}
              borderTop="5px solid #FF1498"
            >
              <Flex direction="column" align="center" textAlign="center">
                <Box
                  w="80px"
                  h="80px"
                  bg="#FF1498"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={6}
                >
                  <Icon as={FaHome} boxSize={10} color="white" />
                </Box>
                <Heading
                  as="h4"
                  fontSize="2xl"
                  fontWeight="bold"
                  color="navy"
                  mb={4}
                >
                  Sustainability
                </Heading>
                <Text fontSize="md" color="gray.600" lineHeight="1.8">
                  We care about our planet. From eco-friendly materials to
                  responsible waste management, we're committed to minimizing
                  our environmental impact.
                </Text>
              </Flex>
            </Box>

            {/* Value 6: Teamwork */}
            <Box
              bg="white"
              p={8}
              borderRadius="20px"
              boxShadow="lg"
              transition="all 0.3s"
              _hover={{
                transform: "translateY(-10px)",
                boxShadow: "2xl",
              }}
              borderTop="5px solid #FF1498"
            >
              <Flex direction="column" align="center" textAlign="center">
                <Box
                  w="80px"
                  h="80px"
                  bg="#FF1498"
                  borderRadius="full"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={6}
                >
                  <Icon as={FaUsersCog} boxSize={10} color="white" />
                </Box>
                <Heading
                  as="h4"
                  fontSize="2xl"
                  fontWeight="bold"
                  color="navy"
                  mb={4}
                >
                  Teamwork
                </Heading>
                <Text fontSize="md" color="gray.600" lineHeight="1.8">
                  Collaboration fuels our success. We work together as one team,
                  combining our diverse skills and expertise to deliver
                  exceptional results for you.
                </Text>
              </Flex>
            </Box>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default About;