import type {Metadata} from "next";
import StoreProvider from "@/store/provider";
import ThemeProvider from "@/context/ThemeContext";
import Header from "@/components/layout/header/Header";
import {Footer} from "@/components/layout/Footer";
import {ThemeToggleButton} from "@/components/common/ThemeToggleButton";
import "@/styles/globals.css";
import BackgroundLoop from "@/components/layout/BackgroundLoop";
import AlertProvider from "@/context/AlertContext";

export const metadata: Metadata = {
  title: "Devume",
  description: "A portfolio sharing site for developers.",
};

const setInitialTheme = `
(function() {
  function getInitialTheme() {
    try {
      const savedTheme = window.localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  }
  document.documentElement.setAttribute('data-theme', getInitialTheme());
})();
`;

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="kr" suppressHydrationWarning>
      <body>
      <script dangerouslySetInnerHTML={{__html: setInitialTheme}}/>
      <StoreProvider>
        <ThemeProvider>
          <AlertProvider>
            <BackgroundLoop/>
            <Header/>
            {children}
            <Footer/>
            <ThemeToggleButton/>
          </AlertProvider>
        </ThemeProvider>
      </StoreProvider>
      </body>
      </html>
  );
}
