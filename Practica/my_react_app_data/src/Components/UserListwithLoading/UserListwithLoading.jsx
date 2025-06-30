import {useState,useEffect} from 'react';

const UserListwithLoading = () => {
    const [users,SetUsers] = useState([]);
    const [isLoading,SetisLoading] = useState(true);
    const [error,Seterror] = useState(null);

    useEffect(()=>{
        const fetchUsers = async()=>
        {
            try
            {
                await new Promise((resolve) => setTimeout(resolve, 2000));

                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok)
                {
                    throw new Error("Error al Obtener los datos");
                }
                const data = await response.json()
                SetUsers(data)
            }
            catch (error)
            {
                setError(error);
            }
            finally
            {
                SetisLoading(false);
            }
        }
        fetchUsers();
        },[]);

        

    if (isLoading) {
        return <p>Cargando...</p>
    }

    if (error) {
        return <p>Error:, {error}</p>
    }

    if (!isLoading && users.length === 0) {
    return (
        <p style={{ color: 'red', fontWeight: 'bold' }}>
            No se encontraron usuarios.
        </p>
        );
    }

    return (
        <div>
            <h1>
                Lista de Usuarios
            </h1>
            <ul>
            {
                users.map((user,index) => (
                    <li key={index}>{user.name}</li>
                ))
            }
        </ul>
        </div>
    );
}

export default UserListwithLoading;