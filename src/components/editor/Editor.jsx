import EditorSection from './Editor-section.jsx';
import RepeatableInputSection from './Repeatable-input.jsx';
import InputSetup from './Input-setup.jsx';
import ContactInputs from './Contact-inputs.jsx';
import CertificationInput from './Certification-inputs.jsx';
import LanguagesInput from './Languages-input.jsx';
import ExperienceInputs from './Experience-inputs.jsx';

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
    <section className="editor-section">
      <header className="editor-header">
        <h2>Editor</h2>
      </header>
      <EditorSection title="Name">
        <InputSetup
          value={name}
          id="name"
          placeholder="John"
          onChange={(e) => setName(e.target.value)}
        />
      </EditorSection>
      <EditorSection title="Contact">
        <ContactInputs contact={contact} setContact={setContact} />
      </EditorSection>
      <RepeatableInputSection
        title="Certifications"
        repeat={certifications.length === 0 ? 1 : certifications.length}
        render={CertificationInput}
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
        render={LanguagesInput}
      />
      <EditorSection title="Career Objective">
        <label htmlFor="career-objective">Career Objective</label>
        <textarea
          name="career-objective"
          id="career-objective"
          placeholder="i want to be a programmer"
          onChange={(e) => setCareerObjective(e.target.value)}
        >
          {careerObjective}
        </textarea>
      </EditorSection>
      <EditorSection title="Key Skills">
        <InputSetup
          id="technical-skills"
          value={keySkills.techSkills}
          placeholder="ms office, programming languages, tools"
          onChange={(e) =>
            setKeySkills({ ...keySkills, techSkills: e.target.value })
          }
        />
        <InputSetup
          id="soft-skills"
          value={keySkills.softSkills}
          placeholder="communication, team work"
          onChange={(e) =>
            setKeySkills({ ...keySkills, softSkills: e.target.value })
          }
        />
      </EditorSection>
      <RepeatableInputSection
        title='Experience'
        repeat={experience.length}
        fieldName='Experience'
        setFunction={setExperience}
        value={experience}
        render={ExperienceInputs}
        />
      <EditorSection title="Education"></EditorSection>
      <EditorSection title="Project / Internship"></EditorSection>
    </section>
  );
}
