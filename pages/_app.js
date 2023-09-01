// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

// `pages/_app.js`
import '../styles/global.scss';

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }