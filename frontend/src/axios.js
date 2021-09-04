import axios from 'axios'

const Instance = axios.create({
    baseURL: 'http://localhost:9004'
})

export default Instance