import React from "react";
import { Flex, Image, Box, Heading } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const Banner = ({ img, objectPosition, objectCover, logoHeight, BannerTitle }) => {


  return (
      <Flex
        w='100%'
        mt={{ xs: "78px", sm: "95px", lg: "120px" }}
        maxH={{ base: "220px", lg: "420px" }}
        mx={"auto"}
        height={{base: "220px", lg: "500px"}}
        alignItems="center"
        sx={{ transition: "width 1s" }}
      >

        <Flex w="100%" h={{ base: "220px", lg: "420px" }} position="relative" justifyContent="center" alignItems="center" overflow="hidden">
          <Box
            position="absolute"
            w="100%"
            h="100%"
            bg="linear-gradient(360deg, rgb(25, 21, 40) 15%, rgba(255,255,255,0) 100%);">
          </Box>
          <Heading
            as="h1"
            position="absolute"
            fontSize={{base: "40px", sm: "60px", md: "90px", lg: "140px"}}
            sx={{ transition: "font-size 1s" }}
            color="primary.500"
            bg="linear-gradient(360deg, rgba(255,255,255,0) -3%, rgb(25, 21, 40) 50%);"
            backgroundClip="text"
            textTransform="uppercase"
            textAlign="center"
            letterSpacing={{base: "2px", md: "initial"}}
            zIndex="3">{BannerTitle}</Heading>
          <Heading
            as="h1"
            position="absolute"
            fontSize={{base: "40px", sm: "60px", md: "90px", lg: "140px"}}
            sx={{ transition: "font-size 1s" }}
            textShadow="0 0 12px #E73AF6"
            color="primary.500"
            backgroundClip="text"
            textTransform="uppercase"
            textAlign="center"
            letterSpacing={{base: "2px", md: "initial"}}
            zIndex="2"
            aria-hidden="true">{BannerTitle}</Heading>
          <Heading
            as="h1"
            position="absolute"
            fontSize={{base: "40px", sm: "60px", md: "90px", lg: "140px"}}
            sx={{ transition: "font-size 1s" }}
            color="pink.500"
            zIndex="1"
            textAlign="center"
            textTransform="uppercase"
            letterSpacing={{base: "2px", md: "initial"}}
            textShadow={{base: "1px 0 #E73AF6, -1px 0 #E73AF6, 0 2px #E73AF6, 0 -2px #E73AF6, 1px 1px #E73AF6, -1px -1px #E73AF6, 1px -1px #E73AF6, -1px 1px #E73AF6", md: "2px 0 #E73AF6, -2px 0 #E73AF6, 0 2px #E73AF6, 0 -2px #E73AF6, 1px 1px #E73AF6, -1px -1px #E73AF6, 1px -1px #E73AF6, -1px 1px #E73AF6"}} aria-hidden="true">{BannerTitle}</Heading>
          <Image
            src={img}
            alt={`Banner image of section "${BannerTitle}"`}
            w={logoHeight ? { base: "240px", md: "100%" } : "100%"}
            h={logoHeight || "420px"}
            mx="auto"
            objectFit={objectCover}
            objectPosition={objectPosition}
          />
        </Flex>

      </Flex>
  );
};

export default Banner;

Banner.propTypes = {
  img: PropTypes.string,
  objectPosition: PropTypes.string,
  objectCover: PropTypes.string,
  logoHeight: PropTypes.string,
  BannerTitle: PropTypes.string
};