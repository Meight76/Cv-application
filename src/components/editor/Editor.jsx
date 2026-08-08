import EditorSection from './Editor-section.jsx';
import RepeatableInputSection from './Repeatable-input.jsx';
import InputSetup from './Input-setup.jsx';
import ContactInputs from './Contact-inputs.jsx';
import CertificationInputs from './Certification-inputs.jsx';
import LanguagesInputs from './Languages-input.jsx';
import ExperienceInputs from './Experience-inputs.jsx';
import EducationInputs from './Education-inputs.jsx';
import ProjectInputs from './Project-inputs.jsx';

export default function Editor({ resumeInfo, resumeSet }) {
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
  } = resumeInfo;

  const {
    setContact,
    setCertifications,
    setLanguages,
    setCareerObjective,
    setKeySkills,
    setEducation,
    setExperience,
    setProjects,
    setName,
  } = resumeSet;

  return (
    <section className="editor">
      <header className="editor-header">
        <h2>Editor</h2>
      </header>
      <EditorSection title="Name" sectionClass='name-input-section'>
        <InputSetup
          value={name || ''}
          id="name"
          placeholder="John"
          onChange={(e) => setName(e.target.value)}
        />
      </EditorSection>
      <EditorSection title="Contact">
        <ContactInputs contact={contact} setContact={setContact} divClass='contact-input-section' />
      </EditorSection>
      <RepeatableInputSection
        title="Certifications"
        repeat={certifications.length === 0 ? 1 : certifications.length}
        render={CertificationInputs}
        value={certifications}
        setFunction={setCertifications}
        fieldName="certification"
      />
      <RepeatableInputSection
        title="Language"
        repeat={languages.length === 0 ? 1 : languages.length}
        value={languages}
        setFunction={setLanguages}
        fieldName="languages"
        render={LanguagesInputs}
      />
      <EditorSection title="Career Objective">
        <label htmlFor="career-objective">Career Objective</label>
        <textarea
          name="career-objective"
          id="career-objective"
          placeholder="i want to be a programmer"
          onChange={(e) => setCareerObjective(e.target.value)}
          value={careerObjective}
        ></textarea>
      </EditorSection>
      <EditorSection title="Key Skills">
        <InputSetup
          id="technical-skills"
          value={keySkills.techSkills || ''}
          placeholder="ms office, programming languages, tools"
          onChange={(e) =>
            setKeySkills({ ...keySkills, techSkills: e.target.value })
          }
        />
        <InputSetup
          id="soft-skills"
          value={keySkills.softSkills || ''}
          placeholder="communication, team work"
          onChange={(e) =>
            setKeySkills({ ...keySkills, softSkills: e.target.value })
          }
        />
      </EditorSection>
      <RepeatableInputSection
        title="Experience"
        repeat={experience.length}
        fieldName="Experience"
        setFunction={setExperience}
        value={experience}
        render={ExperienceInputs}
      />
      <RepeatableInputSection
        title="Education"
        repeat={education.length}
        fieldName="education"
        setFunction={setEducation}
        value={education}
        render={EducationInputs}
      />
      <RepeatableInputSection
        title="Projects"
        repeat={projects.length}
        fieldName="Projects"
        setFunction={setProjects}
        value={projects}
        render={ProjectInputs}
      />
    </section>
  );
}
