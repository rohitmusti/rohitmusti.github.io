import type { NextPage } from "next";
import { projects, project_entry, link } from "components/projects";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Projects: NextPage = () => {
  const router = useRouter();
  const [selectedProject, setSelectedProject] = useState<number>(0);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedProject((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedProject((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
      } else if (e.key === "Enter") {
        e.preventDefault();
        setExpandedProject(expandedProject === selectedProject ? null : selectedProject);
      } else if (e.key === "h" || e.key === "Escape") {
        e.preventDefault();
        if (expandedProject !== null) {
          setExpandedProject(null);
        } else {
          router.push("/");
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, expandedProject, router]);

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
            <span className="text-slate-400 text-sm ml-2">rohit@musti: ~/projects</span>
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
              <span className="ml-2 text-slate-300">ls -la ~/projects</span>
            </div>
            <div className="mt-2 pl-4 text-slate-400 text-xs">
              total {projects.length} projects
            </div>
          </div>

          <div className="border-t border-navy-700 pt-4"></div>

          {/* Projects List */}
          <div className="space-y-2">
            {projects.map((project, index) => (
              <div key={index}>
                <button
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  onMouseEnter={() => setSelectedProject(index)}
                  className={`block w-full text-left px-3 py-3 rounded transition-all ${
                    selectedProject === index
                      ? "bg-navy-800 border-l-4 border-rust-500"
                      : "border-l-4 border-transparent hover:bg-navy-800/50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`text-xs mt-1 ${selectedProject === index ? "text-gold-400" : "text-slate-500"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <div className={`font-semibold ${selectedProject === index ? "text-terracotta-400" : "text-slate-300"}`}>
                        {project.title}
                      </div>
                    </div>
                    <span className="text-slate-500 text-xs">
                      {expandedProject === index ? "[-]" : "[+]"}
                    </span>
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedProject === index && (
                  <div className="ml-8 mt-2 pl-4 border-l-2 border-navy-700 space-y-3 text-xs">
                    <p className="text-slate-300 leading-relaxed">{project.description}</p>

                    {project.project_link && (
                      <div>
                        <div className="text-gold-400 font-semibold mb-1">🔗 Links:</div>
                        <ul className="space-y-1 pl-4">
                          {project.project_link.map((link: link, i: number) => (
                            <li key={i}>
                              <a
                                href={link.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gold-400 hover:text-gold-300 underline"
                              >
                                → {link.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.code_link && (
                      <div>
                        <div className="text-gold-400 font-semibold mb-1">💻 Code:</div>
                        <ul className="space-y-1 pl-4">
                          {project.code_link.map((link: link, i: number) => (
                            <li key={i}>
                              <a
                                href={link.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-gold-400 hover:text-gold-300 underline"
                              >
                                → {link.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-navy-700 pt-4"></div>

          {/* Command Prompt */}
          <div className="flex items-start">
            <span className="text-gold-400">rohit@musti</span>
            <span className="text-slate-500">:</span>
            <span className="text-terracotta-400">~/projects</span>
            <span className="text-slate-500">$</span>
            <span className="ml-2 text-slate-400 animate-pulse">▊</span>
          </div>

          {/* Help Text */}
          <div className="pt-2 text-xs text-slate-500 border-t border-navy-700">
            <div>💡 Navigation: ↑↓ to select | Enter to expand/collapse | h/ESC to go home</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
