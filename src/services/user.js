import axios from 'axios'
import config from '../config.json'

const apiUrl = config.apiUrl + "/auth"

async function loginUser(email, password){
    const {data: jwt} = await axios.post(apiUrl, {email, password})
    
}
