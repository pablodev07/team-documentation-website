import { useRef } from "react";
import logoDark from "/assets/images/agency_logo.svg";
import logoMB from "/assets/images/agency_logo.svg";
import menuHamb from "/assets/images/menuHamb.svg";
import close from "/assets/images/close.svg";
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  Image,
  Link,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorModeValue,
  useDisclosure,
  FormControl,
  FormLabel
} from "@chakra-ui/react";

import { NavLink as Routerlink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  let isDark = colorMode === "dark";

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const bgColorNavbar = useColorModeValue('white', 'primary.500')

  return (
    <Flex w="100%" bgColor="#333" zIndex={10} className="navbar">
      <Flex
        w={"100%"}
        h={{ xs: "78px", sm: "95px", lg: "120px" }}
        position="fixed"
        top="0"
        right="0"
        align="center"
        bgColor={bgColorNavbar}
        justifyContent="space-between"
        className="contenedor"
        px={{ base: 5, xl: 0 }}
        borderBottom="1px"
        borderColor={isDark ? "white" : "primary.500"}
        boxShadow={isDark ? "0px 0px 10px #ffffff54" : "0px 0px 10px #0000004d"}
      >
        {/* Desktop */}
        <Flex
          display={["none", "none", "none", "none", "flex", "flex"]}
          justifyContent="space-between"
          className="desktopContainer container"
        >
          <Link as={Routerlink} to={"/"} alignSelf="center" _hover={{ textDecoration: "none" }}>
            <Image
              src={logoDark}
              alt="Agency Logo"
              w="200px"
              h="50px"
              filter={isDark ? '' : 'invert(1)'}
            />
            <Text fontFamily="SR">MY TEAM / <span className="fontSB">VISIONARIO</span></Text>
          </Link>

          <Flex
            w={{ base: "60%", md: "fit-content" }}
            minW="350px"
            flexDirection="row"
            justifyContent={"space-between"}
            sx={{ transition: "width 2s" }}
          >
            <Link
              as={Routerlink}
              to={"/who"}
              fontFamily="SM"
              _activeLink={{ fontFamily: "Silka Bold", color: "pink.500" }}
            >
              <Button
                textDecoration="none"
                color="inherit"
                variant="ghost"
                aria-label="Who we are"
                my={5}
                w="100%"
                fontSize="14px"
                px={{ base: 0, md: 6 }}
                border="2px"
                borderColor="transparent"
                borderRadius="0"
                _hover={{ bg: "transparent", borderColor: "lima.500" }}
              >
                WHO WE ARE
              </Button>
            </Link>

            <Link
              as={Routerlink}
              to={"/what"}

              fontFamily="SM"
              _activeLink={{ fontFamily: "Silka Bold", color: "pink.500" }}
            >
              <Button
                textDecoration="none"
                color="inherit"
                variant="ghost"
                aria-label="What we do"
                my={5}
                w="100%"
                fontSize="14px"
                px={{ base: 0, md: 6 }}
                border="2px"
                borderColor="transparent"
                borderRadius="0"
                _hover={{ bg: "transparent", borderColor: "lima.500" }}
              >
                WHAT WE DO
              </Button>
            </Link>

            <Link
              as={Routerlink}
              to={"/portfolio"}

              fontFamily="SM"
              _activeLink={{ fontFamily: "Silka Bold", color: "pink.500" }}
            >
              <Button
                textDecoration="none"
                color="inherit"
                variant="ghost"
                aria-label="Projects Portfolio"
                my={5}
                w="100%"
                fontSize="14px"
                px={{ base: 0, md: 6 }}
                border="2px"
                borderColor="transparent"
                borderRadius="0"
                _hover={{ bg: "transparent", borderColor: "lima.500" }}
              >
                PORTFOLIO
              </Button>
            </Link>
            <Link
              as={Routerlink}
              to={"/toolbox"}

              fontFamily="SM"
              _activeLink={{ fontFamily: "Silka Bold", color: "pink.500" }}
            >
              <Button
                textDecoration="none"
                color="inherit"
                variant="ghost"
                aria-label="Toolbox: useful tools & links"
                my={5}
                w="100%"
                fontSize="14px"
                px={{ base: 0, md: 6 }}
                border="2px"
                borderColor="transparent"
                borderRadius="0"
                _hover={{ bg: "transparent", borderColor: "lima.500" }}
              >
                TOOLBOX
              </Button>
            </Link>
            <FormControl aria-labelledby="form" display="flex">
              <FormLabel display="none" htmlFor="toggleDarkMode">Habilitar o deshabilitar modo oscuro</FormLabel>
              <Switch
                colorScheme="primary"
                isChecked={isDark}
                onChange={toggleColorMode}
                display={{ xs: "none", sm: "flex" }}
                alignItems="center"
                size="lg"
                paddingLeft="20px"
                as="div"
                id="toggleDarkMode"
                aria-label={isDark ? "Modo oscuro habilitado" : "Modo claro habilitado"}
              >
              </Switch>
            </FormControl>
          </Flex>
        </Flex>

        {/* Mobile */}
        <Link
          as={Routerlink}
          to={"/"}
          alignSelf="center"
          alignItems="center"
          display={{ xs: "flex", lg: "none" }}
          gap={2}
        >
          <Image
            src={logoMB}
            alt="Agency Logo"
            w="fit-content"
            h="42px"
            filter={isDark ? '' : 'invert(1)'}
          />
          <Text fontFamily="SR" width="50%" fontSize="10px">MY TEAM / <span className="fontSB">VISIONARIO</span></Text>
        </Link>
        <Image
          aria-label="Open menu"
          alt="Open mobile menu"
          src={menuHamb}
          w="35px"
          h="32px"
          gap="2"
          ref={btnRef}
          onClick={onOpen}
          display={["flex", "flex", "flex", "flex", "none", "none"]}
          filter={isDark ? 'invert(1)' : ''}
          className="hamburgerMenu"
        />

      </Flex>

      {/* Mobile Content */}
      <Drawer
        isOpen={isOpen}
        placement='right'
        finalFocusRef={btnRef}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent bgColor={bgColorNavbar} height="fit-content" alignItems="flex-end">

          <DrawerHeader px={6} pt={6} pb={2} display="flex" alignItems="center">
          <FormControl aria-labelledby="form" display="flex">
              <FormLabel display="none" htmlFor="toggleDarkModeMobile">Habilitar o deshabilitar modo oscuro</FormLabel>
              <Switch
                colorScheme="primary"
                size='lg'
                isChecked={isDark}
                onChange={toggleColorMode}
                display={{ xs: "block", sm: "none" }}
                mx="30px"
                as="div"
                id="toggleDarkModeMobile"
              >
              </Switch>
            </FormControl>
            <DrawerCloseButton position="relative" top={0}>
              <Image
                src={close}
                mx="30px"
                aria-label="Open Menu"
                filter={isDark ? 'invert(1)' : ''}
              />
            </DrawerCloseButton></DrawerHeader>

          <DrawerBody>
            <Flex
              w="100%"
              zIndex={20}
              flexDir="column"
            >

              <Flex flexDir="column" align="end">
                <Link
                  as={Routerlink}
                  to={"/who"}
                  fontFamily="SM"
                  _activeLink={{ fontFamily: "Silka Bold", color: "pink.500" }}
                  onClick={onClose}
                >
                  <Button
                    textDecoration="none"
                    color="inherit"
                    variant="ghost"
                    aria-label="Who we are"
                    my={5}
                    w="100%"
                    px={6}
                    fontSize="20px"
                    border="2px"
                    borderColor="transparent"
                    borderRadius="0"
                    _focus={{ bg: "transparent", borderColor: "lima.500" }}
                    _active={{ bg: "transparent" }}
                    _hover={{ bg: "transparent" }}
                  >
                    who we are
                  </Button>
                </Link>

                <Link
                  as={Routerlink}
                  to={"/what"}
                  fontFamily="SM"
                  _activeLink={{ fontFamily: "Silka Bold", color: "pink.500" }}
                  onClick={onClose} 
                >
                  <Button
                    textDecoration="none"
                    color="inherit"
                    variant="ghost"
                    aria-label="What we do"
                    my={5}
                    w="100%"
                    px={6}
                    fontSize="20px"
                    border="2px"
                    borderColor="transparent"
                    borderRadius="0"
                    _focus={{ bg: "transparent", borderColor: "lima.500" }}
                    _active={{ bg: "transparent" }}
                    _hover={{ bg: "transparent" }}
                  >
                    WHAT WE DO
                  </Button>
                </Link>

                <Link
                  as={Routerlink}
                  to={"/portfolio"}
                  fontFamily="SM"
                  _activeLink={{ fontFamily: "Silka Bold", color: "pink.500" }}
                  onClick={onClose}
                >
                  <Button
                    textDecoration="none"
                    color="inherit"
                    variant="ghost"
                    aria-label="Projects Portfolio"
                    fontSize="20px"
                    my={5}
                    w="100%"
                    px={6}
                    border="2px"
                    borderColor="transparent"
                    borderRadius="0"
                    _focus={{ bg: "transparent", borderColor: "lima.500" }}
                    _active={{ bg: "transparent" }}
                    _hover={{ bg: "transparent" }}
                  >
                    PORTFOLIO
                  </Button>
                </Link>
                <Link
                  as={Routerlink}
                  to={"/toolbox"}
                  fontFamily="SM"
                  _activeLink={{ fontFamily: "Silka Bold", color: "pink.500" }}
                  onClick={onClose}
                >
                  <Button
                    textDecoration="none"
                    color="inherit"
                    variant="ghost"
                    aria-label="Toolbox: Useful tools and links"
                    my={5}
                    w="100%"
                    px={6}
                    fontSize="20px"
                    border="2px"
                    borderColor="transparent"
                    borderRadius="0"
                    _focus={{ bg: "transparent", borderColor: "lima.500" }}
                    _active={{ bg: "transparent" }}
                    _hover={{ bg: "transparent" }}
                  >
                    TOOLBOX
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </DrawerBody>

          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
