import { useParams } from 'react-router';
import data from "./data.json"
import banner from "/assets/images/bg_who_we_are.svg";
import Banner from "../../../Utils/Banner/Banner";
import BioLayout from "../../../Utils/BioLayout/BioLayout";
import ButtonBase from "../../../Utils/Button/ButtonBase";
import { Box } from "@chakra-ui/react";

const Bios = () => {
  const datos = data.data;
  ;
  const params = useParams()
  const foundData = datos.find(item => item.id === Number(params.id));
  return (
    <>
      <Banner img={banner} objectCover="cover" objectPosition="center" BannerTitle="who we are" />
      <Box className="container" position="relative" height="100%" width="100%" zIndex={5}>
        {params.id > 0 &&
          <Box position="absolute" left={{ base: "15px", xl: "0" }} top="300px">
            <ButtonBase onlyArrow={true} arrowLeft={true} url={`/who/${Number(params.id) - 1}`} />
          </Box>
        }
        {(datos.length - 1) > params.id &&
          <Box position="absolute" right={{ base: "15px", xl: "0" }} top="300px">
            <ButtonBase onlyArrow={true} url={`/who/${Number(params.id) + 1}`} />
          </Box>
        }

      </Box>

      <BioLayout bioContent={foundData} />
    </>
  );
};

export default Bios;