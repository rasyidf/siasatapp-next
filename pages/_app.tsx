import '../styles/globals.css'
import {ChakraProvider, useDisclosure} from '@chakra-ui/react'
import type { AppProps } from 'next/app'   
import { theme } from '../theme/index'
function MyApp({ Component  , pageProps }:any) {
  const {isOpen, onToggle} = useDisclosure()
  const getLayout = Component.getLayout || ((page:any) => page)
 
  return ( 
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps}/>, isOpen, onToggle)}
    </ChakraProvider>
  )
}
export default MyApp