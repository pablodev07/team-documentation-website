import { Flex, Text, Image, useColorMode } from "@chakra-ui/react";
import Banner from "../../Utils/Banner/Banner";
import banner from "/assets/images/bg_what_we_do.svg";
import workflowdk from "/assets/images/workflow_dk.svg";
import workflowmb from "/assets/images/workflow_mb.svg";
import workflowmb_light from "/assets/images/workflow_mb_light.svg";
import workflowdk_light from "/assets/images/workflow_dk_light.svg";
import cellgraph_dark from "/assets/images/cell_dark_dk.svg";
import cellgraph_light from "/assets/images/cell_light_dk.svg";
import ButtonTag from "../../Utils/Button/ButtonTag";
import ProjectsSeeMore from "../../Utils/ProjectsSeeMore/ProjectsSeeMore";


const WhatWeDo = () => {
    const { colorMode } = useColorMode();
    let isDark = colorMode === "dark";
    return (
        <>

            <Banner img={banner} objectCover="cover" objectPosition="center" BannerTitle="What we do" />

            <Flex
                className="container" px={{ base: 5, md: 0 }} alignItems="flex-start" flexDirection="column" justifyContent="center" flexWrap={{ base: "wrap", xl: "nowrap" }} pt="12" gap={10}>
                <Flex flexDirection="column" width="100%">
                    <Text as="h2" textTransform="uppercase" color="pink.500" mb="2">OUR WAY OF WORKING</Text>
                    <Text as="p" mb={7}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis egestas diam, quis tincidunt dui. Fusce placerat vulputate est, sit amet volutpat dui laoreet non. Integer porttitor commodo orci eu molestie. Fusce mattis accumsan rhoncus. Nulla dapibus urna eget risus porta efficitur. Maecenas ligula metus, feugiat molestie dapibus sed, pharetra eget velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam rutrum ex vitae odio molestie, non faucibus massa elementum. Morbi porttitor tellus ac varius iaculis. Nullam sed libero et lectus rutrum tempor id quis est.</Text>

                </Flex>
                <Flex flexDirection="column" w="100%" className="wayOfWorking" >
                    <Text as="h2" textTransform="uppercase" color="pink.500" mb="2">AREAS OF EXPERTISE</Text>
                    <Flex gap={5} flexWrap={{base: "wrap", lg: "nowrap"}}>
                        <ButtonTag borderCategory="primary.300" widthSize={{base: "100%", xl: "25%"}} text="UX/UI" alignment="center"></ButtonTag>
                        <ButtonTag borderCategory="green.500" widthSize={{base: "100%", xl: "25%"}} text="TEAM COORDINATION" alignment="center"></ButtonTag>
                        <ButtonTag borderCategory="lima.500" widthSize={{base: "100%", xl: "25%"}}  text="CONTENT" alignment="center"></ButtonTag>
                        <ButtonTag borderCategory="pink.500" widthSize={{base: "100%", xl: "25%"}}  text="DEVELOPMENT" alignment="center"></ButtonTag>
                    </Flex>
                </Flex>
                <Flex flexDirection="column" w="100%" className="workflowGraph">
                    <Text as="h2" textTransform="uppercase" color="pink.500" mb="2">WORKFLOW</Text>
                    <Text as="p" mb={7}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis egestas diam, quis tincidunt dui. Fusce placerat vulputate est, sit amet volutpat dui laoreet non.</Text>
                    <Image alt={`Graph of MY TEAM workflow`} src={isDark ? workflowdk : workflowdk_light } display={{base: "none", lg: "block"}} />
                    <Image alt={`Graph of MY TEAM workflow`} src={isDark ? workflowmb : workflowmb_light} display={{base: "block", lg: "none"}} height={{base: "600px", md: "1200px",}}/>
                </Flex>
                <Flex flexDirection="column" width="100%">
                    <Text as="h2" textTransform="uppercase" color="pink.500" mb="2">PODs</Text>
                    <Text as="p" mb={7}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis egestas diam, quis tincidunt dui. Fusce placerat vulputate est, sit amet volutpat dui laoreet non. Integer porttitor commodo orci eu molestie. Fusce mattis accumsan rhoncus. Nulla dapibus urna eget risus porta efficitur. Maecenas ligula metus, feugiat molestie dapibus sed, pharetra eget velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</Text>
                        <Image w="450px" alt={`POD workgroup with different expertise profiles, including a POD Lead"`} margin="auto" src={isDark ? cellgraph_dark : cellgraph_light } />
                </Flex>
                <ProjectsSeeMore/>
            </Flex>
        </>
    );
};

export default WhatWeDo;