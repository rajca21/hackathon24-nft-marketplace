import '../styles/globals.css';
import { NFTMarketplaceProvider } from '../context/NFTMarketplaceContext';
import { Navbar, Footer } from '../components/components_index';

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NFTMarketplaceProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketplaceProvider>
  </div>
);

export default MyApp;
