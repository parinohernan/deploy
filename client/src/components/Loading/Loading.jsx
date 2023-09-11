import style from "./Loading.module.css";

const Loading = (props) => {
  const { handleFilterByName } = props;
  return (
    <div className={style.divLoading}>
      <img src="../../../public/images/loading.gif" alt="cargando..." />
      <input type="text" onChange={handleFilterByName} />
    </div>
  );
};

export default Loading;
