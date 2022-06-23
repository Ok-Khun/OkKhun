import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Nav from '../components/nav';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }: AppProps) {
return (
  <div style={
    {
      backgroundColor: "#333399"
    }
  }>
    <Nav />
    <div className="main">
    <Component {...pageProps} />
    </div>
    <Footer />
  </div>
)
}

export default MyApp
