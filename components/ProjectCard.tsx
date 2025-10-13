import { link, project_entry } from "components/projects";
import { Fragment } from "react";

function ProjectLink(props: { link: link }) {
  return (
    <li className="mb-1">
      <a
        href={props.link.link}
        className="text-peacock-400 hover:text-peacock-300 transition-colors duration-200 inline-flex items-center gap-1 text-sm"
        target="_blank"
        rel="noreferrer"
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        {props.link.name}
      </a>
    </li>
  );
}

export default function ProjectCard(props: {
  project: project_entry;
  index: number;
}) {
  return (
    <div key={props.index} className="card group">
      <div className="flex flex-col h-full">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-saffron-400 mb-3 group-hover:text-saffron-300 transition-colors duration-200">
          {props.project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-300 leading-relaxed mb-4 flex-grow">
          {props.project.description}
        </p>

        {/* Links Section */}
        <div className="space-y-3 pt-4 border-t border-indigo-700">
          {props.project.project_link && (
            <Fragment>
              <div>
                <p className="font-semibold text-sm text-slate-400 mb-2 flex items-center gap-2">
                  <span className="text-saffron-500">🔗</span> Project Links
                </p>
                <ul className="space-y-1">
                  {props.project.project_link.map((project_link: link, i) => {
                    return <ProjectLink link={project_link} key={i} />;
                  })}
                </ul>
              </div>
            </Fragment>
          )}

          {props.project.code_link && (
            <Fragment>
              <div>
                <p className="font-semibold text-sm text-slate-400 mb-2 flex items-center gap-2">
                  <span className="text-gold-500">💻</span> Code Links
                </p>
                <ul className="space-y-1">
                  {props.project.code_link.map((project_link: link, i) => {
                    return (
                      <li key={i} className="mb-1">
                        <a
                          href={project_link.link}
                          className="text-peacock-400 hover:text-peacock-300 transition-colors duration-200 inline-flex items-center gap-1 text-sm"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          {project_link.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
}
