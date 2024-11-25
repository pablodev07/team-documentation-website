import { Flex, Text, Grid } from "@chakra-ui/react";
import Banner from "../../Utils/Banner/Banner";
import banner from "/assets/images/bg_who_we_are.svg";
import structure from "./structure.json"
import SmallAvatar from "../../Utils/SmallAvatar/SmallAvatar";

const WhoWeAre = () => {
  const data = structure.data;
  return (
    <>

      <Banner img={banner} objectCover="cover" objectPosition="center" BannerTitle="Who we are" />
      <Flex
        className="container" px={{ base: 5, md: 0 }} alignItems="flex-start" justifyContent="center" flexWrap={{ base: "wrap", xl: "nowrap" }} pt="12">
        <Flex flexDirection="column" width="100%">
          <Text as="h2" textTransform="uppercase" color="pink.500" mb="2">THIS IS OUR TEAM</Text>
          <Text as="h3" mb={7}>We are passionate about creating digital experiences.</Text>
          <Flex className="teamCategoriesSection" flexDirection="column" gap="10">
            {data.map((group, i) => (
              <div key={`index-${i + 1}`}>
                <Flex border="2px" borderColor="pink.500" width={{ base: "100%", md: "20rem" }} py={{xs: 2, md: 5}} justifyContent="center" mb={10}><Text as="h4" fontFamily="SSB" textTransform="uppercase" color="pink.500" className="structureTitle" fontSize="18px">{group.structureTitle}</Text></Flex>
                <Grid gridAutoFlow="row" templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} templateRows={{ base: 'repeat(1, 1fr)' }} className={`peopleContainer-${i}`} >
                  {Object.values(group.people).map((people, index) => {
                    return people.map((person) => (
                      <SmallAvatar person={person} key={`${index}-person-${person.lastname}`} index={index}/>
                    ));
                  })}
                </Grid>
              </div>
            ))}
          </Flex>
        </Flex>

      </Flex>
    </>
  );
};

export default WhoWeAre;