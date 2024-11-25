import { Flex, Image, Text, Box, Link, useColorModeValue } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const CellAvatar = ({ person, index }) => {
    const leadAvatar = person.isLead;
    const leadColor = useColorModeValue('#191528', 'white')
    const leadColorText = useColorModeValue('white', '#191528')
    const [isHovered, setIsHovered] = useState(false);
    const [minSize, setMinSize] = useState(130);
    const onHover = () => {
        setIsHovered(true);
    };
    const onMouseLeave = () => {
        setIsHovered(false);
    };
    useEffect(() => {
        const handleResize = () => {

            let minSize;
            if (window.innerWidth <= 1024) {
                // Mobile viewport
                minSize = 50
                setIsHovered(true)
            } else {
                // Desktop viewport
                minSize = 130
            }
            setMinSize(minSize);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const categoryColors = {
        Frontend: "#E73AF6",
        Backend: "#E73AF6",
        'Backend & Devops': "#E73AF6",
        Devops: "#E73AF6",
        Content: "#D6E05F",
        Banners: "#D6E05F",
        UX: "#2E39A7",
        'UX/UI': "#2E39A7",
        'Coordination': "#6FCCB3"
    };
    return (
        <Link href={`/who/${person.id}`} _hover={{ textDecoration: "none" }} key={index} mb={0} display="flex" justifyContent="center" position="relative">
            <Flex alignItems="center" flexDirection="column" width="fit-content" position="relative" transition="all .5s" _hover={{ fontFamily: "SB" }} sx={{ transition: "all .5s" }} >
                <Flex h={{ base: "50px", lg: "170px" }} w={{ base: "50px", lg: "170px" }} mb={3} position="relative" justifyContent="center" alignItems="center" scale="(1)" _hover={{ transform: "scale(1.1)" }} sx={{ transition: "all .3s ease-in-out" }} onMouseOver={onHover} onClick={() => setIsHovered(!isHovered)}
                    onMouseLeave={onMouseLeave}>
                    <Image borderRadius="100%" h={leadAvatar ? { base: "50px", lg: "7rem" } : { base: "45px", lg: "6.4rem" }} w={leadAvatar ? { base: "60px", lg: "7rem" } : { base: "45px", lg: "6.4rem" }} objectFit="cover" filter="grayscale(100%)" src={`https://avatar.iran.liara.run/public/${person.id + 1}`} alt={`Picture of ${person.name} ${person.lastname}, ${person.role} of this POD's project`} zIndex="5" />
                    {person.circles && (
                        <Flex flexDirection="column" className="circlesContainer" position="absolute" h={{ base: "50px", lg: "100%" }} w={{ base: "50px", lg: "100%" }}>
                            {Object.values(person.circles[0]).map((circle, categoryIndex) => {
                                let circleWidth = minSize - (categoryIndex * 20);
                                if (categoryIndex === 1) {
                                    circleWidth = 170 - (categoryIndex * 20);
                                } else if (categoryIndex === 2) {
                                    circleWidth = 170;
                                }
                                return (
                                    <div key={`${categoryIndex}-${person.lastname}`} >
                                        <Box position="absolute" borderWidth="3px" borderRadius="100%" className={`categorySkill-${categoryIndex}`} borderColor={categoryColors[circle]} boxShadow={`1px 0px 10px ${categoryColors[circle]}`} backgroundColor="white" _hover={{ boxShadow: `1px 0px 20px 3px ${categoryColors[circle]}` }} sx={{
                                            transition: "all 1s",
                                            "@media screen and (max-width: 1023px)": {
                                                height: '50px',
                                                width: '50px',
                                                top: '0px',
                                                left: '0px'
                                            },
                                        }} h={`${circleWidth}px`} w={`${circleWidth}px`} top={`${20 - (categoryIndex * 10)}px`} left={`${20 - (categoryIndex * 10)}px`} 
                                        zIndex={`${4 - categoryIndex}`} />
                                        <Flex width="120px" className={`tooltip-category-${circle}`} minHeight="35px" height="fit-content" position="absolute" bottom={leadAvatar ? "70px" : `calc(110px - ${categoryIndex * 50}px)`} left="170px" boxShadow={`1px 0px 13px ${categoryColors[circle]}`} bgColor={leadAvatar ? leadColor : categoryColors[circle]} zIndex="5" borderRadius="5px" alignItems="center" justifyContent="center" transition="opacity .5s" opacity={isHovered ? 1 : 0} sx={{
                                            "@media screen and (max-width: 1400px)": {
                                                display: "none"
                                            }
                                        }}>
                                            <Box borderTop="15px solid transparent" borderBottom="15px solid transparent" borderRight={leadAvatar ? `20px solid ${leadColor}` : `20px solid ${categoryColors[circle]}`} height="20px" width="20px" position="absolute" left="-10px" top="3px"></Box>
                                            <Text aria-label={leadAvatar ? `Rol de líder de célula con perfil ${person.circles[0].one}` : `perfil ${person.circles[0].one}`} fontFamily="SM" mb={0} textAlign="center" fontSize={{ base: "12px", md: "14px", lg: "16px" }} color={leadAvatar ? leadColorText : "white"} zIndex="5">{leadAvatar ? "Cell Lead" : circle}</Text>
                                        </Flex>
                                    </div>
                                )
                            })}
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Link>
    );
};

CellAvatar.propTypes = {
    person: PropTypes.object,
    index: PropTypes.number
};


export default CellAvatar;
