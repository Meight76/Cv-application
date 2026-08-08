export default function InputSetup({
  id,
  label,
  value,
  onChange,
  type = 'text',
  placeholder = '',
  inputClass=''
}) {
  return (
    <div className={['input-setup', (label || id)].join(" ")}>
      <label htmlFor={id}>{label || id}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        id={id}
        name={id}
        placeholder={placeholder}
        className={inputClass}
      />
    </div>
  );
}
