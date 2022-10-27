import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
    colors: {
        brand: {
            100: '#030328',
            200: '#9b34ef',
            300: 'blue',
            400: 'yellow',
            500: 'purple',
            600: 'grey',
            700: 'black'
        }
    },
    breakpoints: {
        sm: '360px',
        md: '768px',
        lg: '990px',
        xl: '1151px',
        '2xl': '1536px',
    },
    fontSizes: {
        xs: "14px",
        sm: "16px",
        md: "18px",
        lg: "20px",
        xl: "22px",
        "2xl": "24px",
        "3xl": "26px",
        "4xl": "28px",
        "5xl": "30px",
        "6xl": "32px",
        "7xl": "34px",
        "8xl": "36px",
        "9xl": "38px",
    },
    fonts: {
        
    }
})

export default customTheme