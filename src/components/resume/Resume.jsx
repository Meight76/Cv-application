import ResumeSection from './Resume-section.jsx';
import UserIcon from '../../icons/User-cicle.jsx';
import Contact from './Contact.jsx';
import Certifications from './Certifications.jsx';
import Language from './Languages.jsx';
import KeySkills from './Key-shills.jsx';
import Experience from './Experience.jsx';
import Education from './Education.jsx';
import Project from './Project.jsx';

export default function Resume({ resume }) {
  const {
    // object containg phone, email, location, linkedin properties
    contact,
    // array containg objects with name, institute, year properties
    certifications,
    // array containg objects with name and level properties
    languages,
    // just a string
    careerObjective,
    // object containg technical and softSkills properties both being an array of strings
    keySkills,
    // array containg {jobTitle, companyName, initialDate, finalDate, achievements}'s
    experience,
    // array containg {course, institute, year}'s
    education,
    // array containg {type, title, companyName, description, tech}
    projects,
    // just a string
    name,
  } = resume;
  return (
    <section className="resume-preview">
      <header className="resume-header">
        <h1>{name || '[YOUR FULL NAME]'}</h1>
        </header>
      <section className="resume-sidebar">
        <UserIcon />
        <ResumeSection title="contact">
          <Contact contactInfo={contact} />
        </ResumeSection>
        <ResumeSection title="certifications">
          <Certifications certifications={certifications} />
        </ResumeSection>
        <ResumeSection title="languages">
          <Language languages={languages} />
        </ResumeSection>
      </section>
      <section className="resume-main">
        <ResumeSection title="career objective">
          <p className="career-objective-para">
            {careerObjective || '[Tell your objective]'}
          </p>
        </ResumeSection>
        <ResumeSection title="key skills">
          <KeySkills keySkills={keySkills} />
        </ResumeSection>
        <ResumeSection title="Experience">
          <Experience experience={experience}/>
        </ResumeSection>
        <ResumeSection title="Education">
          <Education education={education} />
        </ResumeSection>
        <ResumeSection title="Projects / Internship">
          <Project projects={projects} />
        </ResumeSection>
      </section>
    </section>
  );
}
