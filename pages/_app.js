import { ThemeProvider } from '@emotion/react'
import { theme } from "../styled.config";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
