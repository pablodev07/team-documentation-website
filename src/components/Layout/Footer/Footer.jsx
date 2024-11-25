import logo from "/assets/images/agency_logo.svg";
import { Flex, Box, Text, Image, HStack } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const Footer = ({isDark}) => {
  const n = 2
  return (
    <Flex
      as="footer"
      width="100%" 
      maxWidth="1440px" 
      marginLeft="auto"
      marginRight="auto"
      marginTop="auto"
      paddingTop="60px"
      bgColor="transparent"
      flexDirection="column"
      alignItems="center"
    >
      <Flex w="100%" h="3px" mb={4}>
      {[...Array(n)].map((_, i) => 
      <Flex height="2px" width="50%" key={`${i + 1}`} className={`footer-line-${i}`}>
        <Box bgColor="pink.500" h="100%" width="100%"></Box>
        <Box bgColor="lima.500" h="100%" width="100%"></Box>
        <Box bgColor="green.500" h="100%" width="100%"></Box>
      </Flex>
      )}
      </Flex>
      <Image 
        src={logo}
        alt="Agency Logo"
        margin="auto"
        width="110px"
        height="50px"
        filter={isDark ? '' : 'invert(1)'}
      />
      <HStack mb={4} fontSize={12} gap={1} fontFamily="SM">
      <Text fontSize={12}>MY TEAM</Text><span>/</span><Text fontSize={12} fontFamily="SB">VISIONARIO</Text>
      </HStack>
       
    </Flex>
  );
};

export default Footer;

Footer.propTypes = {
  isDark: PropTypes.bool
};
