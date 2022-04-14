import "tailwindcss/tailwind.css";
import "animate.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DarkModeProvider } from "../Context/DarkModeContext";
import { ParallaxProvider } from "react-scroll-parallax";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <DarkModeProvider>
        <Component {...pageProps} />
      </DarkModeProvider>
    </ParallaxProvider>
  );
}

export default MyApp;
