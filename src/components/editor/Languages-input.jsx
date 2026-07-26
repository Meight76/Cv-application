import { Fragment } from 'react';
import InputSetup from './Input-setup.jsx';

export default function LanguagesInput(languages, setLanguages) {
  function handleChange(e, prop, arrIndex) {
    if (languages[arrIndex] === undefined)
      throw new Error("Couldn't find obj index");
    const newObj = { ...languages[arrIndex] };
    newObj[prop] = e.target.value;
    setLanguages(
      languages.map((el, mapIndex) => {
        if (mapIndex === arrIndex) {
          return newObj;
        }
        return el;
      })
    );
  }

  return (index) => {
    const langObj = languages[index];
    if (!langObj) throw new Error("Couldn't find language");
    return (
      <Fragment key={langObj.id}>
        <InputSetup
          id={`title-${langObj.id}`}
          label="language"
          placeholder="english (example)"
          value={langObj.title || ''}
          onChange={(e) => handleChange(e, 'title', index)}
        />
        <InputSetup
          id={`level-${langObj.id}`}
          label="Level"
          placeholder="intermediate (example)"
          value={langObj.level || ''}
          onChange={(e) => handleChange(e, 'level', index)}
        />
      </Fragment>
    );
  };
}
