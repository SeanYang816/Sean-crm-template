import axios from "axios"

const BASE_URL = 'https://jsonplaceholder.typicode.com/comments/1'

export const instance = axios.create({
    baseURL: BASE_URL,
    test: 'This is just for testing',
})
