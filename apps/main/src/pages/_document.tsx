import Document, { Head, Html, Main, NextScript } from 'next/document';

import { GlobalStyles } from '~/shared/styles/global';

export default class DoooerDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/favicon.ico" />
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
