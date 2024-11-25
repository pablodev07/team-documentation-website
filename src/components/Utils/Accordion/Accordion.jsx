import { useState } from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Flex, Box, Text } from '@chakra-ui/react'
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import ButtonBase from '../Button/ButtonBase';
import PropTypes from 'prop-types';

const AccordionVisionario = ({ items, borderColorAccordion, bgColorExpanded, textColorIdle, textColorExpanded }) => {
    const [showFullList, setShowFullList] = useState(false);
    const visibleChildren = showFullList ? items : items.slice(0, 3);
    /*Todos los valores de colores divididos por dark mode o light mode ya deben venir por parametro en el componente (como está actualmente), no deben definirse dentro del componente ya que causa error de contexto en React*/
    return (
        <div 
            style={{
                maxHeight: showFullList ? '1500px' : '500px',
                transition: 'max-height 1s ease-in-out',
                overflow: 'hidden'
            }}
        >
        <Accordion allowToggle mb={5}>
            {visibleChildren.map((child, index) => (
                <AccordionItem borderWidth="2px" key={`${index}-accordionItem-${child.title}`} className="accordionItem" mb={5} borderColor={borderColorAccordion}>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton bg={isExpanded ? bgColorExpanded : "transparent"} _hover={{ bg: isExpanded ? bgColorExpanded : "transparent" }} transitionProperty="background" transitionDuration="200ms" py={5}>
                                    <Box flex='1' textAlign='center'>
                                        {isExpanded ? (
                                            <Text as="p" textTransform="uppercase" fontFamily="SSB" color={textColorExpanded}>{child.title}</Text>
                                        ) : (
                                            <Text as="p" textTransform="uppercase" fontFamily="SSB" color={textColorIdle}>{child.title}</Text>
                                        )}
                                    </Box>
                                    {isExpanded ? (
                                        <ArrowUpIcon w={6} h={6} color={textColorExpanded} />
                                    ) : (
                                        <ArrowDownIcon w={6} h={6} color={child.color} />
                                    )}
                                </AccordionButton>
                            </h2>
                            <AccordionPanel bg={isExpanded ? bgColorExpanded : "transparent"} _hover={{ bg: isExpanded ? bgColorExpanded : "transparent" }} transitionProperty="background" transitionDuration="200ms" height="90px" overflowY="auto" position="relative" pb={0} className="hide-scrollbar" color={textColorExpanded}>
                                {child.text}
                                <Box position="sticky" bottom={0} zIndex={2} height={5} bg={bgColorExpanded} width="100%"></Box>
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            ))}
            {!showFullList && items.length > 3 && (
                <Flex width="100%" justifyContent="center" mb={5}>
                    <ButtonBase onClick={() => setShowFullList(true)} text="See More" />
                </Flex>
            )}
        </Accordion>
        </div>
    );
};

export default AccordionVisionario;

AccordionVisionario.propTypes = {
    items: PropTypes.array,
    borderColorAccordion: PropTypes.string,
    bgColorExpanded: PropTypes.string,
    textColorIdle: PropTypes.string,
    textColorExpanded: PropTypes.string,
  };
  