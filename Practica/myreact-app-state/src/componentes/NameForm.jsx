import {useState} from 'react';

const NameForm = () => {
    const [name, setName] = useState("");

    return (
        <div>
            <input 
            type="text"
            placeholder='Ingrese su Nombre'
            value={name}
            onChange={(event) => setName(event.target.value)}
            />
            <p>Hola, {name || "visitante"}</p>
        </div>
    )
}

export default NameForm;