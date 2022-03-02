const loopImage = require('../../images/3641364.png');

export default function SearchBar({ search }) {
  return (
    <div className="search">
      <img className="search__img" src={loopImage} alt="loop__image" />
      <input className="search__bar" type="text" placeholder="Search bar" onChange={(event) => search(event.target.value)} />
    </div>
  );
}
