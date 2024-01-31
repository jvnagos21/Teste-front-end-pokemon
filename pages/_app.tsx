import type { AppProps } from "next/app";
import GlobalStyle from "../src/Styles/Global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}
