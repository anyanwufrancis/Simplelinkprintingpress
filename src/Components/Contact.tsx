import { Box, Text, Flex, Image, Input, Textarea, Button, SimpleGrid, Link, useToast } from "@chakra-ui/react";
import { FaHome, FaArrowRight, FaMapMarkedAlt, FaPhone, FaClock } from 'react-icons/fa';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import { FaEnvelope } from "react-icons/fa6";
import 'leaflet/dist/leaflet.css';
import { useRef, useState } from "react";
import Header from "./shared/header";
import Footer from "./shared/footer";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const position: [number, number] = [9.014647680255155, 7.636400773394353];

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        if (form.current) {
            emailjs.sendForm(
                'service_6kp5pke',
                'template_gcmmlpn',
                form.current,
                'AJsjYXC5oNTfZzvy_'
            )
                .then(() => {
                    toast({
                        title: "Success!",
                        description: "Your message has been sent.",
                        status: "success",
                        duration: 4000,
                        isClosable: true,
                        position: "top"
                    });
                    form.current?.reset();
                })
                .catch((error) => {
                    toast({
                        title: "Error",
                        description: error.text || "Check your internet connection.",
                        status: "error",
                        duration: 5000,
                        isClosable: true,
                        position: "top"
                    });
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };

    const info = [
        { icon: <FaMapMarkedAlt />, title: "Address", detail: "Suite 101, Tuturu Plaza, Ado, Nasarawa", num: [] },
        { icon: <FaPhone />, title: "Call Us", num: ['08098898967', '09167678144'], detail: "" },
        { icon: <FaEnvelope />, title: "Mail Us", detail: "simplelink@gmail.com", num: [] },
        { icon: <FaClock />, title: "Opening Hours", detail: "Mon - Fri: 7am-7pm", num: [] }
    ];

    return (
        <Box pb={0}>
            <Header onOpenSearch={function (): void {
                throw new Error("Function not implemented.");
            } }/>
            <Flex minH="100vh"
 id="banner" justifyContent="center" alignItems="center" h="20rem" bg="gray.700">
                <Text fontSize="42px" color="white" fontWeight={600}>Contact</Text>
            </Flex>

            <Flex bg="#fb2576" alignItems="center" p={4} justifyContent="center" color="white" gap={4}>
                <Link href="/"><FaHome fontSize="25px" /></Link>
                <FaArrowRight fontSize="20px" />
                <Text fontWeight={500} fontSize="29px">Contact</Text>
            </Flex>

            <Box mt={10}>
                {/* @ts-expect-error react-leaflet types */}
                <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={position}><Popup>We are Located Here</Popup></Marker>
                </MapContainer>
            </Box>

            <Box p={8} id="form">
                <Flex direction={{ base: 'column-reverse', lg: 'row' }} gap={8} rounded={6} bg={'#fb2576'} overflow="hidden">
                    <Box flex="1">
                        <Image src="/Contact.jpg" alt="Contact" w="100%" h="100%" objectFit="cover" />
                    </Box>

                    <Box flex="1" p={5}>
                        <Text color={'white'} fontSize={50} fontWeight="bold">Get In Touch</Text>
                        <Box as="form" ref={form} onSubmit={sendEmail}>
                            <Input name="user_name" type="text" bg={'white'} borderRadius={'10px'} mt={3} placeholder={'Name'} required />
                            <Input name="user_email" type="email" bg={'white'} borderRadius={'10px'} mt={3} placeholder="Email" required />
                            <Input name="user_phone" type="text" bg={'white'} borderRadius={'10px'} mt={3} placeholder="Phone Number" />
                            <Textarea name="message" bg={'white'} borderRadius={'10px'} mt={3} placeholder="Message" required />
                            <Button
                                variant="outline" color="white" type="submit" mt={4}
                                isLoading={isLoading} loadingText="Sending..."
                                _hover={{ bg: 'white', color: '#fb2576' }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Box>
                </Flex>
            </Box>

            <Flex justifyContent={"center"}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={7} mt={6} px={9} w="full">
                    {info.map((card, index) => (
                        <Box key={index} bg={"#1d0330"} rounded={"15px"} p={5} transition={".3s"} _hover={{ transform: 'translateY(-4px)' }}>
                            <Flex gap={3}>
                                <span style={{ color: "#fb2576", fontSize: "30px" }}>{card.icon}</span>
                                <Box>
                                    <Text fontSize={20} color={"white"} fontWeight={800}>{card.title}</Text>
                                    <Text mt={1} color={"white"} fontSize="sm">
                                        {card.detail}
                                        {card.num.map((n, i) => <div key={i}>{n}</div>)}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>
            </Flex>
            <Footer />
        </Box>
    );
}
