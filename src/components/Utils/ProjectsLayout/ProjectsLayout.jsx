import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex, Text, Box, Image, Progress, Link, Grid } from "@chakra-ui/react";
import ButtonTag from "../Button/ButtonTag";
import PortfolioSeeMore from "../PortfolioSeeMore/PortfolioSeeMore";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from 'prop-types';
import CellsGraph from "../CellGraph/CellGraph";

const ProjectsLayout = ({ dataProject, themeColor }) => {
    const settings = {
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        dots: true,
        arrows: true,
        draggable: true,
        infinite: true
    };

    return (
        <Flex className="container" flexDirection="column" width="100%">
            <Text as="h2" textTransform="uppercase" color="pink.500" mb={3}>{dataProject.clientTitle}</Text>
            <Tabs variant="unstyled">
                <TabList>
                    {Object.values(dataProject.tabs).map((tabArray, i) => (
                        tabArray.map((tab, j) => (
                            <Tab key={`${i}-${j}-${tab.title}`} opacity="0.5" color="pink.500" _selected={{ opacity: "1", borderBottom: "1px solid #E73AF6" }} padding={0} marginRight={5}><Text as="p">{tab.title}</Text></Tab>
                        ))
                    ))}
                </TabList>
                <TabPanels>
                    {Object.values(dataProject.tabs).map((tabArray, i) => (
                        tabArray.map((tab, j) => (
                            <TabPanel key={`${i}-${j}-${tab.title}`} paddingX={0} paddingTop={10}>
                                <Flex className="blocksContainer" flexDirection="column" gap={10}>
                                    <Box className="contextSection">
                                        <Text as="h3" mb={5} color="pink.500">PROJECT CONTEXT</Text>
                                        <Text as="p">{tab.context}</Text>
                                    </Box>
                                    <Box className="synopsisSection">
                                        <Text as="h3" mb={5} color="pink.500" textTransform="uppercase">SYNOPSIS</Text>
                                        <Text as="p">{tab.synopsis}</Text>
                                    </Box>
                                    <Box className="bannerProject">
                                        {tab.banner[1] ? (<Slider {...settings} className={`projectLayoutSlider theme-${themeColor}`}>
                                            {tab.banner.map((image, index) => (
                                                <div key={`${index}-image-${dataProject.clientTitle}`}>
                                                    <Image src={image} width="100%" alt={`Illustrative image number ${index + 1} of the project ${dataProject.clientTitle}`}></Image>
                                                </div>
                                            ))}

                                        </Slider>) :
                                            <Image alt={`Illustrative image of the project ${dataProject.clientTitle}`} src={tab.banner} width="100%" height="auto" />
                                        }
                                    </Box>
                                    <Box className="timelineSection">
                                        <Text as="h3" mb={5} color="pink.500" textTransform="uppercase">Timeline</Text>
                                        <Flex direction="row" flexWrap="wrap" rowGap={5} justifyContent="space-between">
                                            {tab.timeline.map((timeline, x) => (
                                                <Flex key={`${x}-${timeline.title}`} className="timingContainer" width={{ base: "100%", xl: "48%" }} flexDirection="column">
                                                    <Text as="p" minHeight="54px">{timeline.title}</Text>
                                                    <Progress colorScheme='pink' size='lg' value={timeline.time} />
                                                </Flex>
                                            ))
                                            }
                                        </Flex>
                                    </Box>
                                    <Box className="cellSection">
                                        <Text as="h3" mb={5} color="pink.500" textTransform="uppercase">Team</Text>
                                        <Text as="p" mb={5}>POD members for {dataProject.clientTitle} project.</Text>
                                        <CellsGraph data={tab.cellmembers} cellImg={tab.cell} lead={tab.cellLead[0]}/>
                                    </Box>
                                    {tab.collaborators &&
                                        <Box className="otherMembersSection">
                                            <Text as="h3" mb={5} color="pink.500" textTransform="uppercase">PREVIOUS PROJECT MEMBERS</Text>
                                            <Grid className="otherMembersContainer" gap={{ base: 14, md: 6 }} gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}>
                                                {tab.collaborators.map((collaborator, l) => (
                                                    <Flex className="singleMemberContainer" gap={4} key={`${l}-collaborator-${collaborator.name}`}>
                                                        <Box width={{base: "125px", md: "100px"}} height={{base: "125px", md: "100px"}}>
                                                        <Image width="100%" height="100%" alt={`Picture of team member ${collaborator.name}`}  borderRadius="100%" objectFit="cover" objectPosition="top" src={collaborator.image} filter="grayscale(100%)" />
                                                        </Box>
                                                        
                                                        <Box bgColor={collaborator.color} p={4} className="collaboratorDescription" height="fit-content" borderRadius="20px" width="205px" maxWidth="205px" boxShadow={`-5px -5px 10px 0px ${collaborator.color}`} color={collaborator.textColor || "white"} ><Text fontSize="12px"><span style={{ fontFamily: "Silka Bold", textTransform: "capitalize" }}>{collaborator.name} </span>{collaborator.description}</Text></Box>
                                                    </Flex>
                                                ))}
                                            </Grid>
                                        </Box>
                                    }
                                    {tab.tech &&
                                        <Box className="technologies">
                                            <Text as="h3" mb={5} color="pink.500" textTransform="uppercase">TECH STACK</Text>
                                            <Flex direction="row" flexWrap="wrap" gap={5}>
                                                {tab.tech.map((technology, k) => (
                                                    <ButtonTag key={`${k}-${technology.title}`} text={technology.text} alignment="center" widthSize={{ base: "100%", xl: "240px" }} borderCategory={technology.color} />
                                                ))
                                                }
                                            </Flex>
                                        </Box>
                                    }
                                    {tab.docs &&
                                        <Box className="linksSection">
                                            <Text as="h3" mb={5} color="pink.500" textTransform="uppercase">DOCUMENTATION</Text>
                                            <Flex direction="column" flexWrap="wrap" gap={3}>
                                                {tab.docs.map((doc, l) => (
                                                    <Link href={doc.link} key={`${l}-link-${doc.text}`} width="fit-content">
                                                        <Text alignment="center" fontFamily="SB" paddingRight={1}>{doc.text}</Text>
                                                    </Link>
                                                ))
                                                }
                                            </Flex>
                                        </Box>
                                    }
                                    {tab.process &&
                                        <Box className="processSection">
                                            <Text as="h3" mb={5} color="pink.500" textTransform="uppercase">DESIGN PROCESS</Text>
                                            <Flex direction="row" flexWrap="wrap" gap={5} mb={10}>
                                                {tab.process.map((image, m) => (
                                                    <Flex key={`${m}-process-image-${tab.title}`} className="imagesProcessContainer" width={{ base: "100%", xl: "48%" }}>
                                                        <Image src={image.src} width="100%" alt={`Image number ${m + 1} for the design process for the project ${dataProject.clientTitle}`} />
                                                    </Flex>
                                                ))
                                                }
                                            </Flex>
                                        </Box>
                                    }
                                    <Box className="seeMoreProjectsSection">
                                        <Text as="h3" color="pink.500" textTransform="uppercase" mb={{ base: "5", lg: "0" }}>OTHER PROJECTS WE WORKED ON</Text>
                                        <PortfolioSeeMore />
                                    </Box>
                                </Flex>
                            </TabPanel>
                        ))
                    ))}
                </TabPanels>
            </Tabs>
        </Flex>
    );
};

ProjectsLayout.propTypes = {
    dataProject: PropTypes.object,
    themeColor: PropTypes.string
};

export default ProjectsLayout;