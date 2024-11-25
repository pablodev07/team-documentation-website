import { Flex, useColorMode } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Banner from "../../../Utils/Banner/Banner";
import bannerimg from "/assets/images/bg_portfolio.svg";
import ProjectsLayout from "../../../Utils/ProjectsLayout/ProjectsLayout";
import data from "./projects.json";

const ProjectPage = () => {
    const datos = data.data;
    const params = useParams()
    const { colorMode } = useColorMode();
    return (
        <>

            <Banner img={bannerimg} objectCover="cover" objectPosition="center" BannerTitle="portfolio" />

            <Flex
                className="container" px={{ base: 5, md: 0 }} alignItems="flex-start" flexDirection="column" justifyContent="center" flexWrap={{ base: "wrap", xl: "nowrap" }} pt="12" gap={10}>
                <Flex flexDirection="column" width="100%">
                    <ProjectsLayout dataProject={datos[params.id]} themeColor={colorMode}/>
                </Flex>
            </Flex>
        </>
    );
};

export default ProjectPage;
