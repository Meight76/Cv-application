export default function RepeatableInputSection({
  title,
  render,
  repeat = 1,
  fieldName = '',
  setFunction,
  value,
  showTitle = true,
  isObj = true,
}) {
  function handleClickMore() {
    const copy = [...value];
    if (isObj) {
      copy.push({ id: crypto.randomUUID() });
    } else {
      copy.push('');
    }
    setFunction(copy);
  }

  function handleClickLess() {
    if (value.length <= 1) return;
    setFunction(value.slice(0, -1));
  }
  return (
    <section className="editor-section repeatable">
      {showTitle && <h3 className="editor-section-title">{title}</h3>}
      <div className="editor-section-btn-div">
      <button className="more-field" onClick={handleClickMore}>
        +
      </button>
      <button className="less-field" onClick={handleClickLess}>
        -
      </button>
      </div>
      {render &&
        Array.from({ length: repeat }, (_, index) =>
          render(value, setFunction)(index)
        )}
    </section>
  );
}
