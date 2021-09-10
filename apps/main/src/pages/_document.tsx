import Document, { Head, Html, Main, NextScript } from 'next/document';

import { GlobalStyles } from '~/shared/styles/global';

export default class DoooerDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <title>Doooer</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no" />
          <meta name="description" content="Doooer Official Website" />
          <GlobalStyles />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
