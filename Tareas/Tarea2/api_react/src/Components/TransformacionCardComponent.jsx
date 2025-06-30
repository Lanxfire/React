import styles from "../Styles/ProfileWarrior.module.css";

const TransformacionCardComponent = ({item}) => {

    console.log("TransformacionCardComponent");
    console.log(item);

    return (
          <div key={item.id} className={styles.transformationCard}>
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
                <p>Ki: {item.ki}</p>
              </div>
    );
}


export default TransformacionCardComponent;