import { Box, Image, useColorModeValue } from "@chakra-ui/react";
import arrow3 from "/assets/images/arrow3.png";
import PropTypes from 'prop-types';

const ButtonMore = ( { item, onClickEvent } ) => {
  const bgGradient = useColorModeValue(`linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(231, 58, 246, 0.13700632668711654) 100%)`,`linear-gradient(
    180deg,
    rgba(25, 21, 37, 1) 0%,
    rgba(231, 58, 246, 0.13700632668711654) 100%)`)

  return (
    <Box
      as="button"
      onClick={onClickEvent}
      fontFamily="SSB"
      fontSize={{ xs: "base", xl: "2xl" }}
      display={{ xs: "flex", md: "none" }}
      justifyContent="center"
      alignItems="center"
      w={{ xs: "100%", md: "230px", lg:"270px", xl: "300px" }}
      mb={{xs: 10, md: 20}}
      h="44px"
      mt={{ xs: "15px" }}
      border="2.5px solid"
      borderColor="pink.500"
      borderRadius="0px"
      textTransform="uppercase"
      bg={bgGradient}
      box-shadow="1px 1px 8px #e73af69e"
      transition="boxShadow 0.2s ease"
      _hover={{
        fontFamily: "SB",
        boxShadow: "7px 0px 7px 0px rgb(231 58 246 / 81%)",
        bg: bgGradient
      }}
    >
        {item}
      <Box ml="10px">
        <Image
          src={arrow3}
          alt="down arrow"
          w={{ xs: "19px", xl: "23px" }}
          h={{ xs: "14px", xl: "17px" }}
          transform="rotate(90deg)"
        //   transition="all 0.3s ease"
        />
      </Box>
    </Box>
  );
};

export default ButtonMore;

ButtonMore.propTypes = {
  item: PropTypes.string,
  onClickEvent: PropTypes.func
};
