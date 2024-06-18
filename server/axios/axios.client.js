import axios from 'axios'

const get = async(url)=>{
    const res = await axios.get(url);
    return res.data
}

export default {get};