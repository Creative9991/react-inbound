import axios from 'axios';


export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID dF0bXmEdvPCdjut3Wl02_iISzu26bNul_POUTxMW30k',
      }  
})