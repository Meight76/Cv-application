export default function EditorSection({title, children}) {
    return (
        <>
            <h3 className="editor-section-title">{title}</h3>
            {children}
        </>
    );
}
