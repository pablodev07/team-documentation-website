import { extendTheme } from "@chakra-ui/react";

const theme = {
  colors: {
    primary: {
      200: "#37324A",
      300: "#2E39A7",
      500: "#191528",
    },
    pink: {
      /* se agregan los valores 100 y 800, para override de colorScheme en tag <Code>. 200 hace override de colorScheme en <Progress> */
      100: "white",
      200: "#E73AF6",
      500: "#E73AF6",
      800: "#E73AF6"
    },
    gray: {
      500: "#F1F1F1"
    },
    lima: {
      500: "#D6E05F",
    },
    grey: {
      500: "#333",
    },
    green: {
      500: "#6FCCB3"
    }
  },

  viewport: {
    height: {
      50: "50vh",
      100: "100vh",
    },
    width: {
      50: "50vw",
      100: "100vw",
    },
  },

  fontSizes: {
    "6xl": "3.75rem",
    "5xl": "2.5rem",
    "4xl": "1.875rem",
    "3xl": "1.563rem",
    "2xl": "1.25rem",
    xl: "1.25rem",
    base: "1.125rem",
    tiny: "1rem",
    sm: "0.875rem",
    xs: "0.625rem",
  },
  
  sizes: {
    sm: "33.75em",
    md: "45em", // 720px
    lg: "60em", // 960px
    xl: "71.25em", // 1140px
    "2xl": "90em", // ~1440px
  },

  breakpoints: {
    xs: "0em", // 0px
    sm: "36em", // ~480px
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "75em", // ~1200px
    "2xl": "90em", // ~1440px
    "3xl": "96em", // ~1536px
  },

  fonts: {
    heading: "Silka Bold",
    h1: "Silka Bold",
    h2: "Silka Bold",
    h3: "Silka Regular",
    SB: "Silka Bold",
    SSB: "Silka Semi Bold",
    SR: "Silka Regular",
    SM: "Silka Medium",
    IB: "Inter Bold",
    ISB: "Inter Semi Bold",
    IR: "Inter Regular",
    IM: "Inter Medium",
    PB: 'PPEiko-Bold',
    PM: 'PPEiko-Medium',
    PBL: 'PPEiko-Black'
  },

  styles: {
    global: {
      html: {
        fontSize: "18px",
      },
      body: {
        fontFamily: "Silka Regular",
        fontSize: {base: "14px", md: "18px"},
        _dark: {
          background: 'primary.500',
        },
        p: {
          fontFamily: "Silka Regular",
          fontSize: {base: "14px", md: "18px"},
        },
        h2: {
          fontFamily: "Silka Bold",
          fontSize: {base: "24px", md: "30px"}
           /*estilos de H1 en Figma
           <h1> se utiliza en los Banners de cada seccion/pagina */
        },
        h3: {
          fontFamily: "Silka Regular",
          fontSize: {base: "18px", md: "24px"}
           /*estilos de H2 en Figma*/
        },
        h4: {
          fontFamily: "Silka Bold",
          fontSize: {base: "16px", md: "20px"}
          /*estilos de H3 en Figma */
        },
        h5: {
          fontFamily: "inherit",
          fontSize: {base: "14px", md: "16px"}, 
          /*estilos de H4 en Figma */
        }
      }
    },
  },
};

export default extendTheme(theme);
