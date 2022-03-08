export default function Select({ func, names }) {
  return (
    <div className="select">
      <select className="select__list" onChange={(event) => func(event.target.value)}>
        {
          names.map((element) => (
            <option className="select__list-item" value={element}>{element}</option>
          ))
        }
      </select>
    </div>
  );
}
