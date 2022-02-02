import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './form.css'

export default function Form() {
    const [data, setData] = useState({
        user: "",
        password: ""
    })
    function sendData(e) {
        e.preventDefault()
        setData({ user: "", password: "" })
    }
    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: [e.target.value]
        });
    }
    return (
        <>
            <form onSubmit={sendData} className='form'>
                <label className='label-form'>Login</label>
                <input
                    type="text"
                    name='user'
                    className='input-form'
                    placeholder='Usuario'
                    onChange={handleChange}
                    value={data.user} />
                <input
                    type="password"
                    name='password'
                    className='input-form'
                    placeholder='Contraseña'
                    onChange={handleChange}
                    value={data.password}
                />
                <Link to='/home' style={{ textDecoration: 'none', color: '#ffff' }}> <button type='submit' className='submit'>Iniciar Sesion </button></Link>
                <Link to="#" className='remember-password'>Olvide mi contraseña</Link>
            </form>

        </>
    )
}