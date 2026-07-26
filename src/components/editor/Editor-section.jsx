export default function EditorSection({ title, children }) {
  return (
    <section className="editor-sectio">
      <h3 className="editor-section-title">{title}</h3>
      {children}
    </section>
  );
}
