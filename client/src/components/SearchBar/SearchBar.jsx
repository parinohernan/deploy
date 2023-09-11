import style from "./SearchBar.module.css";

const SearchBar = (props) => {
  const { handleFilterByName } = props;
  return (
    <div className={style.divBusqueda}>
      <h2>Busqueda :</h2>
      <input type="text" onChange={handleFilterByName} />
    </div>
  );
};

export default SearchBar;
