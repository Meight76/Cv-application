import { Fragment } from 'react';
import InputSetup from './Input-setup.jsx';

export default function EducationInputs(education, setEducation) {
  function handleChange(e, prop, ArrIndex) {
    const newObj = { ...education[ArrIndex] };
    newObj[prop] = e.target.value;
    setEducation(
      education.map((el, mapIndex) => {
        if (mapIndex === ArrIndex) return newObj;
        return el;
      })
    );
  }
  return (index) => {
    const eduObj = education[index];
    return (
      <Fragment key={eduObj.id}>
        <InputSetup
          id={`title-${eduObj.id}`}
          label="title"
          value={eduObj.title || ''}
          placeholder="programming language (example)"
          onChange={(e) => handleChange(e, 'title', index)}
        />
        <InputSetup
          id={`institute-${eduObj.id}`}
          label="institute"
          value={eduObj.institute || ''}
          placeholder="xyz university (example)"
          onChange={(e) => handleChange(e, 'institute', index)}
        />
        <InputSetup
          id={`year-${eduObj.id}`}
          label="year"
          value={eduObj.year || ''}
          placeholder="2014 (example)"
          onChange={(e) => handleChange(e, 'year', index)}
        />
      </Fragment>
    );
  };
}
