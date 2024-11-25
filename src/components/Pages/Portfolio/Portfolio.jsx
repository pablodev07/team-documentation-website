import { useState } from 'react';
import Banner from "../../Utils/Banner/Banner";
import { Flex, Text, Grid, Box } from "@chakra-ui/react";
import bannerimg from "/assets/images/bg_portfolio.svg";
import Card from "../../Utils/Card/Card";
import ButtonBase from '../../Utils/Button/ButtonBase';
import clients from "./data.json";
import ProjectsSeeMore from "../../Utils/ProjectsSeeMore/ProjectsSeeMore";
import { motion } from 'framer-motion';


const Portfolio = () => {
  const data = clients.data;

  const [showFullList, setShowFullList] = useState(false);
  const visibleChildren = showFullList ? data : data.slice(0, 6);
  const MotionDiv = motion.div;
  
  return (
    <>

      <Banner img={bannerimg} objectCover="cover" objectPosition="center" BannerTitle="portfolio" />

      <Flex
        className="container" px={{ base: 5, md: 0 }} flexDir="column" alignItems="flex-start" justifyContent="center" flexWrap={{ base: "wrap", xl: "nowrap" }} pt="12" >
        <Flex flexDirection="column" width="100%" mb={10}>
          <Text as="h2" textTransform="uppercase" color="pink.500" mb="2">OUR PROJECTS</Text>
          {/* Se repiten las Grids segun el viewport ya que Motion.div no acepta los estilos responsive de Chakra */ }
          {/* grid mobile */ }
          <Box display={{base: "block", xl: "none"}} className="projectContainerMobile">
          <MotionDiv
            initial={{ maxHeight: "715px" }}
            animate={{ maxHeight: showFullList ? "3500px" : "715px" }}
            transition={{ duration: 1.5 }}
            style={{ overflow: 'hidden'}}
          >
            <Grid className="gridContainer" gridTemplateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gridTemplateRows="repeat(5, 1fr)" gridColumnGap="20px" gridRowGap="20px">
              {visibleChildren.map((project, i) => (
                <Card project={project} key={`project-${i}-${project.id}`} link={`/portfolio/${project.id}`} />
              ))}
            </Grid>
          </MotionDiv>
          </Box>
          {/* grid desktop */ }
          <Box display={{base: "none", xl: "block"}} className="projectContainerDesktop">
          <MotionDiv
            initial={{ maxHeight: "500px" }}
            animate={{ maxHeight: showFullList ? "1000px" : "500px" }}
            transition={{ duration: 1.5 }}
            style={{ overflow: 'hidden', padding: "15px"}}
          >
            <Grid className="gridContainer" gridTemplateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gridTemplateRows="repeat(5, 1fr)" gridColumnGap="20px" gridRowGap="20px">
              {visibleChildren.map((project, i) => (
                <Card project={project} key={`project-${i}-${project.id}`}  link={`/portfolio/${project.id}`} />
              ))}
            </Grid>
          </MotionDiv>
          </Box>
          {!showFullList && data.length > 3 && (
                <Flex width="100%" justifyContent="center" mb={5}>
                    <ButtonBase onClick={() => setShowFullList(true)} text="See More" />
                </Flex>
            )}
        </Flex>

        <ProjectsSeeMore />
      </Flex>

    </>
  )

};

export default Portfolio;
