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

const GET =  async (path) => {
    const res = await( await RequestApi()).get(path)
    return res
}