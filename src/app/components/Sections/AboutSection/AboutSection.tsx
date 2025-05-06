import { aboutContent, AboutContentInterface } from "@/app/StaticData/about-content";
import "./about-section.scss"

export function AboutSection() {
    return (
      <div className="about-section">
        {aboutContent.map((exp : AboutContentInterface) => (
          <p key={exp.id}>{exp.section}</p>
        ))}
      </div>
    );

}