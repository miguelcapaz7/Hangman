export default function DisplayField({ label, value }) {
  return (
    <div className="paragragh">
      <label>{label}:</label>&nbsp;&nbsp;
      <input type="text" value={value} disabled />
    </div>
  );
}