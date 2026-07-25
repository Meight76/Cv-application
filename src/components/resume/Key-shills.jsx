export default function KeySkills({ keySkills }) {
  const { technical, softSkills } = keySkills;
  const techInfo =
    technical.length === 0 ? ['[Some Technical Skills]'] : technical;
  const softInfo = technical.length === 0 ? ['[Some Soft Skill]'] : softSkills;
  return (
    <ul>
      <li>
        <span>Technical:</span>
        <span>{techInfo.join(' ')}</span>
      </li>
      <li>
        <span>SoftSkills:</span>
        <span>{softInfo.join(' ')}</span>
      </li>
    </ul>
  );
}
