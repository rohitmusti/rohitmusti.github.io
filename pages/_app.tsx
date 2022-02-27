import "tailwindcss/tailwind.css";
import "styles/globals.css";
import Nav from "components/nav";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="dark w-full h-full md:w-screen md: h-screen text-white">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
