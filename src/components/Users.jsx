import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/actions";

const Users = () => {
    const dispatch = useDispatch();
    const { users, loading, error } = useSelector((state) => state);

   /* useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);*/
 
    return (
        <div>
             <button onClick={() => dispatch(fetchUsers())}>
                Fetch Users
            </button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {users.map((user) => (
                <li key={user.id}>{user.name} | {user.email} | {user.phone} | {user.website}</li>
                ))}
            </ul>
        </div>
    );
};

export default Users;