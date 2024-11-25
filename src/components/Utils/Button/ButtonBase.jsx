import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import arrow3 from "/assets/images/arrow3.png";
import PropTypes from 'prop-types';

const ButtonBase = ({ text, url, onClick, widthStyles, onlyArrow, arrowLeft }) => {
  const buttonProps = {
    fontFamily: "SSB",
    fontSize: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    w: widthStyles || "fit-content",
    h: "40px",
    px: 5,
    py: 2,
    border: "2.5px solid",
    borderColor: "pink.500",
    borderRadius: "0px",
    opacity: 0.5,
    transition: "opacity .5s ease",
    _hover: {
      opacity: 1,
      backgroundColor: "transparent"
    }
  };

  if (onClick) {
    return (
      <Box w={widthStyles || "fit-content"} className="buttonWithClick">
        <Button
          as="div"
          {...buttonProps}
          onClick={onClick}
          backgroundColor="transparent"
          _active={{backgroundColor: "transparent"}}
          cursor="pointer"
        >
          {text}
          <Box ml={onlyArrow ? "0px" : "10px"}>
            <Image
              src={arrow3}
              alt={arrowLeft ? "Arrow left" : "Arrow right"}
              w={{ xs: "19px", xl: "23px" }}
              h={{ xs: "14px", xl: "17px" }}
              transform={arrowLeft ? "rotate(180deg)" : "rotate(0deg)"}
            />
          </Box>
        </Button>
      </Box>
    );
  }

  return (
    <Box w={widthStyles || "fit-content"}>
      <Link to={url} as="div">
        <Box as="div" {...buttonProps}>
          {text}
          <Box ml={onlyArrow ? "0px" : "10px"}>
            <Image
              src={arrow3}
              alt={arrowLeft ? "Arrow left" : "Arrow right"}
              w={{ xs: "19px", xl: "23px" }}
              h={{ xs: "14px", xl: "17px" }}
              transform={arrowLeft ? "rotate(180deg)" : "rotate(0deg)"}
            />
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default ButtonBase;

ButtonBase.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
  widthStyles: PropTypes.string,
  onlyArrow: PropTypes.bool,
  arrowLeft: PropTypes.bool
};