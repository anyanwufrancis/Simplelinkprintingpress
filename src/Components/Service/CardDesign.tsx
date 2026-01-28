import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box, Image, Text, Grid, Flex } from "@chakra-ui/react";
import { FaPlus, FaMinus, FaCheck } from "react-icons/fa";
import { TfiPrinter } from "react-icons/tfi";
import { motion } from "framer-motion"
type CardDesignProps = {
    active: string | null;
};
export default function FullServiceComponents({ active }: CardDesignProps) {
    const MotionBox = motion(Box)
    const words = [
        {
            card: {

                id: 1,

                image: "/Service-1.jpg",

                firstTitle: "Card Design",

                subFirstTitle: "Our card design services deliver visually compelling and brand-consistent designs for business cards, invitation cards, thank-you notes, and more.",

                subSecondTitle: "From layout to typography and print finishes, we ensure each card reflects your personality or brand identity while maintaining clarity and elegance.",

                imageSec: "/card3.jpg",

                imageThird: "/id-card.jpg",

                thirdTitle: "Service Features",

                subThirdTitle: "Key highlights of our Card Design service, focusing on design excellence and functional detail.",

                liTextone: "Custom Layout Design",

                liTexttwo: "Typography & Font Styling",

                liTextthree: "Premium Print-Ready Formats",

                liTextfour: "Logo & Brand Integration",

                liTextfive: "Special Finishes (Foil, Emboss, etc.)",

                fourthTitle: "Service Process",

                subFourthTitle: "Our Card Design service follows a thoughtful design-to-execution process, ensuring cohesive and high-quality results.",

                sndliTextone: "Client Brief & Requirements Gathering",

                sndliTexttwo: "Initial Concepts & Variations",

                sndliTextthree: "Feedback & Refinement",

                sndliTextfour: "Final Design Approval",

                sndliTextfive: "Print Preparation",

                faqitemone: "What types of cards do you design?",
                faqitemonesub: "We design business cards, event invitations, greeting cards, thank-you cards, and more based on your needs.",

                faqitemtwo: "Can I choose the paper and print finish?",
                faqitemtwosub: "Yes, we offer guidance on selecting the best paper stock and print techniques like matte, gloss, foil stamping, and embossing.",

                faqitemthree: "Do you provide print-ready files?",
                faqitemthreesub: "Absolutely. All final designs are delivered in high-resolution, print-ready formats such as PDF, AI, or EPS.",

                faqitemfour: "Can you match my brand guidelines?",
                faqitemfoursub: "Yes, we ensure that every card design aligns with your existing brand identity, including logos, colors, and fonts."
            },
            Banner: {

                id: 2,

                image: "/Banner.jpg",

                firstTitle: "Banner Printing",

                subFirstTitle: "Our banner printing services provide high-resolution visuals on sturdy materials suited for all weather conditions and applications.",

                subSecondTitle: "Whether it’s for trade shows, storefronts, or special events, we design and print banners that command attention and effectively communicate your message.",

                imageSec: "/card3.jpg",

                imageThird: "/id-card.jpg",

                thirdTitle: "Service Features",

                subThirdTitle: "Key highlights of our Banner Printing service, focusing on design excellence and functional detail.",

                liTextone: "Custom Size & Layout Options",

                liTexttwo: "Weather-Resistant Materials",

                liTextthree: "High-Resolution Printing",

                liTextfour: "Grommets & Hemming Included",

                liTextfive: "Design Assistance Available",

                fourthTitle: "Service Process",

                subFourthTitle: "Our Banner Printing service follows a thoughtful design-to-execution process, ensuring cohesive and high-quality results.",

                sndliTextone: "Requirement Discussion & Sizing",

                sndliTexttwo: "Design Mockups & Review",

                sndliTextthree: "Approval & Print Preparation",

                sndliTextfour: "Professional Printing",

                sndliTextfive: "Packaging",

                faqitemone: "What types of banners do you print?",
                faqitemonesub: "We print vinyl banners, mesh banners, fabric banners, and retractable banners for both indoor and outdoor use.",

                faqitemtwo: "Can you help with banner design?",
                faqitemtwosub: "Yes, our in-house designers can create a banner layout that aligns with your goals and branding guidelines.",

                faqitemthree: "What sizes are available?",
                faqitemthreesub: "We offer fully customizable sizes to suit your needs—ranging from small tabletop banners to large-format outdoor signage.",

                faqitemfour: "How long does banner printing take?",
                faqitemfoursub: "Standard turnaround time is 3–5 business days, but rush options are available depending on project scope and volume."
            },
            Flyer: {

                id: 3,

                image: "/Flyer copy.jpg",

                firstTitle: "Flyer Printing",

                subFirstTitle: "Our flyer printing service delivers crisp visuals and vibrant colors on premium paper stock, perfect for spreading your message.",

                subSecondTitle: "Ideal for businesses, events, and product launches, our flyers are designed to be visually engaging and informative.",

                imageSec: "/card3.jpg",

                imageThird: "/id-card.jpg",

                thirdTitle: "Service Features",

                subThirdTitle: "Key highlights of our Flyer Printing service, focusing on design excellence and functional detail.",

                liTextone: "Single & Double-Sided Printing",

                liTexttwo: "Glossy, Matte & Uncoated Options",

                liTextthree: "Various Paper Weights & Sizes",

                liTextfour: "Custom Design Support",

                liTextfive: "Fast Turnaround Time",

                fourthTitle: "Service Process",

                subFourthTitle: "Our Flyer Printing service follows a thoughtful design-to-execution process, ensuring cohesive and high-quality results.",

                sndliTextone: "Briefing & Requirements Gathering",

                sndliTexttwo: "Design or Artwork Submission",

                sndliTextthree: "Proofing & Client Approval",

                sndliTextfour: "Flyer Printing & Finishing",

                sndliTextfive: "Packaging & Dispatch",

                faqitemone: "What flyer sizes do you offer?",
                faqitemonesub: "We offer A4, A5, A6, DL, and custom sizes based on your campaign needs.",

                faqitemtwo: "Can I print in full color on both sides?",
                faqitemtwosub: "Yes, we provide full-color printing on both sides of the flyer for maximum visual impact.",

                faqitemthree: "Do you help with flyer design?",
                faqitemthreesub: "Absolutely! Our graphic design team can create compelling flyer designs tailored to your brand and message.",

                faqitemfour: "What is the typical turnaround time?",
                faqitemfoursub: "Standard orders are completed within 2–4 business days, depending on quantity and design complexity."
            },
            Shirt: {

                id: 4,

                image: "/ShirtPrint.jpg",

                firstTitle: "Shirt Printing",

                subFirstTitle: "Our shirt printing service offers high-quality prints on a variety of shirt styles, fabrics, and colors to suit your personal or promotional needs.",

                subSecondTitle: "Whether it’s for a corporate event, sports team, or merchandise line, we ensure each shirt reflects your brand identity with precision and style.",

                imageSec: "/card3.jpg",

                imageThird: "/id-card.jpg",

                thirdTitle: "Service Features",

                subThirdTitle: "Key highlights of our Shirt Printing service, focusing on design excellence and functional detail.",

                liTextone: "Screen & Digital Printing Options",

                liTexttwo: "Custom Designs & Logos",

                liTextthree: "Range of Shirt Styles & Sizes",

                liTextfour: "Durable Wash-Resistant Prints",

                liTextfive: "Bulk Order Discounts Available",

                fourthTitle: "Service Process",

                subFourthTitle: "Our Shirt Printing service follows a thoughtful design-to-execution process, ensuring cohesive and high-quality results.",

                sndliTextone: "Consultation & Design Discussion",

                sndliTexttwo: "Shirt Selection & Sizing",

                sndliTextthree: "Artwork Finalization",

                sndliTextfour: "Printing & Quality Check",

                sndliTextfive: "Packaging & Delivery",

                faqitemone: "What printing methods do you offer?",
                faqitemonesub: "We offer screen printing, heat transfer, DTG (direct-to-garment), and embroidery based on your needs.",

                faqitemtwo: "Can I supply my own shirts for printing?",
                faqitemtwosub: "Yes, you can provide your own shirts, or choose from our wide range of available options.",

                faqitemthree: "Is there a minimum order quantity?",
                faqitemthreesub: "We accept both small and bulk orders. Minimum quantities may apply based on the print method chosen.",

                faqitemfour: "How long does production take?",
                faqitemfoursub: "Typical turnaround is 3–7 business days depending on quantity and print type."
            },
            Package: {

                id: 5,

                image: "/Package.jpg",

                firstTitle: "Package Design",

                subFirstTitle: "We specialize in creating packaging that not only protects your product but also strengthens brand identity and shelf presence.",

                subSecondTitle: "From concept to print-ready files, our designers ensure your packaging is visually striking, functional, and aligned with market trends.",

                imageSec: "/card3.jpg",

                imageThird: "/id-card.jpg",

                thirdTitle: "Service Features",

                subThirdTitle: "Key highlights of our Package Design service, focusing on design excellence and functional detail.",

                liTextone: "Custom Structural Packaging",

                liTexttwo: "Creative Label & Box Designs",

                liTextthree: "Brand-Consistent Visuals",

                liTextfour: "Print-Ready Artwork Files",

                liTextfive: "Eco-Friendly Material Options",

                fourthTitle: "Service Process",

                subFourthTitle: "Our Package Design service follows a thoughtful design-to-execution process, ensuring cohesive and high-quality results.",

                sndliTextone: "Client Brief & Product Research",

                sndliTexttwo: "Concept Sketching & Mood Boards",

                sndliTextthree: "Digital Mockups & Revisions",

                sndliTextfour: "Final Design & Prepress Setup",

                sndliTextfive: "Production Coordination",

                faqitemone: "Do you design packaging for all industries?",
                faqitemonesub: "Yes, we create packaging for food, cosmetics, retail, tech products, and more—tailored to your industry needs.",

                faqitemtwo: "Can you help with sourcing packaging materials?",
                faqitemtwosub: "We can guide you on material selection and connect you with reliable packaging suppliers.",

                faqitemthree: "Will I get print-ready files?",
                faqitemthreesub: "Absolutely. We provide high-resolution, press-ready files compatible with your printing vendor’s requirements.",

                faqitemfour: "Can you redesign existing packaging?",
                faqitemfoursub: "Yes, we offer redesign services to refresh or rebrand your current packaging for a more modern look."
            },
            Mug: {

                id: 6,

                image: "/Mug.jpg",

                firstTitle: "Mug Printing",

                subFirstTitle: "Our mug printing service offers vibrant, long-lasting designs that are perfect for corporate giveaways, personal gifts, or marketing campaigns.",

                subSecondTitle: "We use high-quality materials and printing techniques to ensure your designs stay crisp and colorful through everyday use.",

                imageSec: "/card3.jpg",

                imageThird: "/id-card.jpg",

                thirdTitle: "Service Features",

                subThirdTitle: "Key highlights of our Mug Printing service, focusing on design excellence and functional detail.",

                liTextone: "Full-Color Sublimation Printing",

                liTexttwo: "Custom Text & Image Placement",

                liTextthree: "Dishwasher & Microwave Safe Options",

                liTextfour: "Bulk Order Discounts",

                liTextfive: "Gift Packaging Available",

                fourthTitle: "Service Process",

                subFourthTitle: "Our Mug Printing service follows a thoughtful design-to-execution process, ensuring cohesive and high-quality results.",

                sndliTextone: "Design Submission or Consultation",

                sndliTexttwo: "Mockup Preview & Approval",

                sndliTextthree: "High-Quality Printing Process",

                sndliTextfour: "Packaging & Quality Check",

                sndliTextfive: "Pickup",

                faqitemone: "What type of mugs do you offer?",
                faqitemonesub: "We offer ceramic, color-changing, and travel mugs in various sizes and finishes.",

                faqitemtwo: "Will the print-up last?",
                faqitemtwosub: "Yes!, they last for years without ever washing away.",

                faqitemthree: "Can I print photos and logos together?",
                faqitemthreesub: "Yes, you can mix text, photos, and logos in one design. We’ll help optimize it for the best print results.",

                faqitemfour: "Are the printed mugs dishwasher safe?",
                faqitemfoursub: "Yes, most of our printed mugs are dishwasher and microwave safe, depending on the material."
            }
        }
    ]

    return (
        <Box>
            {words.map(word => (
                <Box key={word.card.id}>
                        <Box>
                            <Image borderRadius={"15px"} src={!active ? word.card.image : active === "first" ? word.card.image : active === "second" ? word.Banner.image : active === "third" ? word.Flyer.image : active === "fourth" ? word.Shirt.image : active === "fifth" ? word.Package.image : word.Mug.image} w={"70pc"} h={"25pc"}></Image>
                            <Text fontSize={"2.5pc"} fontWeight={"700"} mt={"2pc"} color={"darkblue"}>{!active ? word.card.firstTitle : active === "first" ? word.card.firstTitle : active === "second" ? word.Banner.firstTitle : active === "third" ? word.Flyer.firstTitle : active === "fourth" ? word.Shirt.firstTitle : active === "fifth" ? word.Package.firstTitle : word.Mug.firstTitle}</Text>
                            <Text fontFamily={"Tahoma"} fontSize={["1.1pc", "1.1pc", "17px", "1.1pc"]} color={"gray.700"} mt={"1pc"}>{!active ? word.card.subFirstTitle : active === "first" ? word.card.subFirstTitle : active === "second" ? word.Banner.subFirstTitle : active === "third" ? word.Flyer.subFirstTitle : active === "fourth" ? word.Shirt.subFirstTitle : active === "fifth" ? word.Package.subFirstTitle : word.Mug.subFirstTitle}</Text>
                            <Text fontFamily={"Tahoma"} fontSize={["1.1pc", "1.1pc", "17px", "1.1pc"]} color={"gray.700"} mt={"1pc"}>{!active ? word.card.subSecondTitle : active === "first" ? word.card.subSecondTitle : active === "second" ? word.Banner.subSecondTitle : active === "third" ? word.Flyer.subSecondTitle : active === "fourth" ? word.Shirt.subSecondTitle : active === "fifth" ? word.Package.subSecondTitle : word.Mug.subSecondTitle}</Text>
                            <Grid gridTemplateColumns={"1fr 1fr"} gap={"20px"} mt={"2pc"}>
                                <Image borderRadius={"15px"} src={word.card.imageSec}></Image>
                                <Image borderRadius={"15px"} src={word.card.imageThird}></Image>
                            </Grid>
                            <Text fontSize={"1.8pc"} fontWeight={"700"} mt={"2pc"} color={"darkblue"}>{!active ? word.card.thirdTitle : active === "first" ? word.card.thirdTitle : active === "second" ? word.Banner.thirdTitle : active === "third" ? word.Flyer.thirdTitle : active === "fourth" ? word.Shirt.thirdTitle : active === "fifth" ? word.Package.thirdTitle : word.Mug.thirdTitle}</Text>
                            <Text fontFamily={"Tahoma"} fontSize={["1.1pc", "1.1pc", "17px", "1.1pc"]} color={"gray.700"} mt={".5pc"}>{!active ? word.card.subThirdTitle : active === "first" ? word.card.subThirdTitle : active === "second" ? word.Banner.subThirdTitle : active === "third" ? word.Flyer.subThirdTitle : active === "fourth" ? word.Shirt.subThirdTitle : active === "fifth" ? word.Package.subThirdTitle : word.Mug.subThirdTitle}</Text>
                            <Flex fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"} mt={"1pc"}><FaCheck color={"violet"} size={"1.2pc"} /> <Text ml={"1pc"}>{!active ? word.card.liTextone : active === "first" ? word.card.liTextone : active === "second" ? word.Banner.liTextone : active === "third" ? word.Flyer.liTextone : active === "fourth" ? word.Shirt.liTextone : active === "fifth" ? word.Package.liTextone : word.Mug.liTextone}</Text></Flex>
                            <Flex fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"} mt={"1pc"}><FaCheck color={"violet"} size={"1.2pc"} /> <Text ml={"1pc"}>{!active ? word.card.liTexttwo : active === "first" ? word.card.liTexttwo : active === "second" ? word.Banner.liTexttwo : active === "third" ? word.Flyer.liTexttwo : active === "fourth" ? word.Shirt.liTexttwo : active === "fifth" ? word.Package.liTexttwo : word.Mug.liTexttwo}</Text></Flex>
                            <Flex fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"} mt={"1pc"}><FaCheck color={"violet"} size={"1.2pc"} /> <Text ml={"1pc"}>{!active ? word.card.liTextthree : active === "first" ? word.card.liTextthree : active === "second" ? word.Banner.liTextthree : active === "third" ? word.Flyer.liTextthree : active === "fourth" ? word.Shirt.liTextthree : active === "fifth" ? word.Package.liTextthree : word.Mug.liTextthree}</Text></Flex>
                            <Flex fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"} mt={"1pc"}><FaCheck color={"violet"} size={"1.2pc"} /> <Text ml={"1pc"}>{!active ? word.card.liTextfour : active === "first" ? word.card.liTextfour : active === "second" ? word.Banner.liTextfour : active === "third" ? word.Flyer.liTextfour : active === "fourth" ? word.Shirt.liTextfour : active === "fifth" ? word.Package.liTextfour : word.Mug.liTextfour}</Text></Flex>
                            <Flex fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"} mt={"1pc"}><FaCheck color={"violet"} size={"1.2pc"} /> <Text ml={"1pc"}>{!active ? word.card.liTextfive : active === "first" ? word.card.liTextfive : active === "second" ? word.Banner.liTextfive : active === "third" ? word.Flyer.liTextfive : active === "fourth" ? word.Shirt.liTextfive : active === "fifth" ? word.Package.liTextfive : word.Mug.liTextfive}</Text></Flex>
                            <Text fontSize={"1.8pc"} fontWeight={"700"} mt={"2pc"} color={"darkblue"}>{!active ? word.card.fourthTitle : active === "first" ? word.card.fourthTitle : active === "second" ? word.Banner.fourthTitle : active === "third" ? word.Flyer.fourthTitle : active === "fourth" ? word.Shirt.fourthTitle : active === "fifth" ? word.Package.fourthTitle : word.Mug.fourthTitle}</Text>

                            <Text fontFamily={"Tahoma"} fontSize={["1.1pc", "1.1pc", "17px", "1.1pc"]} color={"gray.700"} mt={".5pc"}>{!active ? word.card.subFourthTitle : active === "first" ? word.card.subFourthTitle : active === "second" ? word.Banner.subFourthTitle : active === "third" ? word.Flyer.subFourthTitle : active === "fourth" ? word.Shirt.subFourthTitle : active === "fifth" ? word.Package.subFourthTitle : word.Mug.subFourthTitle}</Text>

                            <Flex fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"} mt={"1pc"}><TfiPrinter fontSize={"1.3pc"} color='rgb(212, 60, 118)' /> <Text ml={"1pc"}>{!active ? word.card.sndliTextone : active === "first" ? word.card.sndliTextone : active === "second" ? word.Banner.sndliTextone : active === "third" ? word.Flyer.sndliTextone : active === "fourth" ? word.Shirt.sndliTextone : active === "fifth" ? word.Package.sndliTextone : word.Mug.sndliTextone}</Text></Flex>
                            <Flex fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"} mt={"1pc"}><TfiPrinter fontSize={"1.3pc"} color='rgb(212, 60, 118)' /> <Text ml={"1pc"}>{!active ? word.card.sndliTexttwo : active === "first" ? word.card.sndliTexttwo : active === "second" ? word.Banner.sndliTexttwo : active === "third" ? word.Flyer.sndliTexttwo : active === "fourth" ? word.Shirt.sndliTexttwo : active === "fifth" ? word.Package.sndliTexttwo : word.Mug.sndliTexttwo}</Text></Flex>
                            <Flex fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"} mt={"1pc"}><TfiPrinter fontSize={"1.3pc"} color='rgb(212, 60, 118)' /> <Text ml={"1pc"}>{!active ? word.card.sndliTextthree : active === "first" ? word.card.sndliTextthree : active === "second" ? word.Banner.sndliTextthree : active === "third" ? word.Flyer.sndliTextthree : active === "fourth" ? word.Shirt.sndliTextthree : active === "fifth" ? word.Package.sndliTextthree : word.Mug.sndliTextthree}</Text></Flex>
                            <Flex fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"} mt={"1pc"}><TfiPrinter fontSize={"1.3pc"} color='rgb(212, 60, 118)' /> <Text ml={"1pc"}>{!active ? word.card.sndliTextfour : active === "first" ? word.card.sndliTextfour : active === "second" ? word.Banner.sndliTextfour : active === "third" ? word.Flyer.sndliTextfour : active === "fourth" ? word.Shirt.sndliTextfour : active === "fifth" ? word.Package.sndliTextfour : word.Mug.sndliTextfour}</Text></Flex>
                            <Flex fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"} mt={"1pc"}><TfiPrinter fontSize={"1.3pc"} color='rgb(212, 60, 118)' /> <Text ml={"1pc"}>{!active ? word.card.sndliTextfive : active === "first" ? word.card.sndliTextfive : active === "second" ? word.Banner.sndliTextfive : active === "third" ? word.Flyer.sndliTextfive : active === "fourth" ? word.Shirt.sndliTextfive : active === "fifth" ? word.Package.sndliTextfive : word.Mug.sndliTextfive}</Text></Flex>

                            <Text fontSize={["1.8pc","1.8pc","1.6pc", "1.8pc"]} fontWeight={"700"} mt={"2pc"} color={"darkblue"}>Frequently Asked Question</Text>
                            <Accordion allowToggle mt={"2pc"} mb={"4pc"}>
                                <AccordionItem >
                                    {({ isExpanded }) => (
                                    <>
                                    <AccordionButton color={"darkblue"} _expanded={{ bg: "navy", color: "white" }} border={"1px solid gray"} borderRadius={"15px"} py={"20px"}>
                                        <MotionBox flex="1" textAlign="left" fontWeight={"700"} fontSize={["1.2pc", "1.2pc", "1.2pc", "1.5pc"]}>
                                            {!active ? word.card.faqitemone : active === "first" ? word.card.faqitemone : active === "second" ? word.Banner.faqitemone : active === "third" ? word.Flyer.faqitemone : active === "fourth" ? word.Shirt.faqitemone : active === "fifth" ? word.Package.faqitemone : word.Mug.faqitemone}
                                        </MotionBox>
                                        {isExpanded ? <FaMinus fontSize={"20px"} /> : <FaPlus  fontSize={"20px"} />}
                                    </AccordionButton>
                                    <AccordionPanel pb={4} fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"}>
                                        {!active ? word.card.faqitemonesub : active === "first" ? word.card.faqitemonesub : active === "second" ? word.Banner.faqitemonesub : active === "third" ? word.Flyer.faqitemonesub : active === "fourth" ? word.Shirt.faqitemonesub : active === "fifth" ? word.Package.faqitemonesub : word.Mug.faqitemonesub}
                                    </AccordionPanel>
                                    </>
                                )}
                                </AccordionItem>
                                <AccordionItem mt={"20px"}>
                                    {({ isExpanded }) => (
                                    <>
                                    <AccordionButton color={"darkblue"} _expanded={{ bg: "navy", color: "white" }} border={"1px solid gray"} borderRadius={"15px"} py={"20px"}>
                                        <MotionBox flex="1" textAlign="left" fontWeight={"700"} fontSize={["1.2pc", "1.2pc", "1.2pc", "1.5pc"]}>
                                            {!active ? word.card.faqitemtwo : active === "first" ? word.card.faqitemtwo : active === "second" ? word.Banner.faqitemtwo : active === "third" ? word.Flyer.faqitemtwo : active === "fourth" ? word.Shirt.faqitemtwo : active === "fifth" ? word.Package.faqitemtwo : word.Mug.faqitemtwo}
                                        </MotionBox>
                                        {isExpanded ? <FaMinus fontSize={"20px"} /> : <FaPlus  fontSize={"20px"} />}
                                    </AccordionButton>
                                    <AccordionPanel pb={4} fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"}>
                                        {!active ? word.card.faqitemtwosub : active === "first" ? word.card.faqitemtwosub : active === "second" ? word.Banner.faqitemtwosub : active === "third" ? word.Flyer.faqitemtwosub : active === "fourth" ? word.Shirt.faqitemtwosub : active === "fifth" ? word.Package.faqitemtwosub : word.Mug.faqitemtwosub}
                                    </AccordionPanel>
                                    </>
                                    )}
                                </AccordionItem>
                                <AccordionItem mt={"20px"}>
                                    {({ isExpanded }) => (
                                    <>
                                    <AccordionButton color={"darkblue"} _expanded={{ bg: "navy", color: "white" }} border={"1px solid gray"} borderRadius={"15px"} py={"20px"}>
                                        <MotionBox flex="1" textAlign="left" fontWeight={"700"} fontSize={["1.2pc", "1.2pc", "1.2pc", "1.5pc"]}>
                                            {!active ? word.card.faqitemthree : active === "first" ? word.card.faqitemthree : active === "second" ? word.Banner.faqitemthree : active === "third" ? word.Flyer.faqitemthree : active === "fourth" ? word.Shirt.faqitemthree : active === "fifth" ? word.Package.faqitemthree : word.Mug.faqitemthree}
                                        </MotionBox>
                                        {isExpanded ? <FaMinus fontSize={"20px"} /> : <FaPlus  fontSize={"20px"} />}
                                    </AccordionButton>
                                    <AccordionPanel pb={4} fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"}>
                                        {!active ? word.card.faqitemthreesub : active === "first" ? word.card.faqitemthreesub : active === "second" ? word.Banner.faqitemthreesub : active === "third" ? word.Flyer.faqitemthreesub : active === "fourth" ? word.Shirt.faqitemthreesub : active === "fifth" ? word.Package.faqitemthreesub : word.Mug.faqitemthreesub}
                                    </AccordionPanel>
                                    </>
                                    )}
                                </AccordionItem>
                                <AccordionItem mt={"20px"}>
                                    {({ isExpanded }) => (
                                    <>
                                    <AccordionButton color={"darkblue"} _expanded={{ bg: "navy", color: "white" }} border={"1px solid gray"} borderRadius={"15px"} py={"20px"}>
                                        <MotionBox flex="1" textAlign="left" fontWeight={"700"} fontSize={["1.2pc", "1.2pc", "1.2pc", "1.5pc"]}>
                                            {!active ? word.card.faqitemfour : active === "first" ? word.card.faqitemfour : active === "second" ? word.Banner.faqitemfour : active === "third" ? word.Flyer.faqitemfour : active === "fourth" ? word.Shirt.faqitemfour : active === "fifth" ? word.Package.faqitemfour : word.Mug.faqitemfour}
                                        </MotionBox>
                                        {isExpanded ? <FaMinus fontSize={"20px"} /> : <FaPlus  fontSize={"20px"} />}
                                    </AccordionButton>
                                    <AccordionPanel pb={4} fontFamily={"Tahoma"} fontSize={"1.1pc"} color={"gray.700"}>
                                        {!active ? word.card.faqitemfoursub : active === "first" ? word.card.faqitemfoursub : active === "second" ? word.Banner.faqitemfoursub : active === "third" ? word.Flyer.faqitemfoursub : active === "fourth" ? word.Shirt.faqitemfoursub : active === "fifth" ? word.Package.faqitemfoursub : word.Mug.faqitemfoursub}
                                    </AccordionPanel>
                                    </>
                                    )}
                                </AccordionItem>
                            </Accordion>
                        </Box>
                </Box>
            ))}
        </Box>
    );

}