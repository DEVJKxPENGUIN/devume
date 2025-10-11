import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';

// 폰트 import
import '@fontsource/jetbrains-mono';
import '@fontsource/fira-code';
import '@fontsource/roboto-mono';
import '@fontsource/source-code-pro';
import '@fontsource/orbitron';
import '@fontsource/rajdhani';
import '@fontsource/exo-2';
import '@fontsource/inter';
import '@fontsource/noto-sans-kr';
import '@fontsource/bebas-neue';
import '@fontsource/black-han-sans';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;