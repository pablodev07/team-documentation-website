import { Flex, Text } from "@chakra-ui/react";
import Banner from "../../Utils/Banner/Banner";
import imgHDK from "/assets/images/bg_home.png";
import ButtonBase from "../../Utils/Button/ButtonBase";

const Error404 = () => {

    return (
        <>

            <Banner img={imgHDK} objectCover="cover" objectPosition="center" BannerTitle="Visionario" />

            <Flex
                className="container" alignItems="center" justifyContent="center" pt="12">
                <Flex flexDirection="column" alignItems="center" justifyContent="center">
                    <Text as="h2" color="pink.500" mb="5">Error 404 - Page not found</Text>

                    <ButtonBase url="/home" text="Go Home" widthStyles={{base: "100%", lg: "fit-content"}} />
                </Flex>
            </Flex>
        </>
    );
};

export default Error404;
