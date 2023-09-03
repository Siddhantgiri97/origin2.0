import Navbar from './components/navbar'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'

import { config, dom } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`${dom.css()}`;

export default function App({ Component, pageProps }) {

  return <>
    <GlobalStyles />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
