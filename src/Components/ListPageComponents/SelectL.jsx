export default function SelectL({ func, names }) {
  return (
    <div className="select">
      <select className="select__list" onChange={(event) => func(event.target.value, event.target.id)}>
        {
            names.map((element) => (
              <option className="select__list-item" key={element.id} value={element.rateUsd} id={element.currencySymbol}>
                {element.id}
                {' '}
                {element.symbol}
              </option>
            ))
          }
      </select>
    </div>
  );
}
