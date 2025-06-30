import { useState, useEffect } from 'react';

const SearchPost = () => {
  const [query, SetQuery] = useState("");
  const [users, SetUsers] = useState([]);
  const [isLoading, SetisLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      SetisLoading(true);
      setError(null);

      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`);
        if (!response.ok) {
          throw new Error("Error al Obtener los datos");
        }
        const data = await response.json();
        SetUsers(data);
      } catch (error) {
        setError(error);
        SetUsers([]);
      } finally {
        SetisLoading(false);
      }
    };

    if (query.trim() !== "") {
      fetchUsers();
    } else {
      SetUsers([]);
      SetisLoading(false);
    }
  }, [query]);

  return (
    <div>
      <h1>Lista de Usuarios</h1>

      <p>
        Search:{" "}
        <input
          type="text"
          placeholder="Buscar por Nombre"
          value={query}
          onChange={(event) => SetQuery(event.target.value)}
        />
      </p>

      {isLoading && <p>Cargando...</p>}

      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>Error: {error.message}</p>}

      {!isLoading && !error && users.length === 0 && query.trim() !== "" && (
        <p style={{ color: 'red', fontWeight: 'bold' }}>
          No se encontraron usuarios.
        </p>
      )}

      {!isLoading && users.length > 0 && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchPost;
