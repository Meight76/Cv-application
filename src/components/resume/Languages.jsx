export default function Language({ languages }) {
  const languagesUi = languages.map((lang, index) => {
    return (
      <li key={`${lang.title}-${lang.level}-${index}`}>
        {lang.title} {lang.level}
      </li>
    );
  });

  if (languagesUi.length > 0) {
    return <ul>{languagesUi}</ul>;
  }

  return (
    <ul>
      <li>[Language] [Level]</li>
    </ul>
  );
}
