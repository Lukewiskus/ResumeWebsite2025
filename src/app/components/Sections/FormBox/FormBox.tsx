import { FormBoxInterface } from '@/app/StaticData/formBoxInterface';
import './form-box.scss';

interface Props {
  experience: FormBoxInterface;
}

export function FormBox({ experience }: Props) {
  return (
    <div className="form-box">
      <h3>{experience.role} • {experience.company}</h3>
      <span className="date-range">{experience.dateRange}</span>
      <p>{experience.description}</p>
    </div>
  );
}