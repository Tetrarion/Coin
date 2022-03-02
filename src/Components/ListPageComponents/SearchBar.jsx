export default function SearchBar({ search }) {
  return (
    <div className="search">
      <img className="search__img" src="https://cdn-icons.flaticon.com/png/512/3641/premium/3641364.png?token=exp=1646225593~hmac=0204d9213d80548093e9f17f2b738038" alt="loop__image" />
      <input className="search__bar" type="text" placeholder="Search bar" onChange={(event) => search(event.target.value)} />
    </div>
  );
}
