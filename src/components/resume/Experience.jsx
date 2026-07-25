import { Fragment } from "react";
export default function Experience({ experience }) {
    const experienceUi = experience.map((xp, index) => {
        const { jobTitle, companyName, initialDate, finalDate, achievements } =
          xp;
        return (
          <Fragment key={`${jobTitle}-${companyName}-${index}`}>
            <h3 className="company-experience">
              {jobTitle || 'Job Title'}-{companyName || '[company name]'}{' '}
              {initialDate || '[Month, Year]'}-{finalDate || 'Month, Year'}
            </h3>
            <ul className="achievements-list">
                {achievements.map((ach, i) => {
                    return (
                        <li key={`${ach.slice(0, 20)}-${companyName}-${i}`}>
                            <p className="achiement-para">
                                {ach + ' ' + '#' + i};
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
                        Key responsability or achievement #1
                    </p>
                </li>
            </ul>
        </>
    );
}
