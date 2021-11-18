import { link, project_entry } from "components/projects";
import { Fragment } from "react";

export default function ProjectCard(props: {
  project: project_entry;
  index: number;
}) {
  return (
    <div key={props.index} className="border-2 border-white rounded-lg m-3 p-5">
      <p className="font-semibold pb-2">{props.project.title}</p>
      <p className="font-medium text-sm">{props.project.description}</p>
      {props.project.project_link && (
        <Fragment>
          <p className="font-semibold text-sm">Project Links</p>
          <ul>
            {props.project.project_link.map((project_link: link, i) => {
              return (
                <li>
                  <a
                    href={project_link.link}
                    className="underline text-sm hover:text-red-400"
                  >
                    {project_link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </Fragment>
      )}
      {props.project.code_link && (
        <Fragment>
          <p className="font-semibold text-sm">Code Links</p>
          <ul>
            {props.project.code_link.map((project_link: link, i) => {
              return (
                <li>
                  <a
                    href={project_link.link}
                    className="underline text-sm hover:text-red-400"
                  >
                    {project_link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </Fragment>
      )}
    </div>
  );
}
