import { Flex, Image, Text, Box, Link } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from 'prop-types';

const SmallAvatar = ({ person, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const onHover = () => {
        setIsHovered(true);
    };

    const onMouseLeave = () => {
        setIsHovered(false);
    };
    const categoryColors = {
        Development: "#E73AF6",
        Content: "#D6E05F",
        UX: "#2E39A7",
        Coordination: "#6FCCB3"
    };
    return (
        <Link href={`/who/${person.id}`} _hover={{ textDecoration: "none" }} key={index} mb={10} display="flex" justifyContent="center" position="relative">
            <Flex alignItems="center" flexDirection="column" width="fit-content" position="relative" transition="all .5s" _hover={{ fontFamily: "SB" }} sx={{ transition: "all .5s" }} >
                <Flex h="170px" w="170px" mb={3} position="relative" justifyContent="center" alignItems="center" scale="(1)" _hover={{ transform: "scale(1.1)" }} sx={{ transition: "all .3s ease-in-out" }} onMouseOver={onHover} onClick={() => setIsHovered(!isHovered)}
                    onMouseLeave={onMouseLeave}>
                    <Image borderRadius="100%" h={{ base: "90px", md: "6.4rem" }} w={{ base: "90px", md: "6.4rem" }} objectFit="cover" filter="grayscale(100%)" src={`https://avatar.iran.liara.run/public/${person.id + 1}`}/>
                    {person.circles && (
                        <Flex flexDirection="column" className="circlesContainer" position="absolute" h={{ base: "130px", md: "100%" }} w={{ base: "130px", md: "100%" }}>
                            {Object.values(person.circles[0]).map((circle, categoryIndex) => {
                                let circleWidth = 130 - (categoryIndex * 20);
                                if (categoryIndex === 1) {
                                    circleWidth = 170 - (categoryIndex * 20);
                                } else if (categoryIndex === 2) {
                                    circleWidth = 170;
                                }
                                return (
                                    <div key={`${categoryIndex}-${person.lastname}`} >
                                        <Box position="absolute" borderWidth="3px" borderRadius="100%" className={`categorySkill-${categoryIndex}`} borderColor={categoryColors[circle]} boxShadow={`1px 0px 10px ${categoryColors[circle]}`} backgroundColor="transparent" _hover={{ boxShadow: `1px 0px 20px 3px ${categoryColors[circle]}` }} sx={{
                                            transition: "all 1s",
                                            "@media screen and (max-width: 768px)": {
                                                height: `calc(98px + ${categoryIndex * 16}px)`,
                                                width: `calc(98px + ${categoryIndex * 16}px)`,
                                                top: `${(2 - categoryIndex) * 8}px`,
                                                left: `${(2 - categoryIndex) * 8}px`
                                            }
                                        }} h={`${circleWidth}px`} w={`${circleWidth}px`} top={`${20 - (categoryIndex * 10)}px`} left={`${20 - (categoryIndex * 10)}px`} />
                                    </div>
                                )
                            })}
                        </Flex>
                    )}
                </Flex>
                <Text as="h5" textTransform="uppercase" fontSize="0.875rem" textAlign="center">{person.name} <br /> {person.lastname}</Text>
            </Flex>
        </Link>
    );
};

SmallAvatar.propTypes = {
    person: PropTypes.object,
    index: PropTypes.number
};


export default SmallAvatar;
