import { Flex, Image, Text, Box } from "@chakra-ui/react";
import Banner from "../../Utils/Banner/Banner";
import imgHDK from "/assets/images/bg_home.png";
import ButtonBase from "../../Utils/Button/ButtonBase";

const Home = () => {

  return (
    <>

      <Banner img={imgHDK} objectCover="cover" objectPosition="center" BannerTitle="Visionario" />

      <Flex
        className="container" alignItems="flex-start" justifyContent={{base: "center", lg: "space-between"}} flexWrap={{base: "wrap", xl: "nowrap"}} pt="12">
        <Flex flexDirection="column" width={{base: "100%", lg: "45%", xl: "50%"}}>
          <Text as="h2" textTransform="uppercase" color="pink.500" mb="2">A VISION AS A GUIDE</Text>
          <Text as="h3" color="pink.500">The oracle of this team</Text>

          <Text as="p" pt="25px" pb="50px">
          Defining the beginning of VISIONARIO is impossible, but so is defining its end. This is where all past knowledge is found and where all forecoming wisdom resides. It is a resource material and it is also a  rulebook. It is the foundations but also the ceiling. In this vast library, no two sections are identical. It is the ultimate site, that centralizes all our knowledge and serves as a waypoint not only for future members of the team, but for all The Agency. This is the catalogue of catalogues, this is VISIONARIO from my team.
          <br /><br />
The development team went from being a few to being many; we're no longer just "the devs," we are now MY TEAM. Landing pages became digital creative experiences. VISIONARIO reflects the nature of our team: an endless array of possibilities to create relevant experiences and interfaces.
          </Text>

          <Box display={{base: "none", lg: "block"}}><ButtonBase url="/who" text="Get to know us" /></Box>
        </Flex>
        <Flex flexDirection="column" width={{base: "100%", lg: "480px"}} h="auto">
          <Image alt="Futuristic image in the shape of letter V with neon lights" src="/assets/images/home-visionario.jpg" mb={{base: 5, lg: 0}} h={{base: "100%", md: "320px", lg: "480px"}} objectFit="cover"/>
          <Box display={{base: "block", lg: "none"}}><ButtonBase widthStyles={"width: 100%"} item="Get to know us" /></Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
