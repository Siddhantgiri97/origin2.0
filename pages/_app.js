import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Loader from './components/loader'
import { useRouter } from 'next/router'
import { config } from '@fortawesome/fontawesome-svg-core';
import Navbar from './components/navbar'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'



config.autoAddCss = false;


export default function App({ Component, pageProps }) {
  const router = useRouter()
  const [loading, setLoading] = React.useState(false)

  React.useEffect(() => {
    const handleRouteChange = (url) => {
      setLoading(true)
    }

    const handleRouteChangeComplete = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleRouteChange)
    router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [router.events])

  return <>
    {loading ? <Loader /> : <> <Navbar />
      <Component {...pageProps} />
      <Footer />  </>}


  </>
}
