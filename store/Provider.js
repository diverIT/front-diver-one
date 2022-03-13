import React, { useState, useEffect } from "react";
import ContextStore from "./Context";
import { useRouter } from "next/router";
import Services from '../services/Services'
import { route } from "next/dist/server/router";

export default function Provider({ children }) {
    //////////////////////to redirect
    const location = useRouter().pathname;
    const router = useRouter()
    function getUser() {
        try {
            const user = localStorage.getItem('token')
            if (!user) {
                router.push("/login")
            } else {
                router.push('/userLogged')
            }
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        function redirectToUserLogged() {
            const user = localStorage.getItem('token')
            if (user && location === '/login') {
                router.push('/userLogged')
            }
        }
        redirectToUserLogged()


    }, [location])

    useEffect(() => {
        getUser()
    }, [])
    ////////////////////////////Authentication with server
    const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    async function login(body) {
        try {
            setIsLoading(true)
            const res = await Services.login(body)
            if (res.status === 400) return
            router.push('/userLogged')
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setHasError(true)
        } finally {
            setIsLoading(false)
        }
    }
    ////////// get profile 
    const [profile, setProfile] = useState("")
    async function getProfile() {
        try {
            const user = localStorage.getItem('token')
            if(user){
                setProfile(await Services.getUserProfile())
            }else {
                setProfile("")
            }
            
        } catch (error) {
            
        }
        
    }

    return (
        <ContextStore.Provider value={{ hasError, login, isLoading, setHasError, getProfile, profile}} >
            {children}
        </ContextStore.Provider>
    )


}




