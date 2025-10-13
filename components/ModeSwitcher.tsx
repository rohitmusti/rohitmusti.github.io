import { useState, useEffect } from "react";
import { useRouter } from "next/router";

type Mode = "blog" | "projects";

interface ModeSwitcherProps {
  currentMode?: Mode;
}

export default function ModeSwitcher({ currentMode }: ModeSwitcherProps) {
  const router = useRouter();
  const [selectedMode, setSelectedMode] = useState<Mode>(currentMode || "blog");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (currentMode) {
      setSelectedMode(currentMode);
    }
  }, [currentMode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSelectedMode("blog");
        router.push("/blog");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setSelectedMode("projects");
        router.push("/projects");
      } else if (e.key === "b" && !isInputFocused()) {
        e.preventDefault();
        setSelectedMode("blog");
        router.push("/blog");
      } else if (e.key === "p" && !isInputFocused()) {
        e.preventDefault();
        setSelectedMode("projects");
        router.push("/projects");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  const isInputFocused = () => {
    const activeElement = document.activeElement;
    return (
      activeElement instanceof HTMLInputElement ||
      activeElement instanceof HTMLTextAreaElement
    );
  };

  const handleModeClick = (mode: Mode) => {
    setSelectedMode(mode);
    router.push(`/${mode === "blog" ? "blog" : "projects"}`);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center py-12 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-peacock-400 to-saffron-400 bg-clip-text text-transparent mb-2">
          What would you like to explore?
        </h2>
        <p className="text-slate-400 text-sm font-mono">
          Use arrow keys (← →) or click to switch modes
        </p>
      </div>

      <div className="flex gap-6 items-center">
        {/* Blog Mode */}
        <button
          onClick={() => handleModeClick("blog")}
          className={`group relative px-8 py-6 rounded-xl border-2 transition-all duration-300 ${
            selectedMode === "blog"
              ? "border-peacock-500 bg-indigo-800 shadow-lg shadow-peacock-500/20"
              : "border-indigo-700 bg-indigo-900 hover:border-peacock-500/50"
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">📝</div>
            <div className="text-xl font-bold text-peacock-400">Blog</div>
            <div className="text-sm text-slate-400 font-mono mt-1">press b</div>
          </div>
          {selectedMode === "blog" && (
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <div className="w-2 h-2 rounded-full bg-peacock-500 animate-pulse-subtle"></div>
            </div>
          )}
        </button>

        {/* Divider with arrows */}
        <div className="flex flex-col items-center text-slate-600">
          <div className="text-2xl">⟷</div>
          <div className="text-xs font-mono mt-1">← →</div>
        </div>

        {/* Projects Mode */}
        <button
          onClick={() => handleModeClick("projects")}
          className={`group relative px-8 py-6 rounded-xl border-2 transition-all duration-300 ${
            selectedMode === "projects"
              ? "border-saffron-500 bg-indigo-800 shadow-lg shadow-saffron-500/20"
              : "border-indigo-700 bg-indigo-900 hover:border-saffron-500/50"
          }`}
        >
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">🚀</div>
            <div className="text-xl font-bold text-saffron-400">Projects</div>
            <div className="text-sm text-slate-400 font-mono mt-1">press p</div>
          </div>
          {selectedMode === "projects" && (
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
              <div className="w-2 h-2 rounded-full bg-saffron-500 animate-pulse-subtle"></div>
            </div>
          )}
        </button>
      </div>

      {/* Terminal-style hint */}
      <div className="mt-8 font-mono text-xs text-slate-500 bg-indigo-950 px-4 py-2 rounded border border-indigo-800">
        <span className="text-peacock-500">$</span> explore --mode={selectedMode}{" "}
        <span className="animate-pulse">▊</span>
      </div>
    </div>
  );
}
