export default function Education({ education }) {
  const educationUi = education.map((edu, index) => {
    return (
      <li key={`${edu?.title?.slice(0, 20)}-${edu.year}-${index}`}>
        {edu.title + ' | ' + edu.institute + ' | ' + edu.year}
      </li>
    );
  });
  if (educationUi.length > 0) return <ul>{educationUi}</ul>;

  return (
    <ul>
      <li>Course Name | Institute | Year</li>
    </ul>
  );
}
