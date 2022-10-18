import { useEffect } from "react";
import "../styles/globals.css";
import { StoreProvider } from "../utils/Store";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <NextNProgress
        color="#f0c000"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}

export default MyApp;
