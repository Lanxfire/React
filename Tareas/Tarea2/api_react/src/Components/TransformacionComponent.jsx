import styles from "../Styles/ProfileWarrior.module.css";
import Card from "./TransformacionCardComponent"

const TransformacionComponent = ({data}) => {

    console.log("Transformacion");
    console.log(data);

     if (!data || !Array.isArray(data) || data.length === 0) {
    return <p>No hay transformaciones disponibles.</p>;
  }

    return (
       <div className={styles.transformations}>
          <h2>Transformaciones</h2>
          <div className={styles.transformationGrid}>
            {data.map((item) => (
          <Card item = {item}/>
        ))}

          </div>
        </div>
    );
}


export default TransformacionComponent;