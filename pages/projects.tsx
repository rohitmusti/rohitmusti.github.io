import type { NextPage } from "next";
import { projects } from "components/projects";
import ProjectCard from "components/ProjectCard";

const Projects: NextPage = () => {
  return (
    <div className="p-8 text-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project, i) => {
        return <ProjectCard index={i} project={project} />;
      })}
    </div>
  );
};

export default Projects;
