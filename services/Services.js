import React from 'react'
import { GET, POST } from './crud';

const path = "/users/me"

export const Services = {

    userRegister: (body) => {
        return POST("/users", body)
    },
    login: (body) => {
        return POST("/users/login",body)
    },
    getUserProfile : () => {
        return GET(path)
    },
    logout : () => {
        return POST(`${path}/logout`)
    },
    logoutAll : () => {
        return POST(`${path}/logoutall`)
    },
    changePass : (body) => {
        return POST(`${path}/changepass`,body)
    }
}

export default Services;