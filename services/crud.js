import axios from 'axios'

const RequestApi = () => {
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL: "http://localhost:5000",
        headers: token ? {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        } : {
            'Content-Type': 'application/json',
        },
    })
}
///////////Login

export const Login = async (path, body) => {
    try {
        const res = await (RequestApi()).post(path, JSON.stringify(body))
        localStorage.setItem('token', res.data.token)
        return res
    } catch (error) {
        console.log(error);
    }

}
/////////////logout
export const Logout = async (path) => {
    const res = await (RequestApi()).post(path)
    return res
}
/////////

export const GET = async (path) => {
    const res = await (RequestApi()).get(path)
    return res
}
export const POST = async (path, body = "") => {
    const res = await (RequestApi()).post(path, JSON.stringify(body))
    return res
}
export const PUT = async (path, id, body) => {
    const res = await (RequestApi()).put(`/${path}/${id}`, JSON.stringify(body))
    return res
}
export const DELETE = async (path, id, body) => {
    const res = await (RequestApi()).delete(`/${path}/${id}`, JSON.stringify(body))
    return res
}