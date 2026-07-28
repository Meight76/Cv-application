export default function KeySkills({ keySkills }) {
  const { techSkills, softSkills } = keySkills;

  return (
    <ul>
      <li>
        <strong>Technical:</strong>
        <span>{techSkills}</span>
      </li>
      <li>
        <strong>SoftSkills:</strong>
        <span>{softSkills}</span>
      </li>
    </ul>
  );
}
