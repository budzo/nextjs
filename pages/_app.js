// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

// `pages/_app.js`
import '../styles/global.scss';

// add Teko font from Google
import { Teko } from '@next/font/google';

const teko = Teko({
  subsets: ['latin'], // specify the subset you need
  weight: ['400', '700'], // specify font weights
});

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }