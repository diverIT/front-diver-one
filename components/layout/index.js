import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from "next/router";
import Aside from '../aside/Aside'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import style from '../../styles/Main.module.css'
import ContextStore from '../../store/Context';
export default function Layout({ children }) {
    const { getProfile, profile } = useContext(ContextStore)
    const [toggle, setToggle] = useState(false)
    const location = useRouter().pathname

    useEffect(() => {
        if (location === '/') {
            setToggle(true)
        } else if (location === '/login') {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }, [location])

    useEffect(() => {
        
    
            getProfile()

        
    }, [location])
    return (
        <div className={style.mainContainer}>
            {!toggle && <Aside />}
            {!toggle &&
                <div className={style.userProfile}>
                    <div className={style.circleProfile}>
                        <FontAwesomeIcon icon={faUser} className={style.iconProfile} />
                    </div>
                    <a href='#' className={style.profile}>Bienvenido <p>{profile?.data?.fullname}</p></a>
                    <div className={style.logo}>
                        dIT
                    </div>
                </div>
            }
            <div className={style.contentWrapper}>
                {children}
            </div>
        </div>
    )
}

