type linkType = { url: string; text: string };
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();

  const navLinks = [
    { text: "About", url: "/" },
    { text: "Projects", url: "/projects" },
    { text: "Blog", url: "/blog" },
    { text: "Contact", url: "/contact" },
  ];

  const isActive = (url: string) => {
    if (url === "/") {
      return router.pathname === "/";
    }
    return router.pathname.startsWith(url);
  };

  return (
    <nav className="border-b border-indigo-800 backdrop-blur-sm bg-indigo-900/80 sticky top-0 z-50 shadow-lg shadow-indigo-950/50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <a className="group flex items-center gap-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-peacock-400 to-saffron-400 bg-clip-text text-transparent group-hover:from-peacock-300 group-hover:to-saffron-300 transition-all duration-200">
                  Rohit Musti
                </span>
                <span className="font-mono text-xs text-slate-500 hidden sm:inline">
                  ~/
                </span>
              </a>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {navLinks.map((navLink: linkType, i: number) => {
              const active = isActive(navLink.url);
              return (
                <Link href={navLink.url} key={i}>
                  <a
                    className={`relative px-4 py-2 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 ${
                      active
                        ? "text-peacock-400 bg-indigo-800"
                        : "text-slate-300 hover:text-peacock-400 hover:bg-indigo-800/50"
                    }`}
                  >
                    {navLink.text}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-peacock-500 animate-pulse-subtle"></span>
                    )}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Terminal-style bottom border with Indian colors */}
      <div className="h-px bg-gradient-to-r from-saffron-500/20 via-peacock-500/30 to-gold-500/20"></div>
    </nav>
  );
}
