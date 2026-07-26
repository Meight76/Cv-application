import { Fragment } from 'react';
import InputSetup from './Input-setup.jsx';
import RepeatableInputSection from './Repeatable-input.jsx';
import AchievementInputs from './Achievement-inputs.jsx';

export default function ExperienceInputs(experiences, setExperiences) {
  function handleChange(e, prop, index) {
    const newObj = { ...experiences[index] };
    newObj[prop] = e.target.value;
    setExperiences(
      experiences.map((el, mapIndex) => {
        if (mapIndex === index) return newObj;
        return el;
      })
    );
  }

  function changeAchievement(newArr, index) {
    const newObj = { ...experiences[index], achievements: newArr };
    setExperiences(
      experiences.map((el, mapIndex) => {
        if (mapIndex === index) return newObj;
        return el;
      })
    );
  }

  return (index) => {
    const xpObj = experiences[index];
    if (!xpObj) throw new Error("couldn't find experience");
    return (
      <Fragment key={xpObj.id}>
        <InputSetup
          id={`job-title-${xpObj.id}`}
          label="job title"
          placeholder="programmer (example)"
          value={xpObj.jobTitle || ''}
          onChange={(e) => handleChange(e, 'jobTitle', index)}
        />
        <InputSetup
          id={`company-name-${xpObj.id}`}
          label="company name"
          placeholder="microsoft (example)"
          value={xpObj.companyName || ''}
          onChange={(e) => handleChange(e, 'companyName', index)}
        />
        <InputSetup
          id={`initial-date-${xpObj.id}`}
          label="initial date"
          placeholder="02/2014 (example)"
          value={xpObj.initialDate || ''}
          onChange={(e) => handleChange(e, 'initialDate', index)}
        />
        <InputSetup
          id={`final-date-${xpObj.id}`}
          label="final date"
          placeholder="05/2016"
          value={xpObj.finalDate || ''}
          onChange={(e) => handleChange(e, 'finalDate', index)}
        />
        <RepeatableInputSection
          title=""
          repeat={xpObj.achievements.length}
          fieldName="achievements"
          setFunction={(newVal) => changeAchievement(newVal, index)}
          value={xpObj.achievements}
          showTitle={false}
          isObj={false}
          render={AchievementInputs}
        />
      </Fragment>
    );
  };
}
