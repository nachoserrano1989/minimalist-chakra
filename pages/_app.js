import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import customTheme from '../src/customTheme';

function MyApp({ Component, pageProps }) {

  const theme = extendTheme(customTheme);
  
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
