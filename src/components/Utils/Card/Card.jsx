import { Flex, Text, Box, Image, Button, LinkBox, LinkOverlay } from "@chakra-ui/react";
import PropTypes from 'prop-types';

const Card = ({ project, link, isPortfolioSeeMore, widthSize, heightSize }) => {
  return (
    <LinkBox width={widthSize || "100%"} >
      <Box height={heightSize || "220px"} bgColor="gray.500" className="card-container" _hover={{ boxShadow: "0px 0px 10px 5px #E73AF6" }} transition="box-shadow 0.5s" cursor="pointer">
        <Flex justifyContent="space-evenly" alignItems="center" flexDirection="column" h="100%" className="card-content-container">
          <LinkOverlay href={link} >
            <Image src={project.logo} filter="grayscale(1)" alt={`${project.name} logo`} width="100%" maxWidth={isPortfolioSeeMore ? { base: "110px", md: "220px" } : "200px"} maxHeight={isPortfolioSeeMore ? { base: "25px", md: "100%" } : "100%"} margin="auto" />
          </LinkOverlay>
          {!isPortfolioSeeMore &&
            <Button p={0} height="fit-content" w="140px" display="flex" justifyContent="space-around" background="transparent" _hover={{ background: "transparent" }}>
              <Text as="p" color="black" paddingRight={2}>See project</Text>
            </Button>
          }
        </Flex>
      </Box>
    </LinkBox>
  )
};


export default Card;

Card.propTypes = {
  project: PropTypes.object,
  link: PropTypes.string,
  isPortfolioSeeMore: PropTypes.bool,
  widthSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  heightSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
};