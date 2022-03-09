import react, { useState, useEffect } from "react";
import ContextStore from "./Context";
import { useRouter } from "next/router";

export default function Provider({ children }) {
    const router = useRouter()
    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    if (user === null) {
        router.push("/login")
    }
    function getUser() {
        try {
            const body = localStorage.getItem('user')
            if (!body) {
                router.push("/login")
            } else {
                setUser(body)
                router.push('/userLogged')
            }

        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getUser()
    }, [])



    async function logout() {
        try {
            await Services.login(body)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <ContextStore.Provider value={{ setUser, logout }} >
            {children}
        </ContextStore.Provider>
    )
    

}




