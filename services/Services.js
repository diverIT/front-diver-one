import React from 'react'
import { GET, Login, Logout, POST } from './crud';

const path = "/users/me"

export const Services = {

    userRegister: (body) => {
        return POST("/users", body)
    },
    login: (body) => {
        return Login("/users/login",body)
    },
    getUserProfile : () => {
        return GET(path)
    },
    logout : () => {
        return Logout(`${path}/logout`)
    },
    logoutAll : () => {
        return Logout(`${path}/logoutall`)
    },
    changePass : (body) => {
        return POST(`${path}/changepass`,body)
    }
}

export default Services;