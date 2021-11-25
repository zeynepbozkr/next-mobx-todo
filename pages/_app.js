import "../styles/globals.css";
import "../store";
import StoreProvider from "../utils/store-provider";

const UserStore = StoreProvider.getStore("UserStore");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
