import FiltroGuerreros from './hooks/HFiltroGuerreros'
import { useState } from "react";
import styles from './Styles/ProfileWarrior.module.css'
import BodyComponent from './Components/BodyComponent';
import music from './Components/MusicComponent'


function App() {
  const [guerreroId, setguerreroId] = useState("");

  return (
    <div>
      <music />
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Seleccionar Guerrero Z</h1>
        <div className={styles.controls}>
          <FiltroGuerreros paramId={setguerreroId} />
        </div>
        {guerreroId && (
          <p className={styles.resultText}>Valor seleccionado en App: <strong>{guerreroId}</strong></p>
        )}
      </div>
      <div>
        <BodyComponent idProfile={guerreroId} />
      </div>
    </div>
  )
}

export default App
