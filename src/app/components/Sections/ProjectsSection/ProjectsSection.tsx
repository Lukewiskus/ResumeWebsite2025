import { FormBoxInterface } from "@/app/StaticData/formBoxInterface";
import { FormBox } from "../FormBox/FormBox";
import { projects } from "@/app/StaticData/projects-content";
import "./projects.scss";
export function ProjectsSection() {
  return (
    <div className="projects">
      {projects.map((exp : FormBoxInterface) => (
        <FormBox key={exp.id} experience={exp} />
      ))}
    </div>
  );
}