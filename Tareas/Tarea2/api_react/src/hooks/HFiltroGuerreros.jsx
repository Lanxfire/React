import { useState, useEffect } from "react";

const HFiltroGuerreros = ({ paramId }) => {
    const [filtered, setFiltered] = useState([]);
    const [selectedId, setSelectedId] = useState("");
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlResponse = 'https://dragonball-api.com/api/characters?page=1&limit=200'
                console.log(urlResponse);
                const response = await fetch(urlResponse);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const json = await response.json();
                setCharacters(json.items);
                setFiltered(json.items);

            }
            catch (err) {
                console.error('Error al obtener los datos:', err);
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    if (error) return <div>Error: {error}</div>;

    const handleSearch = (e) => {
        const text = e.target.value.toLowerCase();
        const result = characters.filter(c => c.name.toLowerCase().includes(text));
        setFiltered(result);
        setSelectedId("");
    };

    const handleSelectChange = (e) => {
        const id = Number(e.target.value);
        setSelectedId(id);
        paramId(id);
    };


    return (
        <div>
            <input type="text" placeholder="Buscar por nombre" onChange={handleSearch} />

            <select onChange={handleSelectChange} value={selectedId || ""}>
                <option value="" disabled>
                    Seleccione el Perfil deseado
                </option>
                {filtered.map(item => (
                    <option key={item.id} value={item.id}>
                        {item.name}
                    </option>
                ))}
            </select>

        </div>
    );

}

export default HFiltroGuerreros;