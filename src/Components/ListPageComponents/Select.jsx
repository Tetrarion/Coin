export default function Select({ sortName }) {
  return (
    <div className="select">
      <select className="select__list" onChange={(event) => sortName(event.target.value)}>
        <option className="select__list-item" value="">--Please choose a sort name--</option>
        <option className="select__list-item" value="name">name</option>
        <option className="select__list-item" value="price">price</option>
      </select>
    </div>
  );
}
