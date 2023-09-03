
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, dom } from '@fortawesome/fontawesome-svg-core';
import Navbar from './components/navbar'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'



config.autoAddCss = false;


export default function App({ Component, pageProps }) {

  return <>
    
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
