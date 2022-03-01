export default function Search({ sortName }) {
  return (
    <select className="list-page__select" onChange={(event) => sortName(event.target.value)}>
      <option className="list-page__select-item" value="rank">rank</option>
      <option className="list-page__select-item" value="name">name</option>
      <option className="list-page__select-item" value="price">price</option>
    </select>
  );
}
