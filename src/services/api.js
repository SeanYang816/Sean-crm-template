import axios from "axios"

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const instance = axios.create({
    baseURL: BASE_URL,
    test: 'This is just for testing',
})

export const GET_USERTOKEN = (instance) => (e) => {
    const userToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
    instance.get('')
    .then((data) => console.log(`token: ${userToken}`))
    instance.defaults.headers.common['userToken'] = userToken
}

export const TEST_USERTOKEN = (instance) => (e) => {
    instance.get('comments/1')
    .then((data) => console.log('12'))

}