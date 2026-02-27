import { useEffect, useState } from "react";
import { initialUserContext } from "./initialUserContext";
import { BACKEND_URL } from "../config/env";
import { UserContext } from "./UserContext";

export function UserContextWrapper(props) {
    const [user, setUser] = useState(initialUserContext);

    function login({id, username, email}) {
        setUser({
            isLoggedIn: true,
            role: 'admin',
            id: id,
            username,
            email,
        });
    }

    function logout() {
        setUser(initialUserContext);
    }

    useEffect(() => {
        fetch(BACKEND_URL + '/api/login', {
            method: 'GET',
            credentials: 'include',
        })
            .then(res => res.json())
            .then((data) => {
                if (data.status === 'success') {
                    login({
                        id: data.userData.id,
                        username: data.userData.username,
                        email: data.userData.email,
                    });
                };
            })
            .catch(console.error)
    }, []);

    const values = {
        ...user,
        login,
        logout,
    }

    return (
        <UserContext.Provider value={values}>
            {props.children}
        </UserContext.Provider>
    )
}