import ResumeSection from './Resume-section.jsx';
import UserIcon from '../icons/User-cicle.jsx';
import Contact from './Contact.jsx';
import Certifications from './Certifications.jsx';
import Language from './Languages.jsx';
import { useState } from 'react';

export default function Resume({ resume }) {
  const {
    contact,
    certifications,
    languages,
    careerObjective,
    keySkills,
    education,
    experience,
    projects,
    name,
  } = resume;
  return (
  <>
    <header className="resume-header">{name || '[YOUR FULL NAME]'}</header>
    <aside className="resume-aside">
      <UserIcon/>
      <ResumeSection title="contact">
        <Contact contactInfo={contact} />
      </ResumeSection>
      <ResumeSection title="certifications">
        <Certifications certifications={certifications}/>
      </ResumeSection>
      <ResumeSection title="languages">
        <Language languages={languages} />
      </ResumeSection>
    </aside>
    <main className="resume-main"></main>
  </>
  );
}
