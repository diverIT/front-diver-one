import React from 'react'
import Aside from '../aside/Aside'
import style from '../../styles/Main.module.css'
export default function Layout({ children }) {
    return (
        <div className={style.mainContainer}>
            <Aside />
            <div className={style.contentWrapper}>{children}</div>
        </div>
    )
}

