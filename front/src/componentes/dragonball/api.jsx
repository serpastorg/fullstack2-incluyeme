import axios from "axios"
export const fetchPersonajes = async function(link) {
    const BASE_URL=link?link:'https://dragonball-api.com/api/characters'
    try{
        const response = await axios.get(BASE_URL)
        const data=response.data
        return data
    }
    catch(err){
        console.error(err)
    }
}