/* eslint-disable @next/next/google-font-display */
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            data-href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Lato&family=Open+Sans&display=swap"
            crossOrigin
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
            crossOrigin
          />
          <link
            href="https://fonts.googleapis.com/css?family=Michroma&display=optional"
            rel="stylesheet"
            crossOrigin
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
