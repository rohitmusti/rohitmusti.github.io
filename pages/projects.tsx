import type { NextPage } from "next";
import { projects } from "components/projects";

const Projects: NextPage = () => {
  return (
    <div className="p-8 text-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((proj, i) => {
        return (
          <div key={i} className="border border-white m-3 p-5">
            <p className="font-semibold pb-2">{proj.title}</p>
            <p className="font-medium text-sm">{proj.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
