import { Box, Text, Flex, Image, Input, Textarea, Button, SimpleGrid, Link, useToast } from "@chakra-ui/react";
import { FaHome, FaArrowRight, FaMapMarkedAlt, FaPhone, FaClock } from 'react-icons/fa';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import { FaEnvelope } from "react-icons/fa6";
import 'leaflet/dist/leaflet.css';
import { useRef } from "react";


export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const toast = useToast();

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                'YOUR_SERVICE_ID', // Replace with your Service ID
                'YOUR_TEMPLATE_ID', // Replace with your Template ID
                form.current,
                'YOUR_PUBLIC_KEY' // Replace with your Public Key
            )
            .then(() => {
                toast({ title: "Message sent!", status: "success", duration: 3000 });
                form.current?.reset();
            }, (error) => {
                toast({ title: "Failed to send.", description: error.text, status: "error" });
            });
        }
    };

    const info = [
        {
            icon: <FaMapMarkedAlt />,
            title: "Address",
            detail: "Suite 101, Tuturu Plaza, After A.A Rano Filling Station, Ado, Nasarawa State",
            num: []
        },
        {
            icon: <FaPhone />,
            title: "Call Us",
            num: ['08098898967', '09167678144'],
            detail: ""
        },
        {
            icon: <FaEnvelope />,
            title: "Mail Us",
            detail: "simplelink@gmail.com",
            num: []
        },
        {
            icon: <FaClock />,
            title: "Opening Hours",
            detail: "Mon - Fri: 7am-7pm ",
            num: []
        }
    ];

    const position: number[] = [9.014647680255155, 7.636400773394353]

    return (
        <Box pb={10}>

            <Flex   
                id="banner"
                justifyContent="center"
                alignItems="center"
                h="20rem"
                bg="gray.700"
            >

                <Text
                    fontSize="42px"
                    color="white"
                    fontWeight={600}
                >
                    Contact
                </Text>

            </Flex>

            <Flex
                bg="#fb2576"
                alignItems="center"
                p={4}
                justifyContent="center"
                color="white"
                gap={4}
            >
                <Link
                    _hover={{ color: 'black', cursor: 'pointer' }}
                    href="/"
                >
                    <FaHome
                        fontSize="25px"
                    />
                </Link>
                <FaArrowRight
                    fontSize="20px"
                />

                <Text
                    fontWeight={500}
                    fontSize="29px"
                >
                    Contact
                </Text>
            </Flex>

            <Box
                mt={10}
            >
                <MapContainer
                    center={position}
                    zoom={15}
                    style={{ height: "400px", width: "100%", zIndex: 0 }}
                >
                    <TileLayer
                        attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={position}
                    >
                        <Popup>
                            We are Located Here
                        </Popup>
                    </Marker>
                </MapContainer>
            </Box>

            <Box
                p={8}
            >
                <Flex
                    direction={{
                        base: 'column-reverse',
                        lg: 'row'
                    }}
                    gap={8}
                    rounded={6}
                    bg={'#fb2576'}
                    overflow="hidden"
                >
                    <Box
                        flex="1"
                        as="form" 
                        ref={form} 
                        onSubmit={sendEmail}
                    >
                        <Image
                            src="/Contact.d2c2af0fdd44b2907a09.jpg"
                            alt="Contact"
                            w="100%"
                            h={"100%"}
                            objectFit="cover"
                        />
                    </Box>

                    <Box
                        flex="1"
                        p={5}
                    >
                        <Text
                            color={'white'}
                            fontSize={50}
                            fontWeight="bold"
                        >
                            Get In Touch
                        </Text>

                        <Input
                            type="text"
                            bg={'white'}
                            borderRadius={'10px'}
                            name="user_name"
                            mt={3}
                            placeholder={'Name'}
                            required
                        />
                        <Input
                            type="text"
                            bg={'white'}
                            borderRadius={'10px'}
                            mt={3}
                            name="user_email"
                            placeholder="Email"
                            required
                        />
                        <Input
                            type="text"
                            bg={'white'}
                            borderRadius={'10px'}
                            name="user_phone"
                            mt={3}
                            placeholder="Phone Number" />
                        <Textarea
                            bg={'white'}
                            borderRadius={'10px'}
                            mt={3}
                            name="message"
                            placeholder="Message"
                            required
                            />
                        <Button
                            variant="outline"
                            color="white"
                            type="submit"
                            mt={4}
                            _hover={{ bg: 'white', color: '#fb2576' }}
                        >
                            Submit
                        </Button>
                    </Box>
                </Flex>
            </Box>

            <Flex
                justifyContent={"center"}
            >
                <SimpleGrid
                    columns={{ base: 1, md: 2, lg: 4 }}
                    gap={7}
                    mt={6}
                    px={9}
                    w="full"
                >
                    {info.map((card, index) => (
                        <Box
                            key={index}
                            bg={"#1d0330"}
                            rounded={"15px"}
                            p={5}
                            transition={".3s"}
                            _hover={{ transform: 'translateY(-4px)' }}>
                            <Flex
                                gap={3}
                            >
                                <span
                                    style={{ color: "#fb2576", fontSize: "30px" }}
                                >
                                    {card.icon}
                                </span>
                                <Box>
                                    <Text
                                        fontSize={20}
                                        color={"white"}
                                        fontWeight={800}
                                    >
                                        {card.title}
                                    </Text>
                                    <Text
                                        mt={1}
                                        fontWeight={400}
                                        color={"white"}
                                        fontSize="sm">
                                        {card.detail}
                                        {card.num && card.num.map((n, i) => <div key={i}>{n}</div>)}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>
            </Flex>
        </Box>
    );
}
