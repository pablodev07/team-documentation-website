import { Flex, Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import CellAvatar from "../CellAvatar/CellAvatar";

const CellsGraph = ({ data, cellImg, lead }) => {
    const [size, setSize] = useState(window.innerWidth < 1024 ? 350 : 700);
    const [radius, setRadius] = useState(size / 2);
    const [center, setCenter] = useState(size / 2);

    useEffect(() => {
        const handleResize = () => {
            const newSize = window.innerWidth < 1024 ? 350 : 700;
            setSize(newSize);
            setRadius(newSize / 2);
            setCenter(newSize / 2);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <Box className="containerCell" position="relative" width="fit-content" marginX={{ base: "0px", md: "auto", lg: "100px", xl: "auto" }} height={{ base: "400px", lg: "900px" }} right={{ base: "30px", md: "0px" }}>
            <Box position="relative" width={`${size}px`} height={`${size}px`}>
                {data?.flatMap(Object.values).map((group, groupIndex) => {
                        let adjustedRadius;
                        if (window.innerWidth <= 480) {
                            // viewport en mobile
                            adjustedRadius = groupIndex === 1 ? radius - 70 : radius - 340;
                        } else if (window.innerWidth < 1024) {
                            // viewport menor de iPad
                            adjustedRadius = groupIndex === 1 ? radius - 300 : radius - 340;
                        } else {
                            // desktop
                            adjustedRadius = radius - (groupIndex * 150);
                        }


                        return (
                            <div key={`circle-${groupIndex + 1}`}>
                                <Flex className={`circleMembersContainer-${groupIndex}`} gap={5} position="absolute" right={{ base: "5px", md: "10%" }} flexWrap="wrap" width="100%" height="100%">
                                    {group.map((person, j) => {
                                        const total = group.length;
                                        const angle = groupIndex === 1
                                            ? ((2 * Math.PI / total) * j) - Math.PI / 2
                                            : (2 * Math.PI / total) * j;
                                        const top = `${center + adjustedRadius * Math.sin(angle)}px`;
                                        const left = `${center + adjustedRadius * Math.cos(angle)}px`;

                                        return (
                                            <Box
                                                className="circlePerson"
                                                position="absolute"
                                                top={top}
                                                left={left}
                                                key={`${groupIndex}-${j}`}
                                                zIndex={8 - groupIndex}
                                            >
                                                <CellAvatar person={person} />
                                            </Box>
                                        );
                                    })}
                                </Flex>
                            </div>
                        );
                    })

                }
                <Box
                    className="circleLead"
                    position="absolute"
                    top={{ base: "58%", md: "60%", lg: "58%" }}
                    left={{ base: "58%", md: "46%", lg: "50%" }}
                    transform="translate(-45%, -50%)"
                    zIndex="3"
                >
                    <CellAvatar person={lead} />
                </Box>

                <Image top="10%" left={{ base: "7%", md: "-5%", lg: "0px" }} alt="Graph in the shape of a circle to exemplify the POD dynamic" src={`/assets/images/cell/${cellImg}.svg`} width="100%" height="100%" position="absolute" zIndex="1" />
            </Box>
        </Box>
    )

};

CellsGraph.propTypes = {
    data: PropTypes.array,
    cellImg: PropTypes.string,
    lead: PropTypes.object,
};

export default CellsGraph;
