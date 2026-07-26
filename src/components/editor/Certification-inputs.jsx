import { Fragment } from 'react';
import InputSetup from './Input-setup.jsx';

export default function CertificationInput(certifications, setCertifications) {
  function handleChange(e, index, prop) {
    const newValue = e.target.value;
    if (certifications[index] === undefined)
      throw new Error("Couldn't find obj index");
    const newCertObj = { ...certifications[index] };
    newCertObj[prop] = newValue;
    setCertifications(
      certifications.map((el, i) => {
        if (i === index) return newCertObj;
        return el;
      })
    );
  }
  return (index) => {
    const certObj = certifications[index];
    if (!certObj) throw new Error('Certification not found');
    return (
      <Fragment key={certObj.id}>
        <InputSetup
          id={`title-${certObj.id}`}
          label="title"
          value={certObj.title || ''}
          onChange={(e) => handleChange(e, index, 'title')}
          placeholder="programming languages (example)"
        />
        <InputSetup
          id={`institute-${certObj.id}`}
          label="institute"
          value={certObj.institute || ''}
          onChange={(e) => handleChange(e, index, 'institute')}
          placeholder="xyz universe (example)"
        />
        <InputSetup
          id={`year-${certObj.id}`}
          label="year"
          value={certObj.year || ''}
          onChange={(e) => handleChange(e, index, 'year')}
          placeholder="2014 (example)"
        />
      </Fragment>
    );
  };
}
