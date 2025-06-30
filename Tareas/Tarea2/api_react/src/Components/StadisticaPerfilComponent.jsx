import styles from "../Styles/ProfileWarrior.module.css";

const StadisticaPerfilComponent = ({ race, gender, affiliation, ki, maxKi }) => {
    return (
        <div className={styles.transformations}>
            <h2>Estadisticas Principales</h2>
            <div className={styles.stats}>
                <p><strong>Raza:</strong> {race}</p>
                <p><strong>Género:</strong> {gender}</p>
                <p><strong>Afiliación:</strong> {affiliation}</p>
                <p><strong>Ki:</strong> {ki}</p>
                <p><strong>Ki Máximo:</strong> {maxKi}</p>
            </div>
        </div>
    );
}


export default StadisticaPerfilComponent;