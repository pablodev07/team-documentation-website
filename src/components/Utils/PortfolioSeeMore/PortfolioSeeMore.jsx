import { Flex , Box } from "@chakra-ui/react";
import ButtonBase from "../Button/ButtonBase";
import Card from "../Card/Card";
import dataPortfolioClients from "../../Pages/Portfolio/data.json";
import { useParams } from 'react-router-dom';

const PortfolioSeeMore = () => {
    const { id: paramId } = useParams();
    /*Funcion de randomizado seguro*/
    function secureShuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            /* Genera un index randomizado */
            let arrayForRandom = new Uint32Array(1);
            window.crypto.getRandomValues(arrayForRandom);
            randomIndex = arrayForRandom[0] % currentIndex;
            currentIndex -= 1;

            /* Lo cambia por cualquier elemento */
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    /*Importa lista de clientes declarada en la pagina /Portfolio*/
    const data = dataPortfolioClients.data;

    /* Le pasa la lista a la funcion de random*/
    const shuffledData = secureShuffle([...data]);

    /*Filtra de esa lista todos los elementos que no sean el proyecto actual*/
    const filteredData = shuffledData.filter(item => item.id.toString() !== paramId);
    return (
        <>
            <Flex flexDirection="column" width="100%" maxW="100%">
                <Box display={{ base: "none", lg: "block" }} width="fit-content" marginLeft="auto" marginBottom={5}>
                    <ButtonBase url="/portfolio" text="See More" />
                </Box>
                <Flex className="seeMore" flexWrap="wrap" justifyContent="space-between" gap={{ base: "10px", xl: "0px" }}>

                    {filteredData.slice(0, 4).map((item, i) => {
                        if (item.id.toString() !== paramId) {
                            return (
                                <Card key={`${item.id}-project-see-more-${i}`} isPortfolioSeeMore={true} project={item} widthSize={{ base: "48%", xl: "24%" }} heightSize={{ base: "110px", md: "220px" }} link={`/portfolio/${item.id}`} />
                            );
                        }
                        return null;
                    })}
                </Flex>

            </Flex>
            <Box display={{ base: "block", lg: "none" }} width="fit-content" pt={8} margin="auto" className="seeMoreContainer">
                <ButtonBase url="/portfolio" text="See More" />
            </Box>
        </>
    );
};

export default PortfolioSeeMore;