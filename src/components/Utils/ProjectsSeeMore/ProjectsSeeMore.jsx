import { Flex, Text, Image, Box, Link } from "@chakra-ui/react";
import ButtonBase from "../Button/ButtonBase";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectsSeeMore = () => {
    const settings = {
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        dots: false,
        arrows: false,
        draggable: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };
    return (
        <>
            <Flex flexDirection="column" width="100%" maxW="100%">
                <Flex justifyContent="space-between" mb={7}>
                    <Text as="h2" textTransform="uppercase" color="pink.500" mb="2">experiences that we created</Text>
                    <Box display={{ base: "none", lg: "block" }} width="fit-content">
                        <ButtonBase url="/portfolio" text="See More" />
                    </Box>
                </Flex>
                <Slider {...settings} className="projectsSeeMoreSlider">
                    <div>
                        <Link href="/portfolio/4">
                            <Image alt="Image of project number 4" src="https://picsum.photos/id/1/465/251"></Image>
                        </Link>
                    </div>
                    <div>
                        <Link href="/portfolio/3">
                            <Image alt="Image of project number 3" src="https://picsum.photos/id/20/465/251"></Image>
                        </Link>
                    </div>
                    <div>
                        <Link href="/portfolio/2">
                            <Image alt="Image of project number 2" src="https://picsum.photos/id/24/465/251"></Image>
                        </Link>
                    </div>
                </Slider>
            </Flex>
            <Box display={{ base: "block", lg: "none" }} width="fit-content" pt={16} margin="auto" className="seeMoreContainer">
                <ButtonBase url="/portfolio" text="See More" />
            </Box>
        </>
    );
};

export default ProjectsSeeMore;