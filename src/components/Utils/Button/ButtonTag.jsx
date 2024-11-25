
import { Flex, Text, Link } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const ButtonTag = ({ text, borderCategory, widthSize, alignment, hasBoxShadow, link }) => {
  return (
    <Flex className="buttonTag" borderWidth="2px" borderColor={borderCategory} _hover={{boxShadow: hasBoxShadow ? `1px 0px 13px ${borderCategory}` : "none", cursor: hasBoxShadow ? "pointer" : "normal"}} transition="all 0.5s" textTransform="uppercase" fontFamily="SR" minWidth={widthSize || "auto"} maxWidth="fit-content" py={2} px={5} justifyContent={alignment || "left"} ><Link href={link} _hover={{textDecoration : "none", cursor: "inherit"}}><Text as="p" textAlign={{base: "center", xl: "left"}}>{text}</Text></Link></Flex>
  );
};

export default ButtonTag;

ButtonTag.propTypes = {
  text: PropTypes.string,
  borderCategory: PropTypes.string,
  alignment: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  widthSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  hasBoxShadow: PropTypes.bool,
  link: PropTypes.string
};
