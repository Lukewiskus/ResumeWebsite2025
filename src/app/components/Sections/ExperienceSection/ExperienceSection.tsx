import { experiences } from '@/app/StaticData/experiences-content';
import './experiences.scss';
import { FormBox } from '../FormBox/FormBox';
import { FormBoxInterface } from '@/app/StaticData/formBoxInterface';


export function ExperiencesSection() {
  return (
    <div className="experiences">
      {experiences.map((exp : FormBoxInterface) => (
        <FormBox key={exp.id} experience={exp} />
      ))}
    </div>
  );
}