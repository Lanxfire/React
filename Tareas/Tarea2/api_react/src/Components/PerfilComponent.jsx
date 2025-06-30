import styles from "../Styles/ProfileWarrior.module.css";
import Stadistica from "./StadisticaPerfilComponent";
import Planeta from "./PlanetComponent";
import Trans from "./TransformacionComponent";

function PerfilComponent({ data }) {
  if (!data || !data.name || !data.image) {
    return <p className={styles.noCharacterMessage}>Personaje no disponible.</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Perfil: {data.name}</h1>

        <div className={styles.profileContent}>
          <img
            src={data.image}
            alt={data.name}
            className={styles.mainImage}
          />
          <p className={styles.description}>{data.description}</p>
        </div>

        <Planeta data={data.originPlanet} />

        <div className={styles.dataSection}>
          <div className={styles.leftColumn}>
            <Trans data={data.transformations} />
          </div>
          <div className={styles.rightColumn}>
            <Stadistica
              race={data.race}
              gender={data.gender}
              affiliation={data.affiliation}
              ki={data.ki}
              maxKi={data.maxKi}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilComponent;
