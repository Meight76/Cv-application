import EditorSection from './Editor-section.jsx';
import InputSetup from './Input-setup.jsx';
import ContactInputs from './Contact-inputs.jsx';

export default function Editor({resumeInfo, resumeSet}) {

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
        <section className='editor-section'>
            <header className='editor-header'>
                <h2>Editor</h2>
            </header>
            <EditorSection title='Name'>
                <InputSetup value={name} id='name' placeholder='John' onChange={(e) => setName(e.target.value)}/>
            </EditorSection>
            <EditorSection title='Contact'>
                <ContactInputs contact={contact} setContact={setContact} />
            </EditorSection>
            <EditorSection title='Certifications'></EditorSection>
            <EditorSection title='Language'></EditorSection>
            <EditorSection title='Career Objective'></EditorSection>
            <EditorSection title='Key Skills'></EditorSection>
            <EditorSection title='Experience'></EditorSection>
            <EditorSection title='Education'></EditorSection>
            <EditorSection title='Project / Internship'></EditorSection>
        </section>
    );


    function intermediateSetValue(newValue, setValue, prop) {

    }
}
