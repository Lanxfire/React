import {useState,useEffect} from 'react';

const UserList = () => {
    const [users,SetUsers] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>SetUsers(data))
        .catch((error)=>console.error("Error fetching data: ",error))
    },[])

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

export default UserList;