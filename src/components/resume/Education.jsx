export default function Education({ education }) {
  const educationUi = education.map((edu, index) => {
    if (!(edu.title || edu.institute || edu.year)) return;
    return (
      <li key={`${edu?.title?.slice(0, 20)}-${edu.year}-${index}`}>
        {(edu.title || 'Course Name') +
          ' | ' +
          (edu.institute || 'Institute') +
          ' | ' +
          (edu.year || 'Year')}
      </li>
    );
  });
  if (
    educationUi.length > 0 &&
    !(educationUi.length === 1 && educationUi[0] === undefined)
  )
    return <ul>{educationUi}</ul>;

  return (
    <ul>
      <li>Course Name | Institute | Year</li>
    </ul>
  );
}
