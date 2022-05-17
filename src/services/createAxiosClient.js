import axios from 'axios'

let createAxiosClient
    ; (function () {
        console.log('auto')
        const config = {
            // baseURL: process.env.REACT_APP_XHR_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        }

        createAxiosClient = axios.create(config)

        createAxiosClient.interceptors.response.use(
            (response) => {
                console.log(response.data)
                return response.data
            },
            (error) => {
                console.error(error)
            },
        )
    })()

const getAxios = () => createAxiosClient
export default getAxios
