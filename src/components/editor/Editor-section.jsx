export default function EditorSection({ title, sectionClass , children }) {
  return (
    <section className={["editor-section", sectionClass].join(' ')}>
      <h3 className="editor-section-title">{title}</h3>
      {children}
    </section>
  );
}
