import { useEffect, useState } from "react"
import YodlrApi from "./Api"


const Admin = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        async function getUsers() {

            try {

                const u = await YodlrApi.getUsers();
                console.log(u);

                setUsers(u);

            } catch (e){

                console.log(e);

            }

        }

        getUsers();

    }, []);

    return (

        <div className="Admin">

            <h1>Admin COMPONENT</h1>

            <ul>
                {users.map(u => <li key={u.id}>{u.firstName} {u.lastName}</li>)}
            </ul>

        </div>

    )

}

export default Admin;