import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  const [currentCommand, setCurrentCommand] = useState("");
  const [selectedOption, setSelectedOption] = useState<number>(0);

  const menuOptions = [
    { cmd: "blog", path: "/blog", desc: "Read my thoughts on engineering" },
    { cmd: "projects", path: "/projects", desc: "View my work and experiments" },
    { cmd: "contact", path: "/contact", desc: "Get in touch with me" },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedOption((prev) => (prev > 0 ? prev - 1 : menuOptions.length - 1));
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedOption((prev) => (prev < menuOptions.length - 1 ? prev + 1 : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        router.push(menuOptions[selectedOption].path);
      } else if (e.key >= "1" && e.key <= "3") {
        const index = parseInt(e.key) - 1;
        setSelectedOption(index);
        router.push(menuOptions[index].path);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedOption, router]);

  return (
    <div className="py-4 font-mono">
      {/* Terminal Window */}
      <div className="bg-navy-900 border-2 border-navy-700 rounded-lg overflow-hidden shadow-2xl shadow-navy-950/50">
        {/* Terminal Header */}
        <div className="bg-navy-800 px-4 py-2 flex items-center gap-2 border-b border-navy-700">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-rust-500"></div>
            <div className="w-3 h-3 rounded-full bg-gold-500"></div>
            <div className="w-3 h-3 rounded-full bg-olive-500"></div>
          </div>
          <span className="text-slate-400 text-sm ml-2">rohit@musti: ~</span>
        </div>

        {/* Terminal Content */}
        <div className="p-6 space-y-4 text-sm leading-relaxed">
          {/* System Info */}
          <div>
            <div className="flex items-start">
              <span className="text-terracotta-500">$</span>
              <span className="ml-2 text-slate-300">cat /home/rohit/about.txt</span>
            </div>
            <div className="mt-2 pl-4 space-y-2 text-slate-300">
              <div className="flex gap-2">
                <span className="text-gold-400">Name:</span>
                <span>Rohit Musti</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gold-400">Role:</span>
                <span>Senior Software Engineer</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gold-400">Company:</span>
                <a
                  href="https://read.ai/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold-400 hover:text-gold-300 underline"
                >
                  Read AI
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-navy-700 pt-4"></div>

          {/* Interactive Menu */}
          <div>
            <div className="flex items-start mb-3">
              <span className="text-terracotta-500">$</span>
              <span className="ml-2 text-slate-300">./explore.sh</span>
            </div>
            <div className="pl-4 space-y-1">
              <div className="text-slate-400 mb-2 text-xs">
                Use ↑↓ arrow keys or 1-3 to navigate, Enter to select:
              </div>
              {menuOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => router.push(option.path)}
                  onMouseEnter={() => setSelectedOption(index)}
                  className={`block w-full text-left px-3 py-2 rounded transition-all ${
                    selectedOption === index
                      ? "bg-navy-800 border-l-4 border-gold-500"
                      : "border-l-4 border-transparent hover:bg-navy-900/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={selectedOption === index ? "text-terracotta-400" : "text-slate-500"}>
                      [{index + 1}]
                    </span>
                    <span className={selectedOption === index ? "text-gold-400" : "text-slate-400"}>
                      {option.cmd}
                    </span>
                    <span className="text-slate-500">-</span>
                    <span className="text-slate-400 text-xs">{option.desc}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-navy-700 pt-4"></div>

          {/* Command Prompt */}
          <div className="flex items-start">
            <span className="text-gold-400">rohit@musti</span>
            <span className="text-slate-500">:</span>
            <span className="text-terracotta-400">~</span>
            <span className="text-slate-500">$</span>
            <span className="ml-2 text-slate-400 animate-pulse">▊</span>
          </div>

          {/* Help Text */}
          <div className="pt-2 text-xs text-slate-500 border-t border-navy-700">
            <div>💡 Tip: Type commands or use keyboard shortcuts to navigate</div>
            <div className="mt-1">Press 1-3 for quick access | ↑↓ to select | Enter to go</div>
          </div>
        </div>
      </div>

      {/* Footer Commands */}
      <div className="mt-6 text-xs text-slate-500 font-mono text-center">
        <span className="text-gold-400">Available commands:</span> blog | projects | contact | help
      </div>
    </div>
  );
};

export default Home;
