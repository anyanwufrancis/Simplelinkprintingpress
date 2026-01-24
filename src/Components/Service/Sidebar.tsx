import { Box, Text, Divider, Image, Flex } from '@chakra-ui/react'
import { TfiPrinter } from "react-icons/tfi";
type SidebarProps = {
    setActive: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function Sidebar({setActive }: SidebarProps) {
    return (
        <Box bgColor={"white"} fontFamily={""} h={"32pc"} boxShadow={"dark-lg"} width={["", "", "fit-content"]} borderRadius={"10px"} p={'4'}>
            <Text fontSize={"2pc"} color={"darkblue"} mb={'3'}>All Services</Text>
            <Image src='/image.png' mb={"25px"}></Image>
            <Flex onClick={() => setActive("first")} gap={"10px"} cursor={"pointer"} alignItems={"center"} py={"15px"}>
                <TfiPrinter fontSize={"1.3pc"} color='rgb(212, 60, 118)' />
                <Text fontSize={"1.3pc"} color={"darkblue"} transition={".5s"} _hover={{ color: "rgb(212, 60, 118)" }}>Card Design</Text>
            </Flex>
            <Divider color={"gray"} h={"1px"} w={["20pc"]}></Divider>
            <Flex onClick={() => setActive("second")} gap={"10px"} cursor={"pointer"} alignItems={"center"} py={"15px"}>
                <TfiPrinter fontSize={"1.3pc"} color='rgb(212, 60, 118)' />
                <Text fontSize={"1.3pc"} color={"darkblue"} transition={".5s"} _hover={{ color: "rgb(212, 60, 118)" }}>Banner Printing</Text>
            </Flex>
            <Divider color={"gray"} h={"1px"} w={["20pc"]}></Divider>
            <Flex onClick={() => setActive("third")} gap={"10px"} cursor={"pointer"} alignItems={"center"} py={"15px"}>
                <TfiPrinter fontSize={"1.3pc"} color='rgb(212, 60, 118)' />
                <Text fontSize={"1.3pc"} color={"darkblue"} transition={".5s"} _hover={{ color: "rgb(212, 60, 118)" }}>Flyer Printing</Text>
            </Flex>
            <Divider color={"gray"} h={"1px"} w={["20pc"]}></Divider>
            <Flex onClick={() => setActive("fourth")} gap={"10px"} cursor={"pointer"} alignItems={"center"} py={"15px"}>
                <TfiPrinter fontSize={"1.3pc"} color='rgb(212, 60, 118)' />
                <Text fontSize={"1.3pc"} color={"darkblue"} transition={".5s"} _hover={{ color: "rgb(212, 60, 118)" }}>Shirt Printing</Text>
            </Flex>
            <Divider color={"gray"} h={"1px"} w={["20pc"]}></Divider>
            <Flex onClick={() => setActive("fifth")} gap={"10px"} cursor={"pointer"} alignItems={"center"} py={"15px"}>
                <TfiPrinter fontSize={"1.3pc"} color='rgb(212, 60, 118)' />
                <Text fontSize={"1.3pc"} color={"darkblue"} transition={".5s"} _hover={{ color: "rgb(212, 60, 118)" }}>Package Design</Text>
            </Flex>
            <Divider color={"gray"} h={"2px"} w={["20pc"]}></Divider>
            <Flex onClick={() => setActive("sixth")} gap={"10px"} cursor={"pointer"} alignItems={"center"} py={"15px"}>
                <TfiPrinter fontSize={"1.3pc"} color='rgb(212, 60, 118)' />
                <Text fontSize={"1.3pc"} color={"darkblue"} transition={".5s"} _hover={{ color: "rgb(212, 60, 118)" }}>Mug Printing</Text>
            </Flex>
            <Divider color={"gray"} h={"2px"} w={["10pc","20pc"]}></Divider>
        </Box>
    );
}