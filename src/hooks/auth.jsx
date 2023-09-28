import { createContext, useContext, useState, useEffect} from "react";

import { api } from "../services/api";

export const AuthContext = createContext({})

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
    const [data, setData] = useState({})

    async function signIn({ email, password }) {

        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)
            
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`
            setData({ user, token })

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message)
            } else {
                alert("Not was possible to sign in")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@rocketnotes:token");
        localStorage.removeItem("@rocketnotes:user");

        setData({})
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketnotes:token");
        const user = localStorage.getItem("@rocketnotes:user");

        if(token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, [])
    return (
        <AuthContext.Provider value={{ signIn, user: data.user, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth }