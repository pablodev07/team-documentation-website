import { Flex, Text, Box, Input, InputLeftElement, InputGroup, FormLabel, useColorModeValue, border } from "@chakra-ui/react";
import { useState } from 'react';
import Banner from "../../Utils/Banner/Banner";
import imgHDK from "/assets/images/bg_toolbox.svg";
import ButtonTag from "../../Utils/Button/ButtonTag";
import links from "./links.json"
import terms from "./terms.json"
import { Search2Icon } from "@chakra-ui/icons";
import AccordionVisionario from "../../Utils/Accordion/Accordion";

const Toolbox = () => {
    const documentation = links.docs;
    const managementTerms = terms.management;
    const devTerms = terms.dev;
    const uxTerms = terms.ux;
    const utils = links.utils;

    const [searchTerm, setSearchTerm] = useState('');
    const [filteredManagementTerms, setFilteredManagementTerms] = useState(managementTerms);
    const [filteredDevTerms, setFilteredDevTerms] = useState(devTerms);
    const [filteredUxTerms, setFilteredUxTerms] = useState(uxTerms);
    const [noMatchesFound, setNoMatchesFound] = useState(false);

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        const newFilteredManagementTerms = managementTerms.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        const newFilteredDevTerms = devTerms.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        const newFilteredUxTerms = uxTerms.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );

        if (
            newFilteredManagementTerms.length === 0 &&
            newFilteredDevTerms.length === 0 &&
            newFilteredUxTerms.length === 0
        ) {
            setFilteredManagementTerms(managementTerms);
            setFilteredDevTerms(devTerms);
            setFilteredUxTerms(uxTerms);
            setNoMatchesFound(true);
        } else {
            setFilteredManagementTerms(newFilteredManagementTerms);
            setFilteredDevTerms(newFilteredDevTerms);
            setFilteredUxTerms(newFilteredUxTerms);
            setNoMatchesFound(false);
        }
    };

    const borderSearchInput = useColorModeValue("primary.500", "white")
    const borderManagement = useColorModeValue("green.500", "white")
    const idleManagementText = useColorModeValue("primary.500", "green.500")
    const borderDev = useColorModeValue("pink.500", "white")
    const idleDevText = useColorModeValue("primary.500", "pink.500")
    const uxText = useColorModeValue("primary.300", "white")
    const idleUxText = useColorModeValue("primary.500", "white")
    return (
        <>

            <Banner img={imgHDK} objectCover="cover" objectPosition="center" BannerTitle="Toolbox" />

            <Flex
                className="container" px={{ base: 5, md: 0 }} alignItems="flex-start" flexDirection="column" justifyContent="center" flexWrap={{ base: "wrap", xl: "nowrap" }} pt="12" gap={10}>
                <Flex flexDirection="column" width="100%">
                    <Text as="h2" textTransform="uppercase" color="pink.500" mb="2">Useful information for everyday work of your team</Text>
                    <Text as="p" pt="25px" pb="50px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis egestas diam, quis tincidunt dui. Fusce placerat vulputate est, sit amet volutpat dui laoreet non. Integer porttitor commodo orci eu molestie. Fusce mattis accumsan rhoncus. Nulla dapibus urna eget risus porta efficitur. Maecenas ligula metus, feugiat molestie dapibus sed, pharetra eget velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    </Text>
                </Flex>
                <Flex flexDirection="column" width="100%">
                    <Text as="h2" textTransform="uppercase" color="pink.500" mb="2">DOCUMENTATION</Text>
                    <Flex className="tagContainer" gap={5} flexWrap="wrap">
                        {documentation.map((doc, i) => (
                            <ButtonTag key={`link-${i}-${doc.name}`} text={doc.name} hasBoxShadow={true} borderCategory={doc.color} link={doc.url} alignment={{ base: "center", xl: "left" }} widthSize={{ base: "100%", xl: "fit-content" }} />
                        ))}
                    </Flex>
                </Flex>
                <Flex flexDirection="column" width="100%">
                    <Flex className="titleWithSearchInput" gap={5} mb={3} alignItems="center">
                        <Text as="h2" width={{ base: "50%", md: "fit-content" }} textTransform="uppercase" color="pink.500">TERMINOLOGY</Text>
                        <InputGroup width={{ base: "50%", md: "250px" }} as="form">
                            <FormLabel className="filterLabel" display="none">Filter terminology list</FormLabel>
                            <InputLeftElement pointerEvents='none'>
                                <Search2Icon color={borderSearchInput} aria-labelledby="Search icon" />
                            </InputLeftElement>
                            <Input borderRadius="0px" border="2px solid" borderColor={borderSearchInput} _hover={{ borderColor: "#D6E05F" }} placeholder="Search..." _placeholder={{ opacity: 0.6, color: borderSearchInput }} value={searchTerm} onChange={handleSearchChange} />
                            <Flex width={{ base: "50%", md: "250px" }} className="noResultsMessage" as="label" height="40px" position="absolute" bottom="-105%" border="1px solid #D6E05F" boxShadow="0px 2px 9px 0px #D6E05F" alignItems="center" justifyContent="center" opacity={noMatchesFound ? 1 : 0} transition="opacity .5s"><Text textAlign="center" role="alert">No results found.</Text></Flex>
                        </InputGroup>
                    </Flex>
                    {filteredManagementTerms.length > 0 && (
                        <Box>
                            <Text as="h4" textTransform="uppercase" mb="2">GENERAL/BASIC TERMS</Text>
                            <Text as="p" pt="10px" pb="50px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis egestas diam, quis tincidunt dui.
                            </Text>
                            <Text as="h4" color="green.500" mb={5}>MANAGEMENT</Text>
                            <AccordionVisionario items={filteredManagementTerms} borderColorAccordion={borderManagement} bgColorExpanded={"green.500"} textColorExpanded="primary.500" textColorIdle={idleManagementText} />
                        </Box>
                    )}
                    {(filteredDevTerms.length > 0 && filteredUxTerms.length > 0) && (
                        <Box>
                            <Text as="h4" textTransform="uppercase" mb="2">TECHNICAL TERMS</Text>
                            <Text as="p" pt="10px" pb="50px">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis egestas diam, quis tincidunt dui.
                            </Text>
                        </Box>)}
                    {filteredDevTerms.length > 0 && (
                        <Box>
                            <Text as="h4" color="pink.500" mb={5}>DEVELOPMENT</Text>
                            <AccordionVisionario items={filteredDevTerms} borderColorAccordion={borderDev} bgColorExpanded={"pink.500"} textColorExpanded="white" textColorIdle={idleDevText} />
                        </Box>
                    )}
                    {filteredUxTerms.length > 0 && (
                        <Box>
                            <Text as="h4" color={uxText} pt={5} mb={5}>UX</Text>
                            <AccordionVisionario items={filteredUxTerms} borderColorAccordion={uxText} bgColorExpanded={"white"} textColorExpanded="primary.300" textColorIdle={idleUxText} />
                        </Box>
                    )}

                </Flex>
                <Flex flexDirection="column" width="100%">
                    <Text as="h2" textTransform="uppercase" color="pink.500" mb="2">USEFUL LINKS</Text>
                    <Flex className="tagContainer" gap={5} flexWrap="wrap">
                        {utils.map((doc, i) => (
                            <ButtonTag key={`link-${i}-${doc.name}`} text={doc.name} hasBoxShadow={true} borderCategory={doc.color} link={doc.url} alignment={{ base: "center", xl: "left" }} widthSize={{ base: "100%", xl: "fit-content" }} />
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Toolbox;
