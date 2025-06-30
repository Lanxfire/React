import styles from "../Styles/ProfileWarrior.module.css";

const PlanetComponent = ({ data }) => {

    if (!data) return <p>Planeta no disponible.</p>;

    return (
        <div className={styles.planetCard}>
            <h2 className={styles.planetTitle}>Planeta de origen: {data.name}</h2>

            <div className={styles.planetContent}>
                <img src={data.image} alt={data.name} className={styles.planetImage} />
                <p className={styles.planetDescription}>{data.description}</p>
            </div>
        </div>
    );
}


export default PlanetComponent;