import { Box, Flex, Text, Grid } from "@chakra-ui/react";
import { useState } from "react";
import Sidebar from "./Sidebar";
import CardDesign from "./CardDesign";

export default function ServiceSingle() {
    const [active, setActive] = useState<string | null>(null)

    return (
        <Box px={""}>
            <Flex mb={"3pc"} alignItems={"center"} justifyContent={"center"} mt={"2pc"} h={"4.5pc"} bgImg={"url(/stripe.png)"} color={"white"}>
                <Text fontSize={"2pc"} fontWeight={"600"}>
                    Overview
                </Text>
            </Flex>
            <Grid px={["1.5pc", "1.5pc","2.5pc","4pc"]} py={["2pc","2pc","2pc", "3pc"]} gridTemplateColumns={["1fr", "1fr","1fr 2fr", "1fr 2fr"]} gap={["2pc", ""]}>
                <Sidebar setActive={setActive} />
                <CardDesign active={active} />
            </Grid>
        </Box>
    );

}    