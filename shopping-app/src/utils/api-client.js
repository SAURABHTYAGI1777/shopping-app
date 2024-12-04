// Api Call
import axios from 'axios';
export const getProducts = async ()=>{
    const response = await axios.get(import.meta.env.VITE_URL);
    //console.log('Response is ', response);
    return response.data;
    // console.log('URL is ', );
}