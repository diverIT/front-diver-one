import React, { useState,useEffect } from 'react'
import { useRouter } from "next/router";
import Aside from '../aside/Aside'
import style from '../../styles/Main.module.css'
export default function Layout({ children }) {
    const [toggle, setToggle] = useState(false)
    const location = useRouter().pathname

    useEffect(() => {
        if (location === '/') {
            setToggle(true)
        } else if( location === '/login'){
            setToggle(true)
        }else{
            setToggle(false)
        }
    }, [location])

    return (
        <div className={style.mainContainer}>
            {!toggle && <Aside />}
            <div className={style.contentWrapper}>
                {children}
            </div>
        </div>
    )
}

