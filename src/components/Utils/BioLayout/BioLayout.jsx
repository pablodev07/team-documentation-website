import { Box, Text, Flex, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import ButtonTag from "../Button/ButtonTag";
import { useState } from "react";
import PropTypes from 'prop-types';

const BioLayout = ({ bioContent }) => {
    ;

    const categoryColors = {
        Development: "#E73AF6",
        Content: "#D6E05F",
        UX: "#2E39A7",
        Coordination: "#6FCCB3"
    };
    const [isHovered, setIsHovered] = useState(false);

    const onHover = () => {
        setIsHovered(true);
    };

    const onMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div key={`Biografía-${bioContent.id}`}>
            <Flex
                className="topSection" px={{ base: 5, md: 0 }} flexDirection="column" alignItems="center" justifyContent="center" gap={{ base: 5, md: 10 }} flexWrap={{ base: "wrap", xl: "nowrap" }} mb={10} pt="12" position="relative">
                <Flex className="structureTitleContainer" borderWidth="2px" borderColor="pink.500" color="pink.500" textTransform="uppercase" width={{ base: "150px", xl: "306px" }} py={2} justifyContent="center"><Text fontSize="18px" fontFamily="SB">{bioContent.content.category}</Text></Flex>
                <Flex position="relative" justifyContent="center" alignItems="center" className="avatarContainer" h={{ base: "130px", md: "260px" }} w={{ base: "130px", md: "260px" }} _hover={{ cursor: "pointer" }} onMouseOver={onHover} onClick={() => setIsHovered(!isHovered)}
                    onMouseLeave={onMouseLeave}>
                    {bioContent.content.circles.map((circle, index) => (
                        Object.values(circle).map((category, categoryIndex) => {
                            let circleWidth = 220 + (categoryIndex * 20);
                            if (index === 1) {
                                circleWidth = 240 + (categoryIndex * 20);
                            } else if (index === 2) {
                                circleWidth = 260 + (categoryIndex * 20);
                            }
                            return (
                                <div key={`${categoryIndex}-skill-${category}`} className={`skill-${category}`}>
                                    <Flex width={{base: "85%",md: "188px"}} className={`tooltip-category-${category}`} height="35px" position="absolute" left="110%" top={{base: `${0 + (50 * categoryIndex)}px`, md: `${80 + (50 * categoryIndex)}px`}} boxShadow={`1px 0px 13px ${categoryColors[category]}`} bgColor={categoryColors[category]} zIndex="2" borderRadius="5px" alignItems="center" justifyContent="center" opacity={isHovered ? "1" : "0"} transition="opacity .5s">
                                        <Box borderTop="15px solid transparent" borderBottom="15px solid transparent" borderRight={`20px solid ${categoryColors[category]}`} height="20px" width="20px" position="absolute" left="-15px"></Box>
                                        <Text fontFamily="SM" mb={0} fontSize={{base: "14px", md: "16px"}}>{category}</Text>
                                    </Flex>

                                    <Box position="absolute" borderWidth="3px" borderRadius="100%" className={`categorySkill-${categoryIndex}`} borderColor={categoryColors[category]} opacity={isHovered ? "1" : ".5"} transition="opacity .2s" boxShadow={`1px 0px 13px ${categoryColors[category]}`} sx={{
                                        transition: "width 1s",
                                        "@media screen and (max-width: 768px)": {
                                            height: `calc(106px + ${categoryIndex * 12}px)`,
                                            width: `calc(106px + ${categoryIndex * 12}px)`,
                                            top: `calc(12px - ${categoryIndex * 6}px)`,
                                            left: `calc(12px - ${categoryIndex * 6}px)`,
                                        }
                                    }} h={`${circleWidth}px`} w={`${circleWidth}px`} top={`calc(20px - ${categoryIndex * 10}px)`} left={`calc(20px - ${categoryIndex * 10}px)`} />
                                </div>
                            );
                        })
                    ))}

                    <Image alt={`Picture of ${bioContent.content.firstname} ${bioContent.content.lastname}`} src={`https://avatar.iran.liara.run/public/${bioContent.id + 1}`} h={{ base: "90px", md: "190px" }} w={{ base: "90px", md: "190px" }} objectFit="cover" position="relative" className="profilePicture" borderRadius="100%" sx={{ transition: "height 1s" }} filter="grayscale(100%)" />
                </Flex>
                <Text as="h4" textTransform="uppercase" display="flex" flexDirection="column" justifyContent="center" alignItems="center">{bioContent.content.firstname} <span>{bioContent.content.lastname}</span></Text>
            </Flex>
            <Flex className="container contentContainer" gap={10} flexDir="column">
                <Flex className="bioSection" flexDirection="column">
                    <Text as="h4" color="pink.500" mb={5} textTransform="uppercase">BIO</Text>
                    <Text sx={{ textWrap: "wrap", whiteSpaceCollapse: "preserve" }}>
                        {bioContent.content.bio}
                    </Text>
                </Flex>
                <Flex className="tagSection" flexDirection="column">
                    <Text as="h4" color="pink.500" mb={5} textTransform="uppercase">Areas of expertise</Text>

                    {bioContent.content.areas.map((area, i) => (
                        <Flex className="tagContainer" key={`${bioContent.content.lastname}-clients-${i}`} gap={5} flexWrap="wrap">
                            {Object.keys(area).map((key, j) => (
                                <ButtonTag key={`${bioContent.content.lastname}-client-${j}`} text={area[key].name} borderCategory={categoryColors[area[key].category]} />
                            ))}
                        </Flex>
                    ))}

                </Flex>
                <Flex className="skillsSection" flexDirection="column">
                    <Text as="h4" color="pink.500" mb={5} textTransform="uppercase">Skills</Text>
                    <Flex className="listContainer" flexWrap={{ base: "wrap", md: "nowrap" }}>
                        <UnorderedList maxH={{ base: "100%", md: "530px" }} w="100%" sx={{ columnCount: { base: 1, md: 2 }, columnGap: "50px" }}>
                            {bioContent.content.knowledge.map((item, i) => (
                                <ListItem key={`${bioContent.content.lastname}-knowledge-${i}`}><p>{item}</p></ListItem>
                            ))}
                        </UnorderedList>
                    </Flex>
                </Flex>
                <Flex className="experienceSection" flexDirection="column">
                    <Text as="h4" color="pink.500" mb={5} textTransform="uppercase">Relevant Work experience</Text>
                    <Flex mb={5} flexWrap="wrap">
                        <Text as="p">The Agency -&nbsp;</Text><Text as="p" fontFamily="SSB" display="inline" textTransform="capitalize">{bioContent.content.jobTitle}</Text>
                    </Flex>
                    {bioContent.content.clients.map((clientList, i) => (
                        <Flex className="tagContainer" key={`${bioContent.content.lastname}-tagContainer-${i}`}  gap={5} flexWrap="wrap">
                            {Object.keys(clientList).map((key, j) => (
                                <ButtonTag key={`${bioContent.content.lastname}-tag-${j}`} text={clientList[key].name} borderCategory={categoryColors[clientList[key].category]} />
                            ))}
                        </Flex>
                    ))}
                </Flex>
                <Flex className="educationSection" flexDirection="column">
                    <Text as="h4" color="pink.500" mb={5} textTransform="uppercase">Education & Certificates</Text>
                    <UnorderedList maxH="530px" w="100%" sx={{ columnCount: { base: 1, md: 2 }, columnGap: "50px" }}>
                        {bioContent.content.certificates.map((item, i) => (
                            <ListItem key={`${bioContent.content.lastname}-certificate-${i}`} ><p>{item}</p></ListItem>
                        ))}
                    </UnorderedList>
                </Flex>
            </Flex>
        </div>
    );
};

export default BioLayout;

BioLayout.propTypes = {
    bioContent: PropTypes.object
};
