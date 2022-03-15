import "tailwindcss/tailwind.css";
import "animate.css/animate.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { DarkModeProvider } from "../Context/DarkModeContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
