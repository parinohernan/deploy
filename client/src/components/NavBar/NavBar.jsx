import { Link } from "react-router-dom";
import { filterPaisByName, setCurrentPage } from "../../redux/action";
import style from "./NavBar.module.css";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const dispatch = useDispatch();

  const location = useLocation();

  const handleFilterByName = (e) => {
    //console.log(e.target.value);
    dispatch(filterPaisByName(e.target.value));
    dispatch(setCurrentPage(1));
  };

  return (
    <nav>
      <Link className={style.header} to="/home">
        <div className={style.divLogo}>
          <img
            src="../../../public/images/LogoCountries.jpg"
            alt="LogoHenryCountries"
          />
        </div>
      </Link>
      <div className={style.divNavBar}>
        {location.pathname !== "/home" && (
          <Link className={style.btn} to="/home">
            <h2>Home</h2>
          </Link>
        )}
        {location.pathname === "/home" && (
          // (
          //   <div className={style.divBusqueda}>
          //     <h2>Busqueda :</h2>
          //     <input type="text" onChange={handleFilterByName} />
          //   </div>
          // )
          <SearchBar handleFilterByName={handleFilterByName} />
        )}
        <Link className={style.btn} to="/create">
          <h2>Crear Actividad</h2>
        </Link>

        <Link className={style.btn} to="/about">
          <h2>About</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
