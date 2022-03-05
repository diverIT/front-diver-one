import axios from 'axios'

const RequestApi = async () => {
    const token = await localStorage.getItem('token')
    return axios.create({
        baseURL : process.env["API_URL"],
        headers: token ? {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            } : {
                'Content-Type': 'application/json',
            },

    })

}

export const GET =  async (path) => {
    const res = await( await RequestApi()).get(path)
    return res
}
export const POST =  async (path, body) => {
    const res = await( await RequestApi()).get(path,JSON.stringify(body))
    return res
}
export const PUT =  async (path,id,body) => {
    const res = await( await RequestApi()).get(`${path}/${id}`,JSON.stringify(body))
    return res
}
export const DELETE =  async (path,id,body) => {
    const res = await( await RequestApi()).get(`${path}/${id}`,JSON.stringify(body))
    return res
}