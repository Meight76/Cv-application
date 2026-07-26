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
  const [certifications, setCertifications] = useState([
    { title: null, institute: null, year: null, id: crypto.randomUUID() },
  ]);
  const [languages, setLanguages] = useState([
    { title: null, level: null, id: crypto.randomUUID() },
  ]);
  const [careerObjective, setCareerObjective] = useState('');
  const [keySkills, setKeySkills] = useState({
    techSkills: [],
    softSkills: [],
  });
  const [experience, setExperience] = useState([
    {
      jobTitle: null,
      companyName: null,
      initialDate: null,
      finalDate: null,
      achievements: [''],
      id: crypto.randomUUID(),
    },
  ]);
  const [education, setEducation] = useState([
    { title: null, institute: null, year: null, id: crypto.randomUUID() },
  ]);
  const [projects, setProjects] = useState([
    {
      title: null,
      companyName: null,
      description: null,
      tech: null,
      id: crypto.randomUUID(),
    },
  ]);
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
    setCertifications,
    setContact,
    setEducation,
    setExperience,
    setKeySkills,
    setLanguages,
    setCareerObjective,
    setProjects,
    setName,
  };

  return (
    <>
      <Resume resume={resumeInfo} />
      <Editor resumeInfo={resumeInfo} resumeSet={resumeSet} />
    </>
  );
}
