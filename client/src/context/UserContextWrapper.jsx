import { useEffect, useState } from "react";
import { initialUserContext } from "./initialUserContext";
import { BACKEND_URL } from "../config/env";
import { UserContext } from "./UserContext";

export function UserContextWrapper(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(initialUserContext.isLoggedIn);
    const [role, setRole] = useState(initialUserContext.role);
    const [username, setUsername] = useState(initialUserContext.username);
    const [email, setEmail] = useState(initialUserContext.email);
    const [id, setId] = useState(initialUserContext.id);

    function login(id, username, email) {
        setIsLoggedIn(true);
        setRole('admin');
        setId(id);
        setUsername(username);
        setEmail(email);
    }

    function logout() {
        setIsLoggedIn(initialUserContext.isLoggedIn);
        setRole(initialUserContext.role);
        setId(initialUserContext.id);
        setUsername(initialUserContext.username);
        setEmail(initialUserContext.email);
    }

    useEffect(() => {
        fetch(BACKEND_URL + '/api/login', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then((data) => {
                if (data.status === 'success') {
                    login(data.id, data.username, data.email)
                };
            })
            .catch(console.error);
    }, []);


    const values = {
        isLoggedIn,
        role,
        id,
        email,
        username,
        login,
        logout,
    }

    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}