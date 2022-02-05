import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";
import "@fontsource/roboto";
import "@fontsource/luckiest-guy";
import "@fontsource/oswald";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎲</text></svg>"
        ></link>
        {/*
          <meta name="application-name" content="PWA App" />
          <meta name="apple-mobile-web-app-title" content="PWA App" />
          <meta name="description" content="Best PWA App in the world" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
