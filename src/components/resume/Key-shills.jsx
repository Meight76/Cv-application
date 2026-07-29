export default function KeySkills({ keySkills }) {
  const { techSkills, softSkills } = keySkills;

  return (
    <ul>
      <li>
        <strong className="skill-strong">Technical:</strong>
        <span>{techSkills}</span>
      </li>
      <li>
        <strong className="skill-strong">SoftSkills:</strong>
        <span>{softSkills}</span>
      </li>
    </ul>
  );
}
