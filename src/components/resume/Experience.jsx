import { Fragment } from 'react';
export default function Experience({ experience }) {
  const experienceUi = experience.map((xp, index) => {
    const { jobTitle, companyName, initialDate, finalDate, achievements } = xp;
    return (
      <Fragment key={`${jobTitle}-${companyName}-${index}`}>
        <h3 className="company-experience">
          {jobTitle || 'Job Title'}-{companyName || '[company name]'}{' '}
          {initialDate || '[Month, Year]'}-{finalDate || 'Month, Year'}
        </h3>
        <ul className="achievements-list">
          {achievements &&
            achievements.map((ach, i) => {
              if (ach === '') return;
              return (
                <li key={`${ach.slice(0, 20)}-${companyName}-${i}`}>
                  <p className="achievement-para">
                    <span>{ach}</span>
                    <span>{'#' + i}</span>
                  </p>
                </li>
              );
            })}
        </ul>
      </Fragment>
    );
  });
  if (experienceUi.length > 0) return experienceUi;

  return (
    <>
      <h3 className="company-experience">
        [Job Title]-[Company Name] [Month, Year]-[Month, Year]
      </h3>
      <ul className="achievement-list">
        <li>
          <p className="achievement-para">
            <span>Key responsability or achievement</span> <span>#1</span>
          </p>
        </li>
      </ul>
    </>
  );
}
