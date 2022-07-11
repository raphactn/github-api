// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

function MyApp({ Component, pageProps }) {

  const theme = extendTheme({
    styles: {
      global: (props) => ({
        body: {
          bg: '#0d1117',
          color: 'white',
          minWidth: '400px'
        }
      })
    },
  })

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp