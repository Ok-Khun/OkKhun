import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/nav';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
return (
  <div>
    <Nav />
    <div className="main">
    <Component {...pageProps} />
    </div>
    {/* <Footer /> */}
  </div>
)
}

export default MyApp
