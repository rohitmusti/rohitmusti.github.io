import "tailwindcss/tailwind.css";
import "styles/globals.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen text-slate-100">
      <main className="container mx-auto px-4 max-w-7xl">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
