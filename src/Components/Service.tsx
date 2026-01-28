import { Flex, Box, Link, Text, Image, Grid } from "@chakra-ui/react";
import { FaHome, FaArrowRight } from "react-icons/fa";
import ServiceSingle from "./Service/ServiceSingle";
import Header from "./shared/header";
import Footer from "./shared/footer";

export default function Service (){
    const ServiceProducts = [
        {id: 1, image: "/Service-1.jpg", title: "Card Design", text:" High-Impact designs tailored for events, branding, and marketing to leave a lasting impression."},
        {id: 2, image: "/Banner.jpg", title: "Banner Printing", text:"Durable and eye-catching banners for promotions, events, and branding—designed to make a bold statement indoors or outdoors."},
        {id: 3, image: "/Flyer copy.jpg", title: "Flyer Printing", text:"High-quality flyer printing for promotions, events, and marketing campaigns—crafted to grab attention and drive results."},
        {id: 4, image: "/ShirtPrint.jpg", title: "Shirt Printing", text:"Custom shirt printing services for events, brands, and teams—delivering comfort, durability, and standout designs."},
        {id: 5, image: "/Package.jpg", title: "Package Design", text:"Innovative and brand-focused packaging design solutions that enhance product appeal and drive consumer engagement."},
        {id: 6, image: "/Mug.jpg", title: "Mug Printing", text:"Personalized and promotional mug printing services that make great gifts or branded merchandise."}
    ]
    return (
        <>
        <Header onOpenSearch={function (): void {
                throw new Error("Function not implemented.");
            } }/>
        <Box>
        <Flex minH={"100vh"} alignItems={"center"} justifyContent={"center"} style={{backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/printer-background.jpeg)", backgroundSize: "cover", height: "20pc", width: "100%"}}>
            <Text color={"white"} fontSize={"4pc"}>Services</Text>
        </Flex>

        <Flex 
            py={"3"} 
            color={"white"} 
            alignItems={"center"} 
            justifyContent={"center"} 
            gap={"4"} 
            bgColor={"pink.600"}
        >
            <Link position={"relative"} zIndex={"100"} _hover={{color: "black"}} href="/">
                <Box>
                <FaHome
                    fontSize={"25"}
                />
                </Box>
            </Link>
            <FaArrowRight 
                fontSize={"25"}
            />
            <Text 
                fontSize={"25"} 
                fontWeight={"600"}
                mt={"-1"}
            >
                Services
            </Text>
        </Flex>

        <Box>
            <Image display={"flex"} justifySelf={"center"} mt={"-9"} mb={"-6pc"} src="/wwo.png" w={"20pc"}></Image>
            <Text textAlign={"center"} fontSize={"2.5pc"} fontWeight={"500"} color={"purple"}>Our Services</Text>
        </Box>

        <Grid justifyContent={["center"]} px={["3pc"]} gap={["20px", "30px", "20px","30px", "15px"]} mt={"1pc"} gridTemplateColumns={[ "1fr", "1fr", "1fr 1fr", "1fr 1fr 1fr "]}>
        { ServiceProducts.map((prod) => (
                <Box borderRadius={"20px"} key={prod.id}  mb={"12px"}>
                    <Box borderRadius={"20px"} overflow={"hidden"}>
                    <Image mx={["auto"]} transition={"1s ease-in-out"} _hover={{transform: "Scale(1.1)", transitionDelay: ".5s", }} src={prod.image} w={"24pc"} borderRadius={"20px"}>                    
                    </Image>
                    </Box>
                    <Box  w={["", "fit-content"]}>
                        <Text onClick={() => (console.log(prod.id))} cursor={"pointer"} _hover={{color: "violet"}} transition={".5s ease-in-out"} textAlign={"center"} fontSize={"1.9pc"} color={"purple"} fontWeight={"700"}>{prod.title}</Text>
                        <Text textAlign={"center"} fontFamily={"Tahoma"} fontSize={"16px"} color={"gray.500"} fontWeight={"500"}>{prod.text}</Text>
                    </Box>
                </Box>
        )) }
        </Grid>
            <ServiceSingle />
        </Box>
        <Footer />
        </>
    )
}