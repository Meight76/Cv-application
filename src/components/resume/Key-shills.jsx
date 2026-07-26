export default function KeySkills({ keySkills }) {
  const { techSkills, softSkills } = keySkills;

  return (
    <ul>
      <li>
        <span>Technical:</span>
        <span>{techSkills}</span>
      </li>
      <li>
        <span>SoftSkills:</span>
        <span>{softSkills}</span>
      </li>
    </ul>
  );
}
