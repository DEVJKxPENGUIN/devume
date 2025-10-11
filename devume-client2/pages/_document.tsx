import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Devume - 개발자를 위한 포트폴리오 사이트" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}