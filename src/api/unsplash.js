import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 8fe7035c877e53f1c5d9f4968325cd9ec86572a904e2594bc559b8bbbfdc6434'
    }
    
});