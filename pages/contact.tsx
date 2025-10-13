import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Contact: NextPage = () => {
  const router = useRouter();
  const [selectedLink, setSelectedLink] = useState<number>(0);

  const contactLinks = [
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/rohitmusti/",
      icon: "💼",
      cmd: "linkedin",
    },
    {
      platform: "GitHub",
      url: "https://github.com/rohitmusti",
      icon: "💻",
      cmd: "github",
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedLink((prev) => (prev > 0 ? prev - 1 : contactLinks.length - 1));
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedLink((prev) => (prev < contactLinks.length - 1 ? prev + 1 : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        window.open(contactLinks[selectedLink].url, "_blank");
      } else if (e.key === "h" || e.key === "Escape") {
        e.preventDefault();
        router.push("/");
      } else if (e.key >= "1" && e.key <= "2") {
        const index = parseInt(e.key) - 1;
        window.open(contactLinks[index].url, "_blank");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedLink, router]);

  return (
    <div className="py-4 font-mono">
      {/* Terminal Window */}
      <div className="bg-navy-900 border-2 border-navy-700 rounded-lg overflow-hidden shadow-2xl shadow-navy-950/50">
        {/* Terminal Header */}
        <div className="bg-navy-800 px-4 py-2 flex items-center justify-between border-b border-navy-700">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rust-500"></div>
              <div className="w-3 h-3 rounded-full bg-gold-500"></div>
              <div className="w-3 h-3 rounded-full bg-olive-500"></div>
            </div>
            <span className="text-slate-400 text-sm ml-2">rohit@musti: ~/contact</span>
          </div>
          <Link href="/">
            <a className="text-xs text-slate-500 hover:text-gold-400 transition-colors">
              [press h or ESC to return home]
            </a>
          </Link>
        </div>

        {/* Terminal Content */}
        <div className="p-6 space-y-4 text-sm leading-relaxed">
          {/* Command */}
          <div>
            <div className="flex items-start">
              <span className="text-terracotta-500">$</span>
              <span className="ml-2 text-slate-300">cat /home/rohit/contact.txt</span>
            </div>
            <div className="mt-2 pl-4 text-slate-300 space-y-1">
              <p>Let&apos;s connect! I&apos;m always interested in discussing:</p>
              <ul className="list-none space-y-1 pl-4 text-slate-400 text-xs">
                <li>→ Engineering and software architecture</li>
                <li>→ Collaboration and team dynamics</li>
                <li>→ New opportunities and projects</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-navy-700 pt-4"></div>

          {/* Links Command */}
          <div>
            <div className="flex items-start">
              <span className="text-terracotta-500">$</span>
              <span className="ml-2 text-slate-300">./connect.sh</span>
            </div>
            <div className="mt-2 pl-4 text-slate-400 text-xs mb-2">
              Choose a platform to connect:
            </div>
          </div>

          {/* Contact Links */}
          <div className="space-y-1">
            {contactLinks.map((contact, index) => (
              <a
                key={index}
                href={contact.url}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setSelectedLink(index)}
                className={`block px-3 py-3 rounded transition-all ${
                  selectedLink === index
                    ? "bg-navy-800 border-l-4 border-gold-500"
                    : "border-l-4 border-transparent hover:bg-navy-800/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{contact.icon}</span>
                  <div className="flex-1">
                    <div className={`font-semibold ${selectedLink === index ? "text-gold-400" : "text-slate-300"}`}>
                      {contact.platform}
                    </div>
                    <div className="text-xs text-slate-500 font-mono mt-0.5">
                      {contact.url}
                    </div>
                  </div>
                  <span className={`text-xs ${selectedLink === index ? "text-gold-400" : "text-slate-500"}`}>
                    [{index + 1}]
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="border-t border-navy-700 pt-4"></div>

          {/* Command Prompt */}
          <div className="flex items-start">
            <span className="text-gold-400">rohit@musti</span>
            <span className="text-slate-500">:</span>
            <span className="text-terracotta-400">~/contact</span>
            <span className="text-slate-500">$</span>
            <span className="ml-2 text-slate-400 animate-pulse">▊</span>
          </div>

          {/* Help Text */}
          <div className="pt-2 text-xs text-slate-500 border-t border-navy-700">
            <div>💡 Navigation: ↑↓ to select | Enter to open | 1-2 for quick access | h/ESC to go home</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
