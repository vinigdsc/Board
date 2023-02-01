import { AppProps } from "next/app";
import "../styles/global.scss";
import { Header } from "../components/Header";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import { Provider as NextAuthProvider } from "next-auth/client";

const initialOptions = {
  "client-id":
    "AQOrpEtXOjIulDI1nR81P71kqtT5iGJ4zq0pDNp4vRYpzJ-HpOFxVFF0JDTH7OIJbrpwhUrRvzF6XAtk",
  currency: "BRL",
  intent: "capture",
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <PayPalScriptProvider options={initialOptions}>
        <Header />
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  );
}
