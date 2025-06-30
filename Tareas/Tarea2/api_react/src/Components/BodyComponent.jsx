import { useState, useEffect } from "react";
import Perfil from "./PerfilComponent";

const BodyComponent = ({ idProfile }) => {
    const [perfilGuerrero, setperfilGuerrero] = useState([null]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlRequest = 'https://dragonball-api.com/api/characters/' + idProfile;
                console.log('urlRequest2--> ' + urlRequest)
                
                const response = await fetch(urlRequest);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();

                console.log(json)

                if (response.ok)
                    setperfilGuerrero(json);

            }
            catch (err) {
                console.error('Error al obtener los datos:', err);
                setError(err.message);
            }
        };

        fetchData();
    }, [idProfile]);

    if (error) return <div>Error: {error}</div>;

    if (!perfilGuerrero) return <div>Cargando personaje...</div>;


    return (
    <div>
      <Perfil data={perfilGuerrero} />
    </div>
  );
};

export default BodyComponent