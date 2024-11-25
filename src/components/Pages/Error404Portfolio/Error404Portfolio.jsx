import { Flex, Text } from "@chakra-ui/react";
import Banner from "../../Utils/Banner/Banner";
import imgHDK from "/assets/images/bg_home.png";
import ButtonBase from "../../Utils/Button/ButtonBase";

const Error404Portfolio = () => {

    return (
        <>

            <Banner img={imgHDK} objectCover="cover" objectPosition="center" BannerTitle="Visionario" />

            <Flex
                className="container" alignItems="center" justifyContent="center" pt="12">
                <Flex flexDirection="column" alignItems="center" justifyContent="center">
                    <Text as="h2" color="pink.500" mb="5">Error 404 - Project not found</Text>

                    <ButtonBase url="/portfolio" text="See all projects" widthStyles={{base: "100%", lg: "fit-content"}} />
                </Flex>
            </Flex>
        </>
    );
};

export default Error404Portfolio;
