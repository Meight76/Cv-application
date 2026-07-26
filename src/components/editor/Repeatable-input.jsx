
export default function RepeatableInputSection({title, render, repeat = 1, fieldName='', setFunction, value}) {
  function handleClickMore() {
    const copy = [...value];
    copy.push({id: crypto.randomUUID()});
    setFunction(copy);
  }

  function handleClickLess() {
    if (value.length <= 1) return;
    setFunction(value.slice(0, -1));
  }
  return (
    <section className="editor-section repeatable">
      <h3 className="editor-section-title">{title}</h3>
      <button className='more-field' onClick={handleClickMore}>More {fieldName}</button>
      <button className='less-field' onClick={handleClickLess}>Less {fieldName}</button>
      {Array.from({ length: repeat }, (_, index) => render(value, setFunction)(index))}
    </section>
  );
}
