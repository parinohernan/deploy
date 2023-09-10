import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { id, continents, name, population, area } = props;
  //console.log("id ", props);
  return (
    <div className={style.card}>
      <Link className={style.link} to={`/details/${id}`}>
        {/* <h2>pop : {population}</h2> */}
        <img
          className={style.flag}
          src={props.flag}
          alt="Flag{ + props.name} "
        />
        <div className={style.textCard}>
          <h2 className={style.h2}>{name}</h2>
        </div>
        <div className={style.textCard}>
          <h3>{continents}</h3>
        </div>
        {/* <h2>area: {area}</h2> */}
      </Link>
    </div>
  );
};

export default Card;

// return (
//   <div className={style.card}>
//     <Link className={style.link} to={`/details/${id}`}>
//       <div className={style.textCard}>
//         <h1>{name}</h1>
//         <h2>{continents}</h2>
//       </div>
//       <img
//         className={style.flag}
//         src={props.flag}
//         alt="Flag{ + props.name} "
//       />
//     </Link>
//   </div>

// );
