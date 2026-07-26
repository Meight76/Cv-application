export default function CountBtn({ count, setCount, title }) {
  return <button onChange={() => setCount(count + 1)}>{title}</button>;
}
