import { useState } from 'react';
import Resume from './components/resume/Resume.jsx';
import Editor from './components/editor/Editor.jsx';

export default function App() {
  const [contact, setContact] = useState({
    phone: null,
    email: null,
    location: null,
    linkedin: null,
  });
  const [certifications, setCertification] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [careerObjective, setCareerObjective] = useState('');
  const [keySkills, setKeySkills] = useState({ technical: [], softSkills: [] });
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState('');

  const resumeInfo = {
    contact,
    certifications,
    languages,
    careerObjective,
    keySkills,
    education,
    experience,
    projects,
    name,
  };

  const resumeSet = {
    setCertification,
    setContact,
    setEducation,
    setExperience,
    setKeySkills,
    setLanguages,
    setCareerObjective,
    setProjects,
    setName,
  }

  return (
    <>
      <Resume resume={resumeInfo} />
      <Editor resumeInfo={resumeInfo} resumeSet={resumeSet} />
    </>
  );
}
