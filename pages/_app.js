import Navbar from './components/navbar'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
