import { Fragment } from 'react';
import InputSetup from './Input-setup.jsx';
export default function ProjectInputs(projects, setProjects) {
  function handleChange(e, prop, arrIndex) {
    const newObj = { ...projects[arrIndex] };
    newObj[prop] = e.target.value;
    setProjects(
      projects.map((el, mapIndex) => {
        if (arrIndex === mapIndex) return newObj;
        return el;
      })
    );
  }
  return (index) => {
    const projObj = projects[index];
    return (
      <Fragment key={projObj.id}>
        <InputSetup
          id={`title-${index}`}
          label="title"
          value={projObj.title || ''}
          placeholder="some cool project (example)"
          onChange={(e) => handleChange(e, 'title', index)}
        />
        <InputSetup
          id={`company-name-${index}`}
          label="Company name / Institute"
          value={projObj.companyName || ''}
          placeholder="microsoft"
          onChange={(e) => handleChange(e, 'companyName', index)}
        />
        <label htmlFor={`description-${index}`}>Description</label>
        <textarea
          id={`description-${index}`}
          value={projObj.description || ''}
          placeholder="some brief description"
          onChange={(e) => handleChange(e, 'description', index)}
        ></textarea>
        <InputSetup
          id={`tech-used-${index}`}
          label="technologies used"
          value={projObj.tech || ''}
          placeholder="some technology or tool you used (if any)"
          onChange={(e) => handleChange(e, 'tech', index)}
        />
      </Fragment>
    );
  };
}
